import express from "express";
import {
  getAllFiles,
  getFile,
  saveFile,
} from "../controller/fileController.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Server is Running");
});

router.get("/api/getAllFiles", getAllFiles);

router.post("/api/saveFile", saveFile);

router.get("/api/getFile", getFile);

export default router;
// export the path and the router
