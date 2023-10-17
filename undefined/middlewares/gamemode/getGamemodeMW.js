const gamemodeModel = require("../../models/gamemode");
var requireOption = require('../common.js').requireOption();
/**
 * DB acces to get a specific gamemode by gamemodeid
 * takes the ID from the parameter and sends it to the DB.
 * What comes back is packed into res/locals if there is no such user redierct => /gamemodes
 */
module.exports = function (objectrepository, viewName) {

        //var gamemodeModel = requireOption(objectrepository, 'gamemodeModel');

        return function (req, res, next) {

            res.locals.gamemode =
                {
                    _id: "2",
                    gm: "Draft pick",
                    active: "200"
                }

            /**
             * Something like:
             *  commentModel.findOne({ id: req.param('commentid')},function(err,result){
             *    if ((err) || (!result)){
             *      return req.redirect('/task/' + req.tpl.task.id);
             *    }
             *
             *    res.tpl.comment = result;
             *    return next();
             *  )
             */

            return next();
        }
}