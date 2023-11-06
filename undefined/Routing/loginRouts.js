const renderMW = require('../middlewares/auth_render/renderMW');
const getUserByEmailMW = require('../middlewares/auth_render/getUserByEmailMW');
const checkUserLoginMW = require('../middlewares/auth_render/checkUserLoginMW');
const sendPassMW = require('../middlewares/auth_render/sendPassMW');
const regUserMW = require('../middlewares/auth_render/regUserMW');
const saveProfileMW = require('../middlewares/profile/saveProfileMW');
const logoutMW = require('../middlewares/auth_render/logoutMW');

const gamemodeModel = require("../models/gamemode");
const partyModel = require("../models/party");
const profileModel = require("../models/profile");
const authMW = require("../middlewares/auth_render/authMW");
const getProfileMW = require("../middlewares/profile/getProfileMW");


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

    app.use('/reg/:profileid/edit',
        authMW(objectRepository),
        getProfileMW(objectRepository),
        renderMW(objectRepository, 'editnewprofile')
    );

    /**
     * Register page
     */
    app.get('/reg',
        renderMW(objectRepository, 'register')
    );
    /**
     * Register page
     */
    app.post('/reg',
        regUserMW(objectRepository),
        saveProfileMW(objectRepository),
        renderMW(objectRepository, 'editnewprofile')
    );

    app.get('/logout',
        authMW(objectRepository),
        logoutMW(objectRepository),
        renderMW(objectRepository, 'login')
    );


    /**
     * Login page
     */
    app.get('/',
        renderMW(objectRepository, 'login')
    );
    app.post('/',
        getUserByEmailMW(objectRepository),
        checkUserLoginMW(objectRepository),
    );
}

