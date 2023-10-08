const gamemodeModel = require("../../models/gamemode");
var requireOption = require('../common').requireOption;
/**
 * if there is no data, next, if there is data, it is saved,
 * if there is an error, change it to a variable and next, if it was saved, it redirects to /gamemodes
 */
module.exports = function (objectrepository, viewName) {

    //var gamemodeModel = requireOption(objectrepository, 'gamemodeModel');

    return function (req, res, next) {

        return next();
    }

}