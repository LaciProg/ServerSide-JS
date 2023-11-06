/**
 * Destroy current session for the user and redirect to main page
 */
const requireOption = require('../common');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        req.session.destroy(err => {
            res.redirect('/');
        });
    };
};