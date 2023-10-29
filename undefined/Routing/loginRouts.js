const renderMW = require('../middlewares/auth_render/renderMW');
const getUserByEmailMW = require('../middlewares/auth_render/getUserByEmailMW');
const checkUserLoginMW = require('../middlewares/auth_render/checkUserLoginMW');
const sendPassMW = require('../middlewares/auth_render/sendPassMW');
const regUserMW = require('../middlewares/auth_render/regUserMW');

const gamemodeModel = require("../models/gamemode");
const partyModel = require("../models/party");
const profileModel = require("../models/profile");


module.exports = function (app) {

    const objectRepository = {
        gamemodeModel: gamemodeModel,
        partyModel: partyModel,
        profileModel: profileModel
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

