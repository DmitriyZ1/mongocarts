const express = require("express");

const routerPages = require('./routers_pages.js')
const routerType = require('./routers_type.js')

const Mongoose = require('mongoose');

const Test = require("./models/test.js")

const app = express();

const PORT = 3000;
const URL = "mongodb://localhost:27017/punkt";


app.use("/", express.static(__dirname + '/client/pages/index'));
app.use("/edit", express.static(__dirname + '/client/pages/edit'));
app.use("/new", express.static(__dirname + '/client/pages/newdoc'));
app.use("/del", express.static(__dirname + '/client/pages/del'));
app.use(express.json());


Mongoose
    .connect(URL)
    .then(() => console.log(`ok db`))
    .catch((err) => console.log(`error db : ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log('port : ' + PORT);
}) 

app.use('/', routerPages);
app.use('/', routerType);



