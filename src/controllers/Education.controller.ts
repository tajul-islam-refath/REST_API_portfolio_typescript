import { Request, Response } from "express";
import Education from "../models/Education";

exports.createEducation = async (req: Request, res: Response) => {
  let reqBody = req.body;
  reqBody.email = req.headers.email;
  try {
    let education = new Education(reqBody);
    await education.save();

    res.status(201).json({
      success: "success",
      message: "A new education added successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.updateEducation = async (req: Request, res: Response) => {
  let id = req.params.id;
  let reqBody = req.body;
  try {
    let query = { _id: id };

    await Education.findOneAndUpdate(query, reqBody);

    res.status(201).json({
      success: "success",
      message: "Education updated successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.deleteEducation = async (req: Request, res: Response) => {
  let id = req.params.id;

  try {
    let query = { _id: id };

    await Education.findOneAndDelete(query);
    res.status(201).json({
      success: "success",
      message: "Education deleted successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.getEducations = async (req: Request, res: Response) => {
  let email = req.headers.email;
  try {
    let educations = await Education.aggregate([
      { $match: { email: email } },
      { $sort: { createdAt: -1 } },
    ]);

    res.status(200).json({
      success: "success",
      educations: educations,
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};
