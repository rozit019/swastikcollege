import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import {
  getAll,
  create,
  deleteExp,
} from "../controllers/experienceController.js";
import adminAuth from "../middlewares/auth.js";
import fs from "fs";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Save files temporarily to 'uploads/' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only images allowed"), false);
  },
});

const router = express.Router();

router.get("/", getAll);
router.post("/upload", adminAuth, upload.single("image"), create);
router.delete("/:id", adminAuth, deleteExp);

export default router;
