import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema(
  {
    name: { type: String },
    designation: { type: String },
    mobile: { type: String },
    birthday: { type: Date },
    location: { type: String },
    links: [{ type: String }],
    coverImage: { type: String },
    profileImage: { type: String },
    photo: { type: String },
    about: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
