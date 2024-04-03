import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ARTISTS = gql`
  query getArtists {
    artists {
      id
      name
      description
      location
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      isActive
      price
      productName
      artistName
      imageUrl
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      _id
      isActive
      price
      productName
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
