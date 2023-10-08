var requireOption = require('../common').requireOption;
/**
 * if there is no data, next, if there is data, it is saved,
 * if there is an error, change it to a variable and next,
 * if it was saved, it redirects to /gamemodes/:gamemodeid/party
 */
module.exports = function (objectrepository, viewName) {

    //var partyModel = requireOption(objectrepository, 'partyModel');

    return function (req, res, next) {

        return next();
    }

}