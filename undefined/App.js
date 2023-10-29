/*
let profile = new ProfileModell();
profile.Name = "Test";
profile.Email = "Test";
profile.Password = "Test";
profile.Admin = 1;
profile.Solo_duo = "Solo";
profile.Flex = "Flex";
profile.Role1 = "Top";
profile.Role2 = "Mid";
profile.Highest_rank = "Gold";
profile.Favourite_champion = "Kai'sa";
profile.Contact = "Test";
profile.About_me = "Test";
profile.save().then(() => {console.log("profile saved");
    let party = new PartyModell();
    party.Name = "Test";
    party.Solo_duo = "Solo";
    party.Flex = "Flex";
    party.Role1 = "Top";
    party.Role2 = "Mid";
    party._Profile = profile._id;
    party.save().then(() => console.log("party saved"));
});*/


express = require("express")
bodyParser = require('body-parser')
const app = express()
const path = require("path")

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use('/assets',express.static("static"))

require('./Routing/partyRouts')(app)
require('./Routing/gamemodeRouts')(app)
require('./Routing/profileRouts')(app)
require('./Routing/loginRouts')(app)

const pathJoin = (dir)  =>  {return path.join(__dirname, /views/+dir)}
app.use((err, req, res, next) =>{
    res.status(500).send("Error")
    console.log(err)
});
app.listen(3000)


/*
app.get("/gamemodes/party", (req, res, next) =>{
    res.sendFile(pathJoin("party.ejs"))
})
app.get("/gamemodes", (req, res, next) =>{
    res.sendFile(pathJoin("gamemodes.ejs"))
})

app.get("/profile", (req, res, next) =>{
    res.sendFile(pathJoin("profile.ejs"))
})
app.post('/', (req, res, next) => {
    res.redirect("/gamemodes")
})
app.get('/', (req, res, next) =>{
    res.sendFile(pathJoin("login.ejs"))
})*/
