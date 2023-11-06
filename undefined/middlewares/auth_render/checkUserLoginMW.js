const requireOption = require('../common').requireOption;

/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - / when not signed in
 *    - /gamemodes when signed in
 */
module.exports = function (objectrepository) {

    const profileModel = requireOption(objectrepository, 'profileModel');

    return function (req, res, next) {
        if(typeof req.body.email === 'undefined' ||
            typeof req.body.password === 'undefined' ||
            req.body.email === '' ||
            req.body.password === ''){
            res.redirect('/');
        }

        if(req.body.password.toString() === res.locals.profile.Password.toString()) {
            req.session.loggedIn = true;
            req.session.email = req.body.email;
            req.session.profileID = res.locals.profile._id;
            return req.session.save(err => res.redirect('/gamemodes'));
        }
        else {
            res.locals.error = 'Hibás jelszó!';
            res.redirect('/');
        }

    };


};