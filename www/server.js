const express = require ('express')
const ejs = require ('ejs')
var bodyParser = require('body-parser'); 

var app = express() 
, server = require('http').createServer(app) 
, io = io.listen(server);
app.set('view engine', 'ejs'); 
app.use('/static', express.static('./static'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false})); 

app.get('/',function (req, res, next) { 
    res.render('index',{}); 
}); 
    


