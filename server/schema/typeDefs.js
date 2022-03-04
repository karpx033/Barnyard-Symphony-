const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type SongString {
    _id:ID
    name: String!
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    songString: [SongString]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    songString: [SongString] 
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAnimal(songStringId: ID!, id: ID!): Profile
    removeAnimal(ProfileId: ID!, songStringId: ID!): Profile
  }
`;

module.exports = typeDefs;