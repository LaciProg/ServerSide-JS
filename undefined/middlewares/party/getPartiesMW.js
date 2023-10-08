var requireOption = require('../common').requireOption;

/**
 * DB acces to get all parties
 */
module.exports = function (objectrepository, viewName) {

    //var partyModel = requireOption(objectrepository, 'partyModel');

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