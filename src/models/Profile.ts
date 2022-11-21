import { Schema, model } from "mongoose";

const profileSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    shortTitle: { type: String },
    email: { type: String },
    mobile: { type: String },
    birthday: { type: Date },
    location: { type: String },
    links: [{ type: String }],
    coverImage: { type: String },
    profileImage: { type: String },
    photo: { type: String },
    about: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Profile = model("Profile", profileSchema);

module.exports = Profile;
