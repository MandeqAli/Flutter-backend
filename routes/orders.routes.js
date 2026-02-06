const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

let orders = [];
let orderId = 1;

// ✅ CREATE ORDER
router.post("/checkout", (req, res) => {
  const items = Array.isArray(req.body.items) ? req.body.items : [];
  if (!items.length) {
    return res.status(400).json({ success: false, message: "No items to checkout" });
  }

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

  if (!lines.length) {
    return res.status(400).json({ success: false, message: "Invalid items" });
  }

  const subtotalCents = lines.reduce((s, l) => s + l.lineTotalCents, 0);

  // ✅ ADD user fields + status (minimal)
  const address = req.body.address || {};
  const order = {
    id: orderId++,
    createdAt: new Date().toISOString(),

    userName: address.name || req.body.userName || "Customer",
    userEmail: req.body.userEmail || "",
    userPhone: req.body.userPhone || "-",

    status: "pending",

    address: address || null,
    paymentMethod: req.body.paymentMethod || "COD",
    subtotalCents,
    totalCents: subtotalCents,
    lines,
  };

  orders.push(order);

  res.json({ success: true, message: "Order placed", data: order });
});

// ✅ LIST ORDERS (Customers page reads this)
router.get("/", (req, res) => res.json({ success: true, data: orders }));

// ✅ UPDATE STATUS (optional but useful for your Confirm/Pending buttons)
router.post("/:id/status", (req, res) => {
  const id = Number(req.params.id);
  const status = (req.body.status || "").toString();

  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return res.status(404).json({ success: false, message: "Order not found" });

  orders[idx].status = status || orders[idx].status;

  res.json({ success: true, message: "Status updated", data: orders[idx] });
});

// ✅ DELETE ORDER (optional but useful for cancel)
router.post("/:id/delete", (req, res) => {
  console.log("✅ DELETE HIT:", req.params.id);

  const id = Number(req.params.id);
  const before = orders.length;

  orders = orders.filter((o) => o.id !== id);

  if (orders.length === before) {
    return res.status(404).json({ success: false, message: "Order not found" });
  }

  return res.json({ success: true, message: "Order deleted" });
});


module.exports = router;