const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String!
    password: String!
    favoriteArtists: [Artist]
  }

  type Artist {
    _id: ID
    name: String!
    description: String
    location: String
    imageUrl: String
    products: [Product]
  }


  type Product {
    _id: ID
    productName: String
    price: Int
    isActive: Boolean
    artistName: String
    imageUrl: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User!]
    user(username: String!): User
    artist(id: ID!): Artist
    artists: [Artist]
    product(id: ID!): Product
    products: [Product]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addArtist(name: String!, description: String!, location: String!, image: [String]!, products: [ID]!): Artist
    removeArtist(id: ID!): Artist
    addFavorite(artistId: ID!): User 
    addProduct(artistId: ID!, productName: String!, price: Int!, isActive: Boolean!): Product
    removeProduct(productId: ID!): Product
  }
`;

module.exports = typeDefs;
