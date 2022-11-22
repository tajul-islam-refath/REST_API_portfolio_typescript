import { Request, Response } from "express";
import Experince from "../models/Experince";

exports.createExperince = async (req: Request, res: Response) => {
  let reqBody = req.body;
  reqBody.email = req.headers.email;
  try {
    let experince = new Experince(reqBody);
    await experince.save();

    res.status(201).json({
      success: "success",
      message: "A new experiance added successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.updateExperince = async (req: Request, res: Response) => {
  let id = req.params.id;
  let reqBody = req.body;
  try {
    let query = { _id: id };

    await Experince.findOneAndUpdate(query, reqBody);

    res.status(201).json({
      success: "success",
      message: "Experince updated successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.deleteExperince = async (req: Request, res: Response) => {
  let id = req.params.id;

  try {
    let query = { _id: id };

    await Experince.findOneAndDelete(query);
    res.status(201).json({
      success: "success",
      message: "Experince deleted successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.getExperinces = async (req: Request, res: Response) => {
  let email = req.headers.email;
  try {
    let experinces = await Experince.aggregate([
      {
        $facet: {
          job: [{ $match: { email: email, type: "Job Experience" } }],
        },
      },
    ]);

    res.status(200).json({
      success: "success",
      experinces: experinces[0],
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};
