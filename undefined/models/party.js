const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Party = db.model('Party', {
    Name: String,
    Solo_duo: String,
    Flex: String,
    Role1: String,
    Role2: String,
    _Profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    _Gamemode: {
        type: Schema.Types.ObjectId,
        ref: 'Gamemode'
    }
});

module.exports = Party;