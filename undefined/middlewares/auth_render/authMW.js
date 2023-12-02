/**
 * If the user is not logged in, redirects to /
 */
module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.session.loggedIn === 'undefined' || req.session.loggedIn !== true) {
            return res.redirect('/');
        }

        next();
    };
};