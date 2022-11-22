import express, { Router } from "express";
const router: Router = express.Router();
const {
  createContact,
  getContacts,
} = require("../controllers/Contact.controller");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

router.post("/create", AuthVerifyMiddleware, createContact);
// router.delete("/delete/:id", AuthVerifyMiddleware, deleteEducation);

router.get("/getContacts", AuthVerifyMiddleware, getContacts);

module.exports = router;
