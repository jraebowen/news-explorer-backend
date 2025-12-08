const router = require("express").Router();

const userRouter = require("./users");
const articleRouter = require("./articles");
const { login, createUser } = require("../controllers/users");
const {
  validateUserCreation,
  validateLogin,
} = require("../middlewares/validation");

const NotFoundError = require("../errors/not-found-error");

router.post("/signin", validateLogin, login);
router.post("/signup", validateUserCreation, createUser);

router.use("/users", userRouter);
router.use("/articles", articleRouter);

router.use(() => {
  throw new NotFoundError("Requested resource not found");
});

module.exports = router;
