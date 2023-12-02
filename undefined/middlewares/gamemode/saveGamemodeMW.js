const requireOption = require('../common').requireOption;
/**
 * if there is no data, next, if there is data, it is saved,
 * if there is an error, change it to a variable and next, if it was saved, it redirects to /gamemodes
 */
module.exports = function (objectrepository, viewName) {

    const gamemodeModel = requireOption(objectrepository, 'gamemodeModel');

    return async function (req, res, next) {
        if (typeof req.body.nev === 'undefined' ||
            req.body.nev === '') {
            return next();
        }
        if (res.locals.gamemode === undefined) {
            res.locals.gamemode = new gamemodeModel();
        }

        res.locals.gamemode.gm = req.body.nev;
        res.locals.gamemode.active = 0;

        await res.locals.gamemode.save().then(() => {
            res.redirect(`/gamemodes`);
        }).catch(err => {
            return next(err);
        });

        return next();
    }
}