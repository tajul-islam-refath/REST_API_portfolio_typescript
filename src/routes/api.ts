import express, { Router } from "express";
const router: Router = express.Router();
const profileRoute = require("./profileRoute");

router.use(profileRoute);

module.exports = router;
