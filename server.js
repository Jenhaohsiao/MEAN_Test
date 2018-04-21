var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/tpr', function(err){
    if(err) {
        console.log('Not connected to the MongoDB, Err:' + err);
    }else {
        console.log('Successfully connected to MongoDB')
    }
})


app.listen(port, function () {
    console.log("The server is running on port:" + port);
});