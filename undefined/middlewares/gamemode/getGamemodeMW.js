const gamemodeModel = require("../../models/gamemode");
var requireOption = require('../common.js').requireOption;
/**
 * DB acces to get a specific gamemode by gamemodeid
 * takes the ID from the parameter and sends it to the DB.
 * What comes back is packed into res/locals if there is no such user redierct => /gamemodes
 */
module.exports = function (objectrepository, viewName) {

    const gamemodeModel = requireOption(objectrepository, 'gamemodeModel');

    return async function (req, res, next) {
        await gamemodeModel.findById(req.params.gamemodeid).then(gamemode =>{
            if (gamemode === null) {throw new Error('No gamemode found');}
            res.locals.gamemode = gamemode;
            console.log("getGamemodeMW");
            console.log(gamemode);
            return next();
        }).catch(err =>{
            return next(err);
        });
    }
}