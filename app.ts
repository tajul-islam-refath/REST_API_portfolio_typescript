import express, { Express, Router } from "express";
const app: Express = express();

// import security middleware
const bodyParser = require("body-parser");
const rateLimiter = require("express-rate-limit");
const cors = require("cors");
const hpp = require("hpp");
const xss = require("xss-clean");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");

const router = require("./src/routes/api");

// security middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes implementation
app.use("/api/v1", router);

// Setup api rate limits
const limits = rateLimiter({
  windowMs: 15 * 60 * 60 * 1000,
  max: 100,
});

app.use(limits);

module.exports = app;
