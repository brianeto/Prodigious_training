const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// set up express app
const app = express();

// connect to Mongodb
mongoose.connect('mongodb://localhost/mvpseodatabase');
mongoose.Promise = global.Promise;




app.use(express.static("public"));

app.use(bodyParser.json());

// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
	//console.log(err);
	res.status(422).send({error:err.message});
})



// listen for request

app.listen(process.env.port || 4000, function(){
	console.log('now listening for request');
});


/*
	model: represent the collection of the database
	schema: define the structure of our data objects
*/
