let path = require('path');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let mainRouter = require("./mainRoutes.js");
let todoRouter = require("./todoRoutes.js");

app.use('cdn',express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", mainRouter);
app.use("/todo", todoRouter);

app.listen(process.env.PORT||3000);
console.log("Express server running on port 3000");