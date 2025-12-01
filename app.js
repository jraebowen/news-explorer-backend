const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");
require("dotenv").config();

const app = express();
const { PORT = 3002 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/newsexplorer_db");

const mainRouter = require("./routes/index.js");
const errorHandler = require("./middlewares/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", mainRouter);

app.use(errors()); // celebrate error handler
app.use(errorHandler);

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});
