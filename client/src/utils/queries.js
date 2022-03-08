import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      songString {
        _id
        name
      }
    }
  }
`;

export const QUERY_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      name
      songString {
        name
        img
        description
        _id
      }
    }
  }
`;

export const QUERY_SONGSTRINGS = gql`
  query songStrings {
    songStrings{
      name
      _id
      description
      img
      sound
    }
  }
`;