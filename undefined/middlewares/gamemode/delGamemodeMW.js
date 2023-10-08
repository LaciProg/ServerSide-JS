var requireOption = require('../common').requireOption;
/**
 * delete, redirect to /gamemodes
 */
module.exports = function (objectrepository) {

    //var gamemodeModel = requireOption(objectrepository, 'gamemodeModel');

    return function (req, res, next) {

        /**
         * Something like:
         *  if (typeof res.tpl.comment === 'undefined')
         *  {
         *    return next();
         *  }
         *
         *  res.tpl.comment.remove(function(err){
         *    if (err){
         *      return next(err);
         *    }
         *
         *    next();
         *  )
         */

        return next();
    };

}