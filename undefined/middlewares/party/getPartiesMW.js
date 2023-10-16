var requireOption = require('../common').requireOption;

/**
 * DB acces to get all parties
 */
module.exports = function (objectrepository, viewName) {

    //var partyModel = requireOption(objectrepository, 'partyModel');

    return function (req, res, next) {

        res.locals.parties = [
            {
                _id: "1",
                Name: "Minta Béla",
                Solo_duo: "Iron 4 0 Lp",
                Flex: "Gold 4 0 LP",
                Role1: "top",
                Role2: "mid",
            },
            {
                _id: "2",
                Name: "Gipsz Jakab",
                Solo_duo: "hallenger 1000 Lp",
                Flex: "Unranked",
                Role1: "jungle",
                Role2: "mid",
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