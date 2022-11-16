import { Request, Response, NextFunction } from "express";
const Profile = require("../models/Profile");

exports.createProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqBody = req.body;
    const profile = new Profile(reqBody);

    await profile.save();
    console.log(profile);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err,
    });
  }
};
