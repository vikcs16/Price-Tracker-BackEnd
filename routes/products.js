const express = require("express");
const router = express.Router();

const {
  getallproducts,
  createproduct,
  getproduct,
  //changeproduct,
  deleteproduct,
} = require("../controllers/products");

router.route("/").get(getallproducts).post(createproduct);

router.route("/:id").get(getproduct).delete(deleteproduct); //.patch(changeproduct);

module.exports = router;
