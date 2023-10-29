var requireOption = require('../common').requireOption;
/**
 * DB acces to get a specific profile by profileid
 * takes the ID from the parameter and sends it to the DB. What comes back is packed into res/locals
 * if there is no such user redierct => /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    const profileModel = requireOption(objectrepository, 'profileModel');

    return async function (req, res, next) {
        //await profileModel.findById(req.params.profileid).then(profile => {
        //TODO now only for testing 1 user
        await profileModel.find().then(profile => {
            if (profile === null) {
                throw new Error('No profile found');
            }
            res.locals.profile = profile[0];
            console.log(profile);
            return next();
        }).catch(err => {
            return next(err);
        });

    }

}