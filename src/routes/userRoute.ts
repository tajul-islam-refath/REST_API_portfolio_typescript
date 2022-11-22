import express, { Router } from "express";
const router: Router = express.Router();

const { createProfile, login } = require("../controllers/UserController");

router.post("/login", login);
module.exports = router;
