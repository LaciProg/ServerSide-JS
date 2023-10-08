const gamemodeModel = require("../../models/gamemode");
var requireOption = require('../common').requireOption;

/**
 * DB acces to get all gamemodes
 */
module.exports = function (objectrepository, viewName) {

    //var gamemodeModel = requireOption(objectrepository, 'gamemodeModel');

    return function (req, res, next) {

        /**
         * Something like:
         *  taskModel.find({},function(err,results){
         *    if (err){
         *      return next(new Error('Error getting tasks'));
         *    }
         *
         *    res.tpl.tasks = results;
         *    return next();
         *  )
         */

        return next();
    }
}