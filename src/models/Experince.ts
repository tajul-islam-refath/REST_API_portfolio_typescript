import { Schema, model } from "mongoose";

const experinceSchema = new Schema(
  {
    email: { type: String },
    type: { type: String },
    title: { type: String },
    company: { type: String },
    time: { type: String },
    location: { type: String },
  },
  { timestamps: true }
);

const Experince = model("Experince", experinceSchema);
export = Experince;
