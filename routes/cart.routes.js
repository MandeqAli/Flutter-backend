const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

// in-memory cart
let cart = []; // [{ productId, qty }]

const buildCartResponse = () => {
  const items = cart
    .map((ci) => {
      const p = products.find((x) => x.id === ci.productId);
      if (!p) return null;
      return {
        productId: p.id,
        title: p.title,
        imageUrl: p.imageUrl,
        priceCents: p.priceCents,
        qty: ci.qty,
        lineTotalCents: p.priceCents * ci.qty,
      };
    })
    .filter(Boolean);

  const subtotalCents = items.reduce((sum, x) => sum + x.lineTotalCents, 0);
  return { items, subtotalCents };
};

router.get("/", (req, res) => {
  res.json({ success: true, data: buildCartResponse() });
});

router.post("/add", (req, res) => {
  const productId = Number(req.body.productId);
  const qty = Math.max(1, Number(req.body.qty || 1));

  const p = products.find((x) => x.id === productId);
  if (!p) return res.status(404).json({ success: false, message: "Product not found" });

  const existing = cart.find((x) => x.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push({ productId, qty });

  res.json({ success: true, message: "Added to cart", data: buildCartResponse() });
});

router.post("/update", (req, res) => {
  const productId = Number(req.body.productId);
  const qty = Number(req.body.qty);

  const idx = cart.findIndex((x) => x.productId === productId);
  if (idx === -1) return res.status(404).json({ success: false, message: "Item not in cart" });

  if (qty <= 0) cart.splice(idx, 1);
  else cart[idx].qty = qty;

  res.json({ success: true, message: "Cart updated", data: buildCartResponse() });
});

router.post("/clear", (req, res) => {
  cart = [];
  res.json({ success: true, message: "Cart cleared", data: buildCartResponse() });
});

module.exports = router;
