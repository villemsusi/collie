var express = require("express");
var app = express();
var path = require("path");
var routes = require("./routes/routes");
app.use(express.static(path.join(__dirname, '/public/')));
routes(app);
app.listen(3000);
console.log('Node server running on port 3000');