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

console.log("MONGO_URL:", MONGO_URL);

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Failed to connect to MongoDB:", err));

const mainRouter = require("./routes/index");
const errorHandler = require("./middlewares/error-handler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "https://newsexplorer.wildsurf.net"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(requestLogger);

app.use("/", mainRouter);

app.use(errorLogger); // enabling the error logger
app.use(errors()); // celebrate error handler
app.use(errorHandler); // centralized error handler

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
