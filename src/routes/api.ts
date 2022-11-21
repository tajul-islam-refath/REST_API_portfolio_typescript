import express, { Router } from "express";
const router: Router = express.Router();
const profileRoute = require("./profileRoute");

router.use("/profile", profileRoute);

module.exports = router;
