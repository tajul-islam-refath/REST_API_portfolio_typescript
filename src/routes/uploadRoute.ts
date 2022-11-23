import express, { Router } from "express";
const router: Router = express.Router();

const { coverUpload } = require("../controllers/upload.controller");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post(
  "/coverImage",
  AuthVerifyMiddleware,
  upload.single("image"),
  coverUpload
);
module.exports = router;
