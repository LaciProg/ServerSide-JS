var requireOption = require('../common').requireOption;
/**
 * delete, redirect to /gamemodes
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(typeof res.locals.gamemode === 'undefined'){
            return next();
        }

        res.locals.gamemode.remove(err => {
            if (err){
                return next(err);
            }

            return res.redirect('/gamemodes');
        });
    };

}