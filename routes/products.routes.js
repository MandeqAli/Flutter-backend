const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

router.get("/", (req, res) => {
  res.json({ success: true, data: products });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = products.find((p) => p.id === id);
  if (!item) return res.status(404).json({ success: false, message: "Product not found" });
  res.json({ success: true, data: item });
});

module.exports = router;
