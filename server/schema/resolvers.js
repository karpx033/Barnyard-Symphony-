const { songString, Profile } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
  Query: {
    songString: async () => {
      return songString.find({});
    },
    profiles: async () => {
      return Profile.find().populate('songString');
    },
    songStrings: async () => {
      return songString.find({});
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate('songString');
    }
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    addAnimal: async (parent, { songStringId, id}) => {

        return await Profile.findOneAndUpdate(
          { _id: id },
          { $addToSet: { songString:  songStringId  } }
        );
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
  }
}
module.exports = resolvers;
