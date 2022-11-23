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
