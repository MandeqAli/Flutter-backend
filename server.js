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

const PORT = process.env.PORT || 5000;

// ✅ Listen on 0.0.0.0 so emulator/phone can reach it
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

// ✅ avoid crash spam if port is used
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`❌ Port ${PORT} already in use. Close the other server or change PORT`);
    process.exit(1);
  }
  throw err;
});

