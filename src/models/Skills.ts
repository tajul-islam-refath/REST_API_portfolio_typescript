import { Schema, model } from "mongoose";

const skillsSchema = new Schema(
  {
    email: { type: String },
    type: { type: String },
    name: { type: String },
    rating: { type: Number },
  },
  { timestamps: true }
);

const Skills = model("Skills", skillsSchema);
module.exports = Skills;
