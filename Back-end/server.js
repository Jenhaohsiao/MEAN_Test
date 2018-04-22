var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./app/models/user'); // For user.js
var Rug = require('./app/models/rug'); // For rug.js
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/tpr', function(err){
    if(err) {
        console.log('Not connected to the MongoDB, Err:' + err);
    }else {
        console.log('Successfully connected to MongoDB')
    }
})

// http://localhost:8000/users
app.post('/users', function(req,res){
    
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    if (req.body.username == null || req.body.username == '' || 
        req.body.password == null || req.body.password == '' || 
        req.body.email == null || req.body.email == '' ){
        res.send('Ensure username, email, and password were provided');

    } else {
        user.save(function(err){
            if(err){
                res.send("User name or Email already exists!");
            }else{
                res.send('New User created!');
            }
        });
    }

});

http://localhost:8000/rugs
app.post('/rugs', function(req,res){
    
    var rug = new Rug();
    rug.serialNumber = req.body.serialNumber;
    rug.name = req.body.name;
    rug.price = req.body.price;
    rug.description = req.body.description;
    rug.actualSize = req.body.actualSize;
    rug.productType = req.body.productType;
    rug.type = req.body.type;
    rug.construction = req.body.construction;
    rug.style = req.body.style;
    rug.countryOfOrigin = req.body.countryOfOrigin;
    rug.age = req.body.age;
    rug.period = req.body.period;
    rug.antique = req.body.antique;
    rug.pileMaterial = req.body.pileMaterial;
    rug.production = req.body.production;
    rug.design = req.body.design;
    rug.pattern = req.body.pattern;
    rug.colourTags = req.body.colourTags;
    rug.save(function(err){
        if(err){
            // res.send("This Serial Number already exists!");
            res.send(err.errmsg);
        }else{
            res.send('New User created!');
        }
    });
});

app.listen(port, function () {
    console.log("The server is running on port:" + port);
});