const db = require('../config/connection');
const { songString, Profile } = require('../models');

const songData = require('./songData.json');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  await songString.deleteMany({});
  await Profile.deleteMany({});

  const technologies = await songString.insertMany(songData);
  const profiles = await Profile.insertMany(profileSeeds);

  console.log('Technologies seeded!');
  process.exit(0);
});
