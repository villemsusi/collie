const path = require('path');



const routes = app => {

    app.get("/shop", function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/shop.html'))
    })

    app.get("/about", function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/about.html'))
    })
    
    app.get("/checkout", function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/payment.html'))
    })

}

module.exports = routes