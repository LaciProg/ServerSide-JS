const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("static"))
const pathJoin = (dir)  =>  {return path.join(__dirname, /static/+dir)}

app.listen(3000)
app.get('/', (req, res, next) =>{
    res.sendFile(pathJoin("login.html"))
})

app.get("/gamemodes", (req, res, next) =>{
    res.sendFile(pathJoin("gamemodes.html"))
})

app.post('/', (req, res, next) => {
    res.redirect("/gamemodes")
})

app.get("/gamemodes/party", (req, res, next) =>{
    res.sendFile(pathJoin("party.html"))
})

app.get("/profile", (req, res, next) =>{
    res.sendFile(pathJoin("profile.html"))
})