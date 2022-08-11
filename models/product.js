const mongoose = require("mongoose");

const Productschema = new mongoose.Schema({
  product_name: { type: String },
  product_url: { type: String, required: [true, `Must provide a url`] },
  price: { type: Number },
});

module.exports = mongoose.model("Product", Productschema);
