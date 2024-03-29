import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_ANIMAL = gql`
  mutation addAnimal ($songStringId: ID!, $id: ID!) {
    addAnimal (songStringId: $songStringId, id: $id) {
      name
      songString{
        _id
    
      }
    }
  }
`;
