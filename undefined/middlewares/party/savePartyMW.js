const {raw} = require("express");
var requireOption = require('../common').requireOption;
/**
 * if there is no data, next, if there is data, it is saved,
 * if there is an error, change it to a variable and next,
 * if it was saved, it redirects to /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    const partyModel = requireOption(objectrepository, 'partyModel');

    return async function (req, res, next) {
        if(typeof req.body.Role1 === 'undefined' ||
            typeof req.body.Role2 === 'undefined'){
            return next();
        }

        //TODO if the profile has a party cant make a new one
        if(typeof res.locals.party === 'undefined'){
            res.locals.party = new partyModel();
            res.locals.party._Gamemode = req.params.gamemodeid;
            res.locals.party._Profile = res.locals.profile._id;
            res.locals.party.Name = res.locals.profile.Name;
            res.locals.party.Solo_duo = res.locals.profile.Solo_duo;
            res.locals.party.Flex = res.locals.profile.Flex;

            res.locals.gamemode.active += 1;
            await res.locals.gamemode.save().then(gamemode =>{
                console.log(gamemode);
            }).catch(err =>{
                return next(err);
            });
        }

        res.locals.party.Role1 = req.body.Role1;
        res.locals.party.Role2 = req.body.Role2;

        await res.locals.party.save().then(party =>{
            res.redirect(`/gamemodes/${req.params.gamemodeid}/party`);
        }).catch(err =>{
            return next(err);
        });

        return next();
    }

}