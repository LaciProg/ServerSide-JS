const authMW = require('../middlewares/auth_render/authMW');
const getGamemodeMW = require('../middlewares/gamemode/getGamemodeMW');
const getGamemodesMW = require('../middlewares/gamemode/getGamemodesMW');
const saveGamemodeMW = require('../middlewares/gamemode/saveGamemodeMW');
const delGamemodeMW = require('../middlewares/gamemode/delGamemodeMW');
const renderMW = require('../middlewares/auth_render/renderMW');
const getPofileMW = require('../middlewares/profile/getProfileMW');

const gamemodeModel = require('../models/gamemode');
const partyModel = require('../models/party');
const profileModel = require('../models/profile');

module.exports = function (app) {

        const objectRepository = {
            gamemodeModel: gamemodeModel,
            partyModel: partyModel,
            profileModel: profileModel
        };


        /**
        * Edit a gamemode
        */
        app.use('/gamemodes/edit/:gamemodeid',
            authMW(objectRepository),
            getPofileMW(objectRepository),
            getGamemodeMW(objectRepository),
            saveGamemodeMW(objectRepository),
            renderMW(objectRepository, 'gamemodeedit')
        );

        /**
        * Delete a gamemode
        */
        app.get('/gamemodes/del/:gamemodeid',
            authMW(objectRepository),
            getPofileMW(objectRepository),
            getGamemodeMW(objectRepository),
            delGamemodeMW(objectRepository)
        );

        /**
         * Create a new gamemode
         */
        app.use('/gamemodes/new',
            authMW(objectRepository),
            getPofileMW(objectRepository),
            saveGamemodeMW(objectRepository),
            renderMW(objectRepository, 'gamemodeedit')
        );

        /**
         * List all gamemodes
         */
        app.get('/gamemodes',
            authMW(objectRepository),
            getGamemodesMW(objectRepository),
            renderMW(objectRepository, 'gamemodes')
        );


}