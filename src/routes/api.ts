import express, { Router } from "express";
const router: Router = express.Router();
const profileRoute = require("./profileRoute");
const skillsRoute = require("./skills");

router.use("/profile", profileRoute);
router.use("/skills", skillsRoute);

module.exports = router;
