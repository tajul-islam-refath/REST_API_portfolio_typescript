import express, { Router } from "express";
const router: Router = express.Router();

const { coverUpload , profileImage, profilePhoto, cv} = require("../controllers/upload.controller");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post(
  "/coverImage",
  AuthVerifyMiddleware,
  upload.single("image"),
  coverUpload
);

router.post(
  "/profileImage",
  AuthVerifyMiddleware,
  upload.single("image"),
  profileImage
);

router.post(
  "/profilePhoto",
  AuthVerifyMiddleware,
  upload.single("image"),
  profilePhoto
);

router.post(
  "/cv",
  AuthVerifyMiddleware,
  upload.single("cv"),
  cv
);


module.exports = router;
