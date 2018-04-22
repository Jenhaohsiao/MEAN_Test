var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./Back-end/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/Front-end'));
app.use('/api',appRoutes);

mongoose.connect('mongodb://localhost:27017/tpr', function(err){
    if(err) {
        console.log('Not connected to the MongoDB, Err:' + err);
    }else {
        console.log('Successfully connected to MongoDB')
    }
})

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/Front-end/app/views/index.html'));
});

app.listen(port, function () {
    console.log("The server is running on port:" + port);
});