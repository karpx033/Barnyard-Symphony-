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

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
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