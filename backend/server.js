import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
import leadRoutes from "./routes/leadRoutes.js";
app.use("/api/leads", leadRoutes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Leads")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});

