const express = require("express");
const router = express.Router();
const { index, listOfProducts, newProduct } = require("../controllers/index");

router.get("/", index);

router.get("/products", listOfProducts);

router.post("/new-product", newProduct);

module.exports = router;
