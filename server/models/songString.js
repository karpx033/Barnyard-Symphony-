const { Schema, model } = require('mongoose');

const songStringSchema = new Schema({
  name: {
    type: String,
  },
});

const songString = model('songString', songStringSchema);

module.exports = songString;