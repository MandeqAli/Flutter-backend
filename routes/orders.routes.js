const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

let orders = [];
let orderId = 1;

router.post("/checkout", (req, res) => {
  const items = Array.isArray(req.body.items) ? req.body.items : [];
  if (!items.length) return res.status(400).json({ success: false, message: "No items to checkout" });

  const lines = items
    .map((x) => {
      const p = products.find((z) => z.id === Number(x.productId));
      if (!p) return null;
      const qty = Math.max(1, Number(x.qty || 1));
      return {
        productId: p.id,
        title: p.title,
        priceCents: p.priceCents,
        qty,
        lineTotalCents: p.priceCents * qty,
      };
    })
    .filter(Boolean);

  if (!lines.length) return res.status(400).json({ success: false, message: "Invalid items" });

  const subtotalCents = lines.reduce((s, l) => s + l.lineTotalCents, 0);

  const order = {
    id: orderId++,
    createdAt: new Date().toISOString(),
    address: req.body.address || null,
    paymentMethod: req.body.paymentMethod || "COD",
    subtotalCents,
    totalCents: subtotalCents,
    lines,
  };

  orders.push(order);

  res.json({ success: true, message: "Order placed", data: order });
});

router.get("/", (req, res) => res.json({ success: true, data: orders }));

module.exports = router;
