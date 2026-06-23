import express from "express";
import analyticsRoutes from "./routes/analyticsRoutes.js";

const app = express();

app.use(express.json());

// Connect routes
app.use("/api", analyticsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});