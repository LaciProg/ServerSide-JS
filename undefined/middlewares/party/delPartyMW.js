var requireOption = require('../common').requireOption;
/**
 * delete, redirect to /gamemodes/:gamemodeid/party
 */

module.exports = function (objectrepository) {

    const partyModel = requireOption(objectrepository, 'partyModel');

    return async function (req, res, next) {

        if(typeof res.locals.party === 'undefined'){
            return next();
        }


        res.locals.gamemode.active -= 1;
        await res.locals.gamemode.save().then(gamemode =>{
            console.log(gamemode);
        }).then(party =>{
            partyModel.deleteOne({_id: res.locals.party._id}).then(party =>{
                console.log("party removed");
                res.redirect('/gamemodes/' + req.params.gamemodeid + '/party');
            });
        }).catch(err =>{
            return next(err);
        });

    };

}