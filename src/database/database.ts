const mongoose = require("mongoose");

const connectDatabase = () => {
  const url: string = "mongodb://localhost:27017/todo_list";
  const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: true,
  };
  mongoose.connect(url, config, () => {
    console.log("Connect database successfully");
  });
};

module.exports = connectDatabase;
