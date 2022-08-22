import express from "express";
import cors from "cors";
import Connention from "./config/db.js";
import router from "./routes/fileRoutes.js";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
Connention();
app.use("/", router);
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Listing At Port");
});
