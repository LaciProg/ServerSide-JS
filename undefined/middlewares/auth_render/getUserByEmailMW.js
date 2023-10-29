const requireOption = require('../common').requireOption;

/**
 * get the user from the database by Email
 */
module.exports = function (objectrepository) {

    const profileModel = requireOption(objectrepository, 'profileModel');

    return async function (req, res, next) {
        if(typeof req.body.email === 'undefined' ||
            typeof req.body.password === 'undefined' ||
            req.body.email === '' ||
            req.body.password === ''){
            res.redirect('/');
        }
        await profileModel.findOne({Email: req.body.email}).then(profile =>{
            if (profile === null) {throw new Error('No profile found');}
            res.locals.profile = profile;
            console.log("getUserByEmailMW");
            console.log(profile);
            return next();
        }).catch(err =>{
            return next(err);
        });

    };
}