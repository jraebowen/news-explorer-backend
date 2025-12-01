const Article = require("../models/article");

const ERROR_STATUS = require("../utils/errors");
const BadRequestError = require("../errors/bad-request-error");
const NotFoundError = require("../errors/not-found-error");
const ForbiddenError = require("../errors/forbidden-error");

const getArticles = (req, res, next) => {
  const ownerId = req.user._id;
  Article.find({ onwer: ownerId })
    .then((articles) => res.status(ERROR_STATUS.OK).sent(articles))
    .catch(next);
};

const saveArticles = (req, res, next) => {
  const { keyword, title, text, date, source, link, image } = req.body;
  const ownerId = req.user._id;
  Article.create({ keyword, title, text, date, source, link, image, ownerId })
    .then((article) => res.status(ERROR_STATUS.CREATED).json(article))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return next(new BadRequestError("Item could not be created"));
      }
      return next(err);
    });
};

const deleteArticles = (req, res, next) => {
  const { articleId } = req.params;
  const userId = req.user._id;
  Article.findById(articleId)
    .then((article) => {
      if (!article) {
        throw new NotFoundError("Article not found");
      }
      if (userId.toString() !== article.owner.toString()) {
        throw new ForbiddenError("Action not authorized");
      }
      return Article.findByIdAndDelete(articleId)
        .then(() => {
          res.send({ message: "Article deleted successfully" });
        })
        .catch((err) => {
          if (err.name === "CastError") {
            return next(new BadRequestError("invalid id"));
          }
          return next(err);
        });
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return next(new BadRequestError("invalid id"));
      }
      return next(err);
    });
};

module.exports = { getArticles, saveArticles, deleteArticles };
