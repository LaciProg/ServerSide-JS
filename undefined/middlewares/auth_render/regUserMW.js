const requireOption = require('../common').requireOption;

/**
 * Register a new user
 */
module.exports = function (objectrepository) {

    const profileModel = requireOption(objectrepository, 'profileModel');

        return async function (req, res, next) {
            if(typeof req.body.email === 'undefined' ||
                typeof req.body.password === 'undefined' ||
                typeof req.body.name === 'undefined' ||
                req.body.email === '' ||
                req.body.password === '' ||
                req.body.name === ''){
                res.redirect('/');
            }

            const newProfile = new profileModel();
            newProfile.Email = req.body.email;
            newProfile.Name = req.body.name;
            newProfile.Password = req.body.password;
            res.locals.profile = newProfile;
            res.locals.newUser = "newUser"
            return next();
        };
}