import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["Sports", "Tech & Hackathons", "Culture & Fests", "Academic"],
      required: true,
    },
    imageUrl: { type: String, required: true },
    publicId: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

const Experience = mongoose.model("Experience", experienceSchema);
export default Experience;
