const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Profile = db.model('Profile', {
    Name: String,
    Email: String,
    Password: String,
    Admin: Number,

    Solo_duo: String,
    Flex: String,
    Role1: String,
    Role2: String,
    Highest_rank: String,
    Favourite_champion: String,
    Contact: String,
    About_me: String,

});

module.exports = Profile;