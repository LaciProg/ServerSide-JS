const requireOption = require('../common').requireOption;
/**
 * if there is no data, next, if there is data, it is saved,
 * if there is an error, change it to a variable and next, if it was saved, it redirects to /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    const profileModel = requireOption(objectrepository, 'profileModel');

    return async function (req, res, next) {

        if (typeof res.locals.profile === 'undefined') {
            return next();
        }

        if(typeof req.body.name === 'undefined' ||
            typeof req.body.password === 'undefined' ||
            typeof req.body.email === 'undefined' ||
            typeof req.body.solo === 'undefined' ||
            typeof req.body.flex === 'undefined' ||
            typeof req.body.Role1 === 'undefined' ||
            typeof req.body.Role2 === 'undefined' ||
            typeof req.body.contact === 'undefined' ||
            typeof req.body.champ === 'undefined' ||
            typeof req.body.info === 'undefined' ||
            typeof req.body.high === 'undefined' ||
            req.body.name === '' ||
            req.body.password === '' ||
            req.body.email === '' ||
            req.body.solo === '' ||
            req.body.flex === '' ||
            req.body.Role1 === '' ||
            req.body.Role2 === '' ||
            req.body.contact === '' ||
            req.body.champ === '' ||
            req.body.info === '' ||
            req.body.high === ''){
            return next();
        }

        res.locals.profile.Name = req.body.name;
        res.locals.profile.Password = req.body.password;
        res.locals.profile.Email = req.body.email;
        res.locals.profile.Solo_duo = req.body.solo;
        res.locals.profile.Flex = req.body.flex;
        res.locals.profile.Role1 = req.body.Role1;
        res.locals.profile.Role2 = req.body.Role2;
        res.locals.profile.Contact = req.body.contact;
        res.locals.profile.Favourite_champion = req.body.champ;
        res.locals.profile.About_me = req.body.info;
        res.locals.profile.Highest_rank = req.body.high;

        res.locals.profile.save().then(result => {
            res.redirect('/profile/'+res.locals.profile._id);
        }).catch(err => {
            return next(err);
        });

    }

}