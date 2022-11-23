import { Request, Response } from "express";
const User = require("../models/User");

interface MulterRequest extends Request {
  file: any;
}

exports.coverUpload = async (req: MulterRequest, res: Response) => {
  try {
    let query = { email: req.headers.email };
    let updateBody = { coverImage: req.file.filename };
    await User.findOneAndUpdate(query, updateBody, {
      new: true,
    });

    res.status(200).json({
      success: "success",
      message: "Cover image upload success",
    });
  } catch (err: any) {
    res.status(400).json({ success: "fail", message: err.message });
  }
};

exports.profileImage = async (req: MulterRequest, res: Response) => {
  try {
    let query = { email: req.headers.email };
    let updateBody = { profileImage: req.file.filename };
    await User.findOneAndUpdate(query, updateBody, {
      new: true,
    });

    res.status(200).json({
      success: "success",
      message: "profile image upload success",
    });
  } catch (err: any) {
    res.status(400).json({ success: "fail", message: err.message });
  }
};

exports.profilePhoto = async (req: MulterRequest, res: Response) => {
  try {
    let query = { email: req.headers.email };
    let updateBody = { profilePhoto: req.file.filename };
    await User.findOneAndUpdate(query, updateBody, {
      new: true,
    });

    res.status(200).json({
      success: "success",
      message: "profile image upload success",
    });
  } catch (err: any) {
    res.status(400).json({ success: "fail", message: err.message });
  }
};

exports.cv = async (req: MulterRequest, res: Response) => {
  try {
    let query = { email: req.headers.email };
    let updateBody = { cv: req.file.filename };
    await User.findOneAndUpdate(query, updateBody, {
      new: true,
    });

    res.status(200).json({
      success: "success",
      message: "cv upload success",
    });
  } catch (err: any) {
    res.status(400).json({ success: "fail", message: err.message });
  }
};
