const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const faker = require('faker')

const IP = process.env.IP || '0.0.0.0'
const PORT = process.env.PORT || 5000

// express setup
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(expressLayouts)

// routes
app.get("/", function (req, res) {
    res.render("index", {fakeContent: faker.lorem.paragraph()})
})
app.get("/application", function (req, res) {
    res.render("application", {
        host: faker.internet.domainName(),
        userAgent: faker.internet.userAgent(),
    })
})
app.get("/network", function (req, res) {
    res.render("network", {
        fakeIP1: faker.internet.ip(),
        fakeIP2: faker.internet.ip(),
        fakeIP3: faker.internet.ip(),
        fakeIPv6: faker.internet.ipv6()
    })
})
app.get("/transport", function (req, res) {
    res.render("transport")
})


// starting server
app.listen(PORT, IP, function () {
    console.log("Express server is running at " + IP + ":" + PORT)
})