import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import "./cron/syncJob.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

connectDB(); // ✅ THIS LINE IS REQUIRED

app.use("/api/leads", leadRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
