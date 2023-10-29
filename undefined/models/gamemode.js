const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Gamemode = db.model('Gamemode', {
    gm: String,
    active: Number,
});

module.exports = Gamemode;