const express = require("express");
const plansRoutes = require("./src/routes/plans");

const app = express();

app.use("/api", plansRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH , DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use((error, _req, res, _next) => {
  res
    .status(error.statusCode)
    .json({ message: error.message || "Internal server error" });
});

app.listen(3005);
