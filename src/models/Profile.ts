import { Schema, model, Model } from "mongoose";

const profileSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: { type: String },
    email: { type: String },
    mobile: { type: String },
    city: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
  },
  { versionKey: false }
);

const Profile = model("Profile", profileSchema);

module.exports = Profile;
