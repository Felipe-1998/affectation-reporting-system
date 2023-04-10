const express = require("express");
const bodyParser = require("body-parser");
const cookieParser=require("cookie-parser");
const morgan = require("morgan");
const router = require("./routes/index");

const app = express();
app.name="API";
app.use(bodyParser.urlencoded({extended:false,limit:"50mb"}));
app.use(bodyParser.json({limit:"50mb"}));
app.use(cookieParser());

app.use((req, res, next) => {
    //"http://localhost:3000"
    res.header('Access-Control-Allow-Origin',"*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  

//settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(morgan('dev'));
//routes
app.use(router);

module.exports = app;