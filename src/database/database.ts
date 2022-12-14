const mongoose = require("mongoose");

const connectDatabase = () => {
  const url: string = "mongodb://localhost:27017/my_portfolio";
  const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  mongoose.connect(url, config, (err: Error) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connect database successfully");
    }
  });
};

module.exports = connectDatabase;
