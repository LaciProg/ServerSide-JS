var authMW = require('../middlewares/auth_render/authMW');
var getPartyMW = require('../middlewares/party/getPartyMW');
var getPartiesMW = require('../middlewares/party/getPartiesMW');
var savePartyMW = require('../middlewares/party/savePartyMW');
var delPartyMW = require('../middlewares/party/delPartyMW');
var renderMW = require('../middlewares/auth_render/renderMW');
var getProfileMW = require('../middlewares/profile/getProfileMW');
var getGameModeMW = require('../middlewares/gamemode/getGamemodeMW');

//var partyModel = require('../models/party');

module.exports = function (app) {

        var objectRepository = {
//                partyModel: partyModel
        };


        /**
        * Edit a party
        */
        app.use('/gamemodes/:gamemodeid/party/edit/:partyid',
            authMW(objectRepository),
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
            getProfileMW(objectRepository),
            getPartyMW(objectRepository),
            delPartyMW(objectRepository)
        );

    /**
     * Create a new party
     */
    app.use('/gamemodes/:gamemodeid/party/new',
        authMW(objectRepository),
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
            getPartiesMW(objectRepository),
            renderMW(objectRepository, 'party')
        );
}