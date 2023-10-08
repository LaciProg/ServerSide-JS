var requireOption = require('../common').requireOption;
/**
 * DB acces to get a specific profile by profileid
 * takes the ID from the parameter and sends it to the DB. What comes back is packed into res/locals
 * if there is no such user redierct => /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    //var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

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