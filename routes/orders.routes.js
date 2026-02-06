const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

// In-memory
let orders = [];
let orderId = 1;

/**
 * POST /api/orders/checkout
 * payload:
 * {
 *   items: [{ productId, qty }],
 *   address: { name, email, phone, city, street },
 *   paymentMethod: "COD"
 * }
 */
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
        imageUrl: p.imageUrl,
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

  // ✅ user info for admin UI
  const address = req.body.address || {};
  const userName = address.name || "Unknown";
  const userEmail = address.email || "";
  const userPhone = address.phone || "-";

  const order = {
    id: orderId++,
    createdAt: new Date().toISOString(),
    status: "pending",

    // ✅ customer info
    userName,
    userEmail,
    userPhone,

    address,
    paymentMethod: req.body.paymentMethod || "COD",
    subtotalCents,
    totalCents: subtotalCents,
    lines,
  };

  orders.push(order);

  res.json({ success: true, message: "Order placed", data: order });
});

// GET /api/orders  (optional: for testing)
router.get("/", (req, res) => res.json({ success: true, data: orders }));

/* =========================
   ✅ ADMIN ENDPOINTS
   ========================= */

// GET /api/orders/admin/list  (we will mount as /api/admin/orders from server.js)
router.get("/admin/list", (req, res) => {
  // return newest first
  const sorted = [...orders].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  res.json({ success: true, data: sorted });
});

// POST /api/orders/admin/:id/status  { status }
router.post("/admin/:id/status", (req, res) => {
  const id = Number(req.params.id);
  const status = (req.body.status || "").toString().toLowerCase();

  const allowed = ["pending", "confirm", "cancel", "cancelled", "shipped"];
  if (!allowed.includes(status)) {
    return res.status(400).json({ success: false, message: "Invalid status" });
  }

  const order = orders.find((o) => o.id === id);
  if (!order) return res.status(404).json({ success: false, message: "Order not found" });

  // normalize cancel/cancelled
  order.status = status === "cancelled" ? "cancel" : status;

  res.json({ success: true, message: "Status updated", data: order });
});

// POST /api/orders/admin/:id/delete
router.post("/admin/:id/delete", (req, res) => {
  const id = Number(req.params.id);
  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return res.status(404).json({ success: false, message: "Order not found" });

  orders.splice(idx, 1);
  res.json({ success: true, message: "Order deleted" });
});

module.exports = router;