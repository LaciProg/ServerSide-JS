var requireOption = require('../common').requireOption;
/**
 * DB acces to get a specific profile by profileid
 * takes the ID from the parameter and sends it to the DB. What comes back is packed into res/locals
 * if there is no such user redierct => /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    const profileModel = requireOption(objectrepository, 'profileModel');

    return async function (req, res, next) {
        await profileModel.find().then(profiles => {
            if (profiles === null) {
                throw new Error('No profile found');
            }
            res.locals.profileID = req.session.profileID;
            for (let i = 0; i < profiles.length; i++) {
                if (req.params.profileid !== undefined) {
                    if (profiles[i]._id.toString() === req.params.profileid) {
                        res.locals.profile = profiles[i];
                        return next();
                    }

                }
                else {
                    if (profiles[i].Email === req.session.email.toString()) {
                        res.locals.profile = profiles[i];

                        return next();
                    }
                }

            }
            throw new Error('No profile found');
        }).catch(err => {
            return next(err);
        });

    }

}