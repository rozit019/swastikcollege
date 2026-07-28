import Experience from "../models/Experience.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const getAll = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== "All" ? { category } : {};
    const experiences = await Experience.find(filter).sort({ date: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const create = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "swastik-college/experiences",
      transformation: [{ width: 800, height: 600, crop: "fill" }],
    });

    // Delete temp file
    fs.unlinkSync(req.file.path);

    // Save to DB
    const experience = new Experience({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      imageUrl: result.secure_url,
      publicId: result.public_id,
      date: req.body.date ? new Date(req.body.date) : new Date(),
    });

    await experience.save();
    res.status(201).json(experience);
  } catch (err) {
    // Clean up temp file if exists
    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: err.message });
  }
};

export const deleteExp = async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);
    if (!exp) return res.status(404).json({ message: "Not found" });

    // Delete from Cloudinary
    if (exp.publicId) {
      await cloudinary.uploader.destroy(exp.publicId);
    }

    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
