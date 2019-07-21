const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const session = require('express-session');
// const flash = require("express-flash");
const app = express();
// app.locals.moment = require("moment");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));
// app.set('trust proxy', 1)
// app.use(session({
//     secret: "myawesomesecret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 },
// }));
// app.use(flash());
// app.set('views', path.join(__dirname, './public/dist/public'));
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./public/dist/public")));

require('./server/config/mongoose');
require('./server/config/routes')(app)

app.listen(8000, function () {
    console.log("listening on port 8000");
});