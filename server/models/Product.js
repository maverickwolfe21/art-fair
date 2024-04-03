const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const productSchema = new Schema({
  productName: {
    type: String,
    required: "Products must have a name.",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  artistName: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
