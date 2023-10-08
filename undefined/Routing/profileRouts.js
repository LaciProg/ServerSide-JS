var authMW = require('../middlewares/auth_render/authMW');
var renderMW = require('../middlewares/auth_render/renderMW');
var getProfileMW = require('../middlewares/profile/getProfileMW');
var saveProfileMW = require('../middlewares/profile/saveProfileMW');

//var userModel = require('../models/user');

module.exports = function (app) {

        var objectRepository = {
//            userModel: userModel
        };

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

        /**
         * Edit a profile
         */
        app.use('/profile/edit/:profileid',
            authMW(objectRepository),
            getProfileMW(objectRepository),
            saveProfileMW(objectRepository),
            renderMW(objectRepository, 'profile')
        );
}