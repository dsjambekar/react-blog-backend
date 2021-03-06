// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const post = require('./routes/post.route'); // Imports routes for the products
// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://dsjambekar:react2react@ds347707.mlab.com:47707/myblogdb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/posts', post);

var port = process.env.PORT || 1234;
//let port = 1234;

app.listen(port, () => {
	console.log('Our app is running on http://localhost:' + port);
	//console.log('Server is up and running on port numner ' + port);
});