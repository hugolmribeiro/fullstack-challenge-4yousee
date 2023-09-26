import express from "express";
import plansRoutes from "./routes/plans";

const app = express();

app.use("/api", plansRoutes);

app.use((req: any, res: any, next: any) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH , DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use((error: any, _req: any, res: any, _next: any) => {
  res
    .status(error.statusCode)
    .json({ message: error.message || "Internal server error" });
});

app.listen(3005);
