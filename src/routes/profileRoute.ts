import express, { Router } from "express";
const router: Router = express.Router();

const { createProfile } = require("../controllers/ProfileController");

router.post("/createProfile", createProfile);

module.exports = router;
