import { Schema, model } from "mongoose";

const conatactSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    subject: { type: String },
    body: { type: String },
  },
  { timestamps: true }
);

const Contact = model("Conatact", conatactSchema);
export = Contact;
