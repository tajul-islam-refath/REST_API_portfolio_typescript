import express, { Router } from "express";
const router: Router = express.Router();

const { me, login, update } = require("../controllers/UserController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

router.post("/login", login);
router.get("/me", AuthVerifyMiddleware, me);
router.post("/update", AuthVerifyMiddleware, update);
module.exports = router;
