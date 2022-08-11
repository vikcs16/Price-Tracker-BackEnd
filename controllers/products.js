const Product = require("../models/product");
const scrapprice = require("../scrapper/scrapper");
const axios = require("axios").default;

const getallproducts = async (req, res) => {
  try {
    console.log('Get API called')
    const products = await Product.find({});
    //scrap(res);
    res.status(200).json({ products });
  } catch (error) {
    res.json(error);
  }
};

const createproduct = async (req, res) => {
  try {
    console.log("POST API called");
    const response = await axios.get(req.body.product_url);
    const price = parseFloat(scrapprice(response).replace(/,/g, ""));
    if (price == "") {
      res.status(500).json({ message: "Please check the URL and try again" });
    } else {
      req.body["price"] = price;
      await Product.create(req.body);
      res.status(201).json({ message: req.body });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

const getproduct = async (req, res) => {
  try {
    console.log('GET Product API called')
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json({ product });
  } catch (error) {
    res.json({ message: error });
  }
};

const deleteproduct = async (req, res) => {
  try {
    console.log("DELETE Product API called");
    await Product.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getallproducts,
  createproduct,
  getproduct,
  //changeproduct,
  deleteproduct,
};
