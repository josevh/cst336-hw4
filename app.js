const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

// express setup
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(expressLayouts)

// routes
app.get("/", function (req, res) {
    res.render("index")
})
app.get("/application", function (req, res) {
    res.render("application")
})
app.get("/network", function (req, res) {
    res.render("network")
})
app.get("/transport", function (req, res) {
    res.render("transport")
})


// starting server
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Express server is running at " + process.env.IP + ":" + process.env.PORT)
})