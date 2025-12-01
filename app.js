const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { PORT = 3002 } = process.env;
const mainRouter = require("./routes/index.js");

app.use(express.json());
express.urlencoded({ extended: true });

app.use("/", mainRouter);

mongoose.connect("mongodb://127.0.0.1:27017/newsexplorer_db");

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});
