const gamemodeModel = require("../../models/gamemode");
const {Connection} = require("mongoose");
var requireOption = require('../common').requireOption;

/**
 * DB acces to get all gamemodes
 */
module.exports = function (objectrepository, viewName) {

    const gamemodeModel = requireOption(objectrepository, 'gamemodeModel');

    return async function (req, res, next) {
        await gamemodeModel.find().then(gamemodes =>{
            res.locals.gamemodes = gamemodes;
            console.log(gamemodes);
            return next();
        }).catch(err=>{
            return next(err);
        });
    }
}