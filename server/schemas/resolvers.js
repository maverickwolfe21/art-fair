const { Artist, User, Product } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("user");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("profile");
    },

    product: async (parent, { id }) => {
      return Product.findById(id);
    },

    products: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Product.find(params).sort({ createdAt: -1 });
    },

    artist: async (parent, { id }) => {
      return Artist.findById(id);
    },

    artists: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Artist.find(params).sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addFavorite: async (parent, { artistId }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to add favorites')
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          { $addToSet: { favoriteArtists: artistId } },
          { new: true }
        );

        return updatedUser;
      } catch (error) {
        throw new Error('Failed to add favorite artist: ' + error.message);
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      } //this looks good! ??

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
