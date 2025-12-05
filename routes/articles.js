const router = require("express").Router();
const { auth } = require("../middlewares/auth");
const {
  validateId,
  validateArticleSave,
} = require("../middlewares/validation");

const {
  getArticles,
  saveArticles,
  deleteArticles,
} = require("../controllers/articles");

router.get("/", auth, getArticles);

router.post("/", auth, validateArticleSave, saveArticles);

router.delete("/:articleId", auth, validateId, deleteArticles);

module.exports = router;
