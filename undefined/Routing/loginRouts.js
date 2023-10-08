var renderMW = require('../middlewares/auth_render/renderMW');
var getUserByEmailMW = require('../middlewares/auth_render/getUserByEmailMW');
var checkUserLoginMW = require('../middlewares/auth_render/checkUserLoginMW');
var sendPassMW = require('../middlewares/auth_render/sendPassMW');

module.exports = function (app) {

    var objectRepository = {
//        userModel: userModel
    };

    /**
     * Login page
     */
    app.use('/',
        getUserByEmailMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    /**
     * Forgetten password page
     */
    app.use('/sendpass',
        getUserByEmailMW(objectRepository),
        sendPassMW(objectRepository),
        renderMW(objectRepository, 'sendpass')
    );

    /**
     * Register page
     */
    app.use('/reg',
        regUserMW(objectRepository),
        renderMW(objectRepository, 'register')
    );
}

