var authMW = require('../middlewares/auth_render/authMW');
var getGamemodeMW = require('../middlewares/gamemode/getGamemodeMW');
var getGamemodesMW = require('../middlewares/gamemode/getGamemodesMW');
var saveGamemodeMW = require('../middlewares/gamemode/saveGamemodeMW');
var delGamemodeMW = require('../middlewares/gamemode/delGamemodeMW');
var renderMW = require('../middlewares/auth_render/renderMW');

//var gamemodeModel = require('../models/gamemode');

module.exports = function (app) {

        var objectRepository = {
//            gamemodeModel: gamemodeModel
        };

        /**
        * List all gamemodes
        */
        app.get('/gamemodes',
            authMW(objectRepository),
            getGamemodesMW(objectRepository),
            renderMW(objectRepository, 'gamemodes')
        );

        /**
        * Create a new gamemode
        */
        app.use('/gamemodes/new',
            authMW(objectRepository),
            saveGamemodeMW(objectRepository),
            renderMW(objectRepository, 'gamemodeedit')
        );

        /**
        * Edit a gamemode
        */
        app.use('/gamemodes/edit/:gamemodeid',
            authMW(objectRepository),
            getGamemodeMW(objectRepository),
            saveGamemodeMW(objectRepository),
            renderMW(objectRepository, 'gamemodeedit')
        );

        /**
        * Delete a gamemode
        */
        app.get('/gamemodes/del/:gamemodeid',
            authMW(objectRepository),
            getGamemodeMW(objectRepository),
            delGamemodeMW(objectRepository)
        );

}