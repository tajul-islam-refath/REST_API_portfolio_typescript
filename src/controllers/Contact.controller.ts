import { Request, Response } from "express";
import Contact from "../models/Contact";

exports.createContact = async (req: Request, res: Response) => {
  let reqBody = req.body;
  try {
    let contact = new Contact(reqBody);
    await contact.save();

    res.status(201).json({
      success: "success",
      message: "Message send successfully.",
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};

exports.getContacts = async (req: Request, res: Response) => {
  let email = req.headers.email;
  try {
    let contacts = await Contact.aggregate([
      { $match: { email: email } },
      { $sort: { createdAt: -1 } },
    ]);

    res.status(200).json({
      success: "success",
      contacts: contacts,
    });
  } catch (err: any) {
    res.status(400).json({ success: "failed", message: err.message });
  }
};
