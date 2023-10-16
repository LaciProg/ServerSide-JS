const gamemodeModel = require("../../models/gamemode");
var requireOption = require('../common').requireOption;

/**
 * DB acces to get all gamemodes
 */
module.exports = function (objectrepository, viewName) {

    //var gamemodeModel = requireOption(objectrepository, 'gamemodeModel');

    return function (req, res, next) {

        res.locals.gamemodes = [
            {
                _id: "1",
                gm: "Blind pick",
                active: "10"
            },
            {
                _id: "2",
                gm: "Draft pick",
                active: "200"
            },
            {
                _id: "3",
                gm: "Ranked solo/dou",
                active: "1000"
            },
            {
                _id: "4",
                gm: "Ranked flex",
                active: "300"
            },
            {
                _id: "5",
                gm: "Teamfight tactics",
                active: "150"
            }

        ];

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