import ERROR_STATUS from "../utils/errors";

const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.statusCode) {
    return res.status(err.statusCode).send({ message: err.message });
  }
  res
    .status(ERROR_STATUS.INTERNAL_SERVER.code)
    .send({ message: ERROR_STATUS.INTERNAL_SERVER.message });
};

module.exports = errorHandler;
