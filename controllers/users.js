const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const User = require("../models/users");

const ERROR_STATUS = require("../utils/errors");
const NotFoundError = require("../errors/not-found-error");
const BadRequestError = require("../errors/bad-request-error");
const ConflictError = require("../errors/conflict-error");
const UnauthorizedError = require("../errors/unauthorized-error");

const getCurrentUser = (req, res, next) => {
  const userID = req.user._id;
  User.findById(userID)
    .then((user) => {
      if (!user) {
        throw new NotFoundError("User not found");
      }
      res.status(ERROR_STATUS.OK).send(user);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return next(new BadRequestError("Invalid Data"));
      }
      return next(err);
    });
};

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        email,
        password: hash,
        name,
      }),
    )
    .then((user) => {
      const { _id, email: userEmail, name: userName } = user;
      res.status(ERROR_STATUS.CREATED).send({
        _id,
        email: userEmail,
        name: userName,
      });
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        return next(new BadRequestError("Invalid user information"));
      }
      if (err.code === 11000) {
        return next(new ConflictError("User already exists"));
      }
      return next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please enter valid email and password");
  }
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch((err) => {
      if (err.message === "Incorrect email or password") {
        return next(new UnauthorizedError("Incorrect email or password"));
      }
      return next(err);
    });
};

module.exports = { getCurrentUser, createUser, login };
