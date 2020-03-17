const db = require('./index.js');
var Carousel = require('./models/Carousel.js');
var mongoose = require('mongoose');
var data = require('./seed_data.js');
const imagesData = require('./seed_data');
// mongoose.connect('mongodb://database/appsdb');

// findAll retrieves all appimages data
function findAll(callback) {
  Carousel.find({}, callback);
}

// findOne will retrieve the appimage associated with the given id
function findOne(id, callback) {
  Carousel.find({ id: id }, callback);
}

// insertOne inserts one appImages schema into db
function insertOne(schema, callback) {
  Carousel.create(schema, callback);
}

// populate db
var seedDb = function (data) {
  Carousel.insertMany(data, (err, docs) => {
    if (err) {
      console.log(`Error populating db ${err}`);
      return;
    }
    console.log('Done populating db!');
  });
};


seedDb(data);


module.exports = seedScript;
