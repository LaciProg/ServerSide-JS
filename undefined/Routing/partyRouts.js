var authMW = require('../middlewares/auth_render/authMW');
var getPartyMW = require('../middlewares/party/getPartyMW');
var getPartiesMW = require('../middlewares/party/getPartiesMW');
var savePartyMW = require('../middlewares/party/savePartyMW');
var delPartyMW = require('../middlewares/party/delPartyMW');
var renderMW = require('../middlewares/auth_render/renderMW');

//var partyModel = require('../models/party');

module.exports = function (app) {

            var objectRepository = {
//                partyModel: partyModel
            };

            /**
            * List all parties
            */
            app.get('/gamemodes/:gamemodeid/party',
                authMW(objectRepository),
                getPartiesMW(objectRepository),
                renderMW(objectRepository, 'parties')
            );

            /**
            * Create a new party
            */
            app.use('/gamemodes/:gamemodeid/party/new',
                authMW(objectRepository),
                savePartyMW(objectRepository),
                renderMW(objectRepository, 'partyedit')
            );

            /**
            * Edit a party
            */
            app.use('/gamemodes/:gamemodeid/party/edit/:partyid',
                authMW(objectRepository),
                getPartyMW(objectRepository),
                savePartyMW(objectRepository),
                renderMW(objectRepository, 'partyedit')
            );
    
            /**
            * Delete a party
            */
            app.get('/gamemodes/:gamemodeid/party/del/:partyid',
                authMW(objectRepository),
                getPartyMW(objectRepository),
                delPartyMW(objectRepository)
            );
}