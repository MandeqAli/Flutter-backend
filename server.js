// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => res.send("Pharmacy backend is running ✅"));

// app.use("/api/products", require("./routes/products.routes"));
// app.use("/api/api/products", require("./routes/products.routes"));
// app.use("/api/cart", require("./routes/cart.routes"));
// app.use("/api/orders", require("./routes/orders.routes"));

// const PORT = process.env.PORT || 5000;

// // ✅ Listen on 0.0.0.0 so emulator/phone can reach it
// const server = app.listen(PORT, "0.0.0.0", () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });

// // ✅ avoid crash spam if port is used
// server.on("error", (err) => {
//   if (err.code === "EADDRINUSE") {
//     console.log(`❌ Port ${PORT} already in use. Close the other server or change PORT`);
//     process.exit(1);
//   }
//   throw err;
// });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Pharmacy backend is running ✅"));

app.use("/api/products", require("./routes/products.routes"));
app.use("/api/api/products", require("./routes/products.routes"));
app.use("/api/cart", require("./routes/cart.routes"));
app.use("/api/orders", require("./routes/orders.routes"));

// ✅ Admin routes mapping (for Flutter Customers page)
const ordersRoutes = require("./routes/orders.routes");
app.use("/api/admin/orders", (req, res, next) => {
  // We reuse orders.routes admin endpoints under /api/admin/orders/*
  // Map:
  // GET    /api/admin/orders        -> /api/orders/admin/list
  // POST   /api/admin/orders/:id/status -> /api/orders/admin/:id/status
  // POST   /api/admin/orders/:id/delete -> /api/orders/admin/:id/delete
  next();
});

// ✅ direct mapping endpoints
app.get("/api/admin/orders", (req, res) => ordersRoutes.handle(req, res));
app.post("/api/admin/orders/:id/status", (req, res) => ordersRoutes.handle(req, res));
app.post("/api/admin/orders/:id/delete", (req, res) => ordersRoutes.handle(req, res));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`❌ Port ${PORT} already in use. Close the other server or change PORT`);
    process.exit(1);
  }
  throw err;
});