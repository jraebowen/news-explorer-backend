const router = require("express").Router();
const { auth } = require("../middlewares/auth");
const {
  getArticles,
  saveArticles,
  deleteArticles,
} = require("../controllers/articles");

router.get("/articles", auth, getArticles);

router.post("/articles", auth, saveArticles);

router.delete("/articles/articleId", auth, deleteArticles);

module.exports = router;
