const authMW = require('../middlewares/auth_render/authMW');
const getPartyMW = require('../middlewares/party/getPartyMW');
const getPartiesMW = require('../middlewares/party/getPartiesMW');
const savePartyMW = require('../middlewares/party/savePartyMW');
const delPartyMW = require('../middlewares/party/delPartyMW');
const renderMW = require('../middlewares/auth_render/renderMW');
const getProfileMW = require('../middlewares/profile/getProfileMW');
const getGameModeMW = require('../middlewares/gamemode/getGamemodeMW');
const hasPartyMW = require('../middlewares/party/hasPartyMW');

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
        * Edit a party
        */
        app.use('/gamemodes/:gamemodeid/party/edit/:partyid',
            authMW(objectRepository),
            getGameModeMW(objectRepository),
            getProfileMW(objectRepository),
            getPartyMW(objectRepository),
            savePartyMW(objectRepository),
            renderMW(objectRepository, 'editnewparty')
        );


        /**
        * Delete a party
        */
        app.get('/gamemodes/:gamemodeid/party/del/:partyid',
            authMW(objectRepository),
            getGameModeMW(objectRepository),
            getProfileMW(objectRepository),
            getPartyMW(objectRepository),
            delPartyMW(objectRepository)
        );

    /**
     * Create a new party
     */
    app.use('/gamemodes/:gamemodeid/party/new',
        authMW(objectRepository),
        getGameModeMW(objectRepository),
        getProfileMW(objectRepository),
        savePartyMW(objectRepository),
        renderMW(objectRepository, 'editnewparty')
    );

        /**
         * List all parties
         */
        app.get('/gamemodes/:gamemodeid/party',
            authMW(objectRepository),
            getGameModeMW(objectRepository),
            getProfileMW(objectRepository),
            getPartiesMW(objectRepository),
            hasPartyMW(objectRepository),
            renderMW(objectRepository, 'party')
        );
}