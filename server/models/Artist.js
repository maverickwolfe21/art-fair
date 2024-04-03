const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const artistSchema = new Schema({
  name: {
    type: String,
    required: "Artists must have a name.",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;
