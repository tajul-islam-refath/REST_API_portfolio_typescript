import express, { Router } from "express";
const router: Router = express.Router();
const userRoute = require("./userRoute");
const skillsRoute = require("./skillsRoute");
const experienceRoute = require("./experienceRoute");
const educationRoute = require("./educationRoute");
const contactRoute = require("./contactRoute");

router.use("/user", userRoute);
router.use("/skills", skillsRoute);
router.use("/experience", experienceRoute);
router.use("/education", educationRoute);
router.use("/contact", contactRoute);

module.exports = router;
