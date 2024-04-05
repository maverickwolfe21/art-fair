const db = require("../config/connection");
const { User, Artist, Product } = require("../models");
const userSeeds = require("./userSeeds.json");
const productSeeds = require("./productSeeds.json");
const artistSeeds = require("./artistSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("User", "users");
    await cleanDB("Product", "products");
    await cleanDB("Artist", "artists")

    await User.create(userSeeds);
    await Artist.create(artistSeeds);

    for (let i = 0; i < productSeeds.length; i++) {
      const { _id, artistName } = await Product.create(productSeeds[i]);
      const user = await Artist.findOneAndUpdate(
        { name: artistName },
        {
          $addToSet: {
            products: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
