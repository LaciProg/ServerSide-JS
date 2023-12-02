const requireOption = require('../common').requireOption;
/**
 * delete, redirect to /gamemodes
 */
module.exports = function (objectrepository) {

    const gamemodeModel = requireOption(objectrepository, 'gamemodeModel');
    const partyModel = requireOption(objectrepository, 'partyModel');

    return async function (req, res, next) {
        if (typeof res.locals.gamemode === 'undefined') {
            return next();
        }

        await partyModel.deleteMany({_Gamemode: res.locals.gamemode._id}).then(() => {

        }).then(() => {
            gamemodeModel.deleteOne({_id: res.locals.gamemode._id}).then(() => {
                return res.redirect('/gamemodes');
            })
        }).catch(err => {
            return next(err);
        });

    };

}