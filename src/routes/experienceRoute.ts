import express, { Router } from "express";
const router: Router = express.Router();
const {
  createExperince,
  updateExperince,
  deleteExperince,
  getExperinces,
} = require("../controllers/Experience.controller");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

router.post("/create", AuthVerifyMiddleware, createExperince);
router.put("/update/:id", AuthVerifyMiddleware, updateExperince);
router.delete("/delete/:id", AuthVerifyMiddleware, deleteExperince);
// router.get("/skillsGetByType/:type", AuthVerifyMiddleware, skillsGetByType);
router.get("/getExperinces", AuthVerifyMiddleware, getExperinces);

module.exports = router;
