const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type songString {
    name: String!
  }

  type Query {
    songString: [songString] 
  }
`;

module.exports = typeDefs;