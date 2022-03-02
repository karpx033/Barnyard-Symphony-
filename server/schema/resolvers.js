const { songString } = require('../models');

const resolvers = {
  Query: {
    songString: async () => {
      return songString.find({});
    },
  }
}
module.exports = resolvers;
