const typeDefs = `
  type User {
    _id: ID
    user: String
    email: String
    password: String
    FavArtists: ID!
  }

  type Artist {
    id: ID
    name: String
    description: String
    location: String
    image: [String]
    products: [Product]
  }


  type Product {
    _id: ID
    productName: String
    price: Int
    isActive: Boolean
  }

  type Image {
    
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    artist(artist: String!): Artist
    comment(comment: String): Comment
    // me: User if we need?
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
