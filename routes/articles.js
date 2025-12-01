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

router.get("/articles", auth, getArticles);

router.post("/articles", auth, validateArticleSave, saveArticles);

router.delete("/articles/articleId", auth, validateId, deleteArticles);

module.exports = router;
