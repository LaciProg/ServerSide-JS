/**
 * Register a new user
 */
module.exports = function (objectrepository) {

        return function (req, res, next) {
            res.redirect('/');
            return next();
        };
}