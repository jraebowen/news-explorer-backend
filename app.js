require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const app = express();
const { PORT, MONGO_URL } = process.env;
if (!PORT) {
  throw new Error("PORT is not defined in .env");
}

if (!MONGO_URL) {
  throw new Error("MONGO_URL is not defined in .env");
}

mongoose.connect(MONGO_URL);

const mainRouter = require("./routes/index");
const errorHandler = require("./middlewares/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(requestLogger);

app.use("/", mainRouter);

app.use(errorLogger); // enabling the error logger
app.use(errors()); // celebrate error handler
app.use(errorHandler); // centralized error handler

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
