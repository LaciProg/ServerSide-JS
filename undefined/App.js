const express = require("express")
const app = express()
const path = require("path")

app.set("view engine", "ejs")

require('./Routing/partyRouts')(app)
require('./Routing/gamemodeRouts')(app)
require('./Routing/profileRouts')(app)
require('./Routing/loginRouts')(app)

app.use(express.static("static"))
const pathJoin = (dir)  =>  {return path.join(__dirname, /views/+dir)}

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
