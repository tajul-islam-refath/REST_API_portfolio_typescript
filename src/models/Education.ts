import { Schema, model } from "mongoose";

const educationSchema = new Schema(
  {
    email: { type: String },
    degreeName: { type: String },
    Institution: { type: String },
    time: { type: String },
    result: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const Education = model("Education", educationSchema);
module.exports = Education;
