import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema(
  {
    email: { type: String, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
