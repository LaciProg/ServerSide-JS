var requireOption = require('../common').requireOption;
/**
 * DB acces to get a specific profile by profileid
 * takes the ID from the parameter and sends it to the DB. What comes back is packed into res/locals
 * if there is no such user redierct => /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    //var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        res.locals.profile =
            {
                _id: "1",
                Name: "Lacihun17",
                Solo_duo: "Silver 3 1 Lp",
                Flex: "Unranked",
                Role1: "ADC",
                Role2: "top",
                Highest_rank: "Gold 4 / flex",
                Favourite_champion: "Kai'sa, Samira",
                Contact: "dc: laci_hun",
                About_me: "Here is something about me :D"
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