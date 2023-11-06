var requireOption = require('../common').requireOption;
/**
 * DB acces to get a specific party by partyid
 * takes the ID from the parameter and sends it to the DB. What comes back is packed into res/locals
 * if there is no such user redierct => /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    const partyModel = requireOption(objectrepository, 'partyModel');

    return async function (req, res, next) {

        await partyModel.find().then(parties =>{
            if (parties === null) {throw new Error('No party found');}
            for (var i = 0; i < parties.length; i++) {

                if (parties[i]._Gamemode.toString() === req.params.gamemodeid
                    && parties[i]._Profile.toString() === req.session.profileID.toString()) {
                    res.locals.hasParty = true

                    return next();
                }
            }
            res.locals.hasParty = false
            return next();
        }).catch(err =>{
            return next(err);
        });

    }
}