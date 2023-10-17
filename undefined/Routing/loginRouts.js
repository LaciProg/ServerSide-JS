var renderMW = require('../middlewares/auth_render/renderMW');
var getUserByEmailMW = require('../middlewares/auth_render/getUserByEmailMW');
var checkUserLoginMW = require('../middlewares/auth_render/checkUserLoginMW');
var sendPassMW = require('../middlewares/auth_render/sendPassMW');
var regUserMW = require('../middlewares/auth_render/regUserMW');

module.exports = function (app) {

    var objectRepository = {
//        userModel: userModel
    };


    /**
     * Forgetten password page
     */
    app.use('/sendpass',
        getUserByEmailMW(objectRepository),
        sendPassMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    /**
     * Register page
     */
    app.get('/reg',
        //regUserMW(objectRepository),
        renderMW(objectRepository, 'register')
    );
    /**
     * Register page
     */
    app.post('/reg',
        regUserMW(objectRepository),
        //renderMW(objectRepository, 'register')
    );

    /**
     * Login page
     */
    app.use('/',
        getUserByEmailMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
}

