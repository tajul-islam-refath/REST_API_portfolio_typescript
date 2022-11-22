import express, { Router } from "express";
const router: Router = express.Router();
const {
  createEducation,
  updateEducation,
  deleteEducation,
  getEducations,
} = require("../controllers/Education.controller");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

router.post("/create", AuthVerifyMiddleware, createEducation);
router.put("/update/:id", AuthVerifyMiddleware, updateEducation);
router.delete("/delete/:id", AuthVerifyMiddleware, deleteEducation);

router.get("/getEducations", AuthVerifyMiddleware, getEducations);

module.exports = router;
