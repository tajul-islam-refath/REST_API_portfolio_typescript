import  {Express} from 'express';
const connectDatabase = require("./src/database/database");

const app : Express = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

app.listen(process.env.PORT, () => {
  connectDatabase();
  console.log("server is running on port " + process.env.PORT);
});
