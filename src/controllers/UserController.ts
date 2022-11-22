import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  try {
    let user = await User.aggregate([
      { $match: { email: email, password: password } },
      { $project: { password: 0 } },
    ]);

    if (user.length == 0) {
      return res.status(401).json({ success: "fail", status: "Unauthorized" });
    }

    let playload = {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60,
      data: user[0]["email"],
    };

    let token = jwt.sign(playload, "swttoken123456");
    res.status(200).json({
      success: "success",
      data: user[0],
      token,
    });
  } catch (err: any) {
    res.status(400).json({ success: "fail", message: err.message });
  }
};

exports.me = async (req: Request, res: Response) => {
  console.log("req");
  try {
    let user = await User.aggregate([
      { $match: { email: req.headers.email } },
      { $project: { password: 0 } },
    ]);

    if (user.length == 0) {
      return res.status(401).json({ success: "fail", status: "Unauthorized" });
    }

    res.status(200).json({
      success: "success",
      data: user[0],
    });
  } catch (err: any) {
    res.status(400).json({ success: "fail", message: err.message });
  }
};

exports.update = async (req: Request, res: Response) => {
  let reqBody = req.body;
  let query = { email: req.headers.email };
  try {
    await User.findOneAndUpdate(query, reqBody);

    res.status(200).json({
      success: "success",
      message: "Profile updated successfully",
    });
  } catch (err: any) {
    res.status(400).json({ success: "fail", message: err.message });
  }
};
