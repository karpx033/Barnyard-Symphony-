const { Schema, model } = require('mongoose');

const songStringSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type:String,
  },
  img: {
    type: String,
  },
  sound:{
    type: String,
  }
});

const songString = model('songString', songStringSchema);

module.exports = songString;