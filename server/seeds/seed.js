const db = require('../config/connection');
const { songString } = require('../models');

const songData = require('./songData.json');

db.once('open', async () => {
  await songString.deleteMany({});

  const technologies = await songString.insertMany(songData);

  console.log('Technologies seeded!');
  process.exit(0);
});
