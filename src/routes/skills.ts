import express, { Router } from "express";
const router: Router = express.Router();
const {
  createSkill,
  updateSkill,
  deleteSkill,
  skillsGetByType,
  getSkills,
} = require("../controllers/Skills.controller");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

router.post("/create", AuthVerifyMiddleware, createSkill);
router.post("/update/:id", AuthVerifyMiddleware, updateSkill);
router.delete("/delete/:id", AuthVerifyMiddleware, deleteSkill);
router.get("/skillsGetByType/:type", AuthVerifyMiddleware, skillsGetByType);
router.get("/getSkills", AuthVerifyMiddleware, getSkills);

module.exports = router;
