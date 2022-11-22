import { Request, Response } from "express";
import Skills from "../models/Skills";

exports.createSkill = async (req: Request, res: Response) => {
  let reqBody = req.body;
  reqBody.email = req.headers.email;
  try {
    let skills = new Skills(reqBody);
    await skills.save();

    res.status(201).json({
      success: "success",
      message: "A new skill added successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.updateSkill = async (req: Request, res: Response) => {
  let id = req.params.id;
  let reqBody = req.body;
  try {
    let query = { _id: id };

    await Skills.findOneAndUpdate(query, reqBody);

    res.status(201).json({
      success: "success",
      message: "Skill updated successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.deleteSkill = async (req: Request, res: Response) => {
  let id = req.params.id;

  try {
    let query = { _id: id };

    await Skills.findOneAndDelete(query);
    res.status(201).json({
      success: "success",
      message: "Skill deleted successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.skillsGetByType = async (req: Request, res: Response) => {
  let type = req.params.type;
  try {
    let skills = await Skills.aggregate([
      { $match: { type: type, email: req.headers.email } },
    ]);

    res.status(200).json({
      success: "success",
      data: skills,
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.getSkills = async (req: Request, res: Response) => {
  let email = req.headers.email;
  try {
    // let skills = await Skills.aggregate([
    //   { $match: { email: req.headers.email } },
    //   {
    //     $group: {
    //       _id: "$type",
    //       data: { $push: "$$ROOT" },
    //     },
    //   },
    // ]);

    let skills = await Skills.aggregate([
      {
        $facet: {
          expertise: [{ $match: { email: email, type: "Expertise" } }],
          comfortable: [{ $match: { email: email, type: "Comfortable" } }],
          tools: [{ $match: { email: email, type: "Tools" } }],
        },
      },
    ]);

    res.status(200).json({
      success: "success",
      skills: skills[0],
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};
