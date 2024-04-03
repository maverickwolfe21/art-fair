const db = require("../config/connection");
const { User, Artist, Product } = require("../models");
const userSeeds = require("./userSeeds.json");
const productSeeds = require("./productSeed.json");
const artistSeeds = require("./artistseed.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Product", "products");

    for (let i = 0; i < productSeeds.length; i++) {
      const { _id } = await Product.create(productSeeds[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
