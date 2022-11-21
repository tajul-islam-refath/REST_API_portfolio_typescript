import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

module.exports = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      status: "Unauthorized",
    });
  }

  let email = jwt.verify(token, "swttoken123456")["data"];
  req.headers.email = email;
  next();
};
