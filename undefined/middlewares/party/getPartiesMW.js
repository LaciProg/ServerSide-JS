var requireOption = require('../common').requireOption;

/**
 * DB acces to get all parties
 */
module.exports = function (objectrepository, viewName) {

    const partyModel = requireOption(objectrepository, 'partyModel');

    return async function (req, res, next) {
        await partyModel.find().then(parties =>{
            let neededParties = [];
            for (let i = 0; i < parties.length; i++) {
                if (parties[i]._Gamemode.toString() === req.params.gamemodeid.toString()) {
                    neededParties.push(parties[i]);
                }
            }
            res.locals.parties = neededParties;
            //console.log(neededParties);
            return next();
        }).catch(err=>{
            return next(err);
        });
    }
}