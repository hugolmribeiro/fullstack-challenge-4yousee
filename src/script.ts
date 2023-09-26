import express from "express";
import plansRoutes from "./http/routes/plans";

const app = express();

app.use((req: any, res: any, next: any) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api", plansRoutes);

app.use((error: any, _req: any, res: any, _next: any) => {
  res
    .status(error.statusCode)
    .json({ message: error.message || "Internal server error" });
});

app.listen(3005);
