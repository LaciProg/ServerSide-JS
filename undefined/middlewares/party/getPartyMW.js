var requireOption = require('../common').requireOption;
/**
 * DB acces to get a specific party by partyid
 * takes the ID from the parameter and sends it to the DB. What comes back is packed into res/locals
 * if there is no such user redierct => /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    const partyModel = requireOption(objectrepository, 'partyModel');

    return async function (req, res, next) {
        console.log(req.params.gamemodeid);
        console.log(req.params.partyid);
        await partyModel.find().then(parties =>{
            if (parties === null) {throw new Error('No party found');}
            for (var i = 0; i < parties.length; i++) {
                console.log("-------------------");
                console.log(parties[i]._Gamemode.toString())
                console.log(req.params.gamemodeid);
                console.log("***");
                console.log(parties[i]._Profile.toString());
                console.log(res.locals.profile._id.toString());
                if (parties[i]._Gamemode.toString() === req.params.gamemodeid
                    && parties[i]._Profile.toString() === res.locals.profile._id.toString()) {
                    res.locals.party = parties[i]
                    console.log(parties[i]);
                    return next();
                }
            }
            throw new Error('No party found');
        }).catch(err =>{
            return next(err);
        });

    }
}