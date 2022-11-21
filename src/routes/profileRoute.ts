import express, { Router } from "express";
const router: Router = express.Router();

const { createProfile, login } = require("../controllers/ProfileController");

router.post("/login", login);
router.post("/createProfile", createProfile);

module.exports = router;
