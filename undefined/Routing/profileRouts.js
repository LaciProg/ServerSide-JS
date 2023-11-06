const authMW = require('../middlewares/auth_render/authMW');
const renderMW = require('../middlewares/auth_render/renderMW');
const getProfileMW = require('../middlewares/profile/getProfileMW');
const saveProfileMW = require('../middlewares/profile/saveProfileMW');

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
         * Edit a profile
         */
        app.use('/profile/:profileid/edit',
            authMW(objectRepository),
            getProfileMW(objectRepository),
            saveProfileMW(objectRepository),
            renderMW(objectRepository, 'editnewprofile')
        );

        /**
        * Profile page
        */
        app.get('/profile/:profileid',
            authMW(objectRepository),
            getProfileMW(objectRepository),
            renderMW(objectRepository, 'profile')
        );

        /**
        * Create a new profile
        */
        app.use('/profile/new',
            authMW(objectRepository),
            saveProfileMW(objectRepository),
            renderMW(objectRepository, 'profile')
        );

   /*
        app.use('/profile/edit/:profileid',
            authMW(objectRepository),
            getProfileMW(objectRepository),
            saveProfileMW(objectRepository),
            renderMW(objectRepository, 'profile')
        );*/
}