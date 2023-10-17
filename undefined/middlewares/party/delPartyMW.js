var requireOption = require('../common').requireOption;
/**
 * delete, redirect to /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository) {

    //var partyModel = requireOption(objectrepository, 'partyModel');

    return function (req, res, next) {

        res.redirect('/gamemodes/' + req.params.gamemodeid + '/party');
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