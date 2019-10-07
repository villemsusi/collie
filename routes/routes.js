const path = require('path');



const routes = app => {

    app.get("/shop", function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/shop.html'))
    })

    app.get("/about", function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/about.html'))
    })

    app.get("/gallery", function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/gallery.html'))
    })
    
    app.post("/api/buffer", function (req, res) {
        var data = req.body;
        console.log(data);
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(data));
        res.end()
    })

    app.get("/checkout", function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/payment.html'))
    })

}

module.exports = routes