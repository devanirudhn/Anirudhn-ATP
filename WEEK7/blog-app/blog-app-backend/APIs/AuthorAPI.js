import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const authorApp = exp.Router();


// ======================================================
// WRITE ARTICLE
// ======================================================

authorApp.post(
  "/article",
  verifyToken("AUTHOR"),
  async (req, res) => {
    try {

      const articleObj = req.body;

      // logged in user from token
      let user = req.user;

      // get author from DB
      let author = await UserModel.findById(articleObj.author);

      // check author exists
      if (!author) {
        return res
          .status(404)
          .json({ message: "Invalid author" });
      }

      // check same user
      if (author.email !== user.email) {
        return res
          .status(403)
          .json({ message: "You are not authorized" });
      }

      // check role
      if (author.role !== "AUTHOR") {
        return res
          .status(403)
          .json({ message: "Only authors can publish" });
      }

      // create article
      const articleDoc = new ArticleModel(articleObj);

      // save article
      await articleDoc.save();

      // response
      res
        .status(201)
        .json({
          message: "Article published successfully",
          payload: articleDoc,
        });

    } catch (err) {

      console.log("Error in write article:", err);

      res
        .status(500)
        .json({
          message: "Server error",
          error: err.message,
        });
    }
  }
);


// ======================================================
// READ OWN ARTICLES
// ======================================================

authorApp.get(
  "/articles",
  verifyToken("AUTHOR"),
  async (req, res) => {

    try {

      // author id from token
      const authorIdOfToken = req.user?.id;

      // find articles
      let articleList = await ArticleModel.find({
        author: authorIdOfToken,
      });

      // response
      res.status(200).json({
        message: "Articles fetched",
        payload: articleList,
      });

    } catch (err) {

      console.log("Error in get articles:", err);

      res.status(500).json({
        message: "Server error",
        error: err.message,
      });
    }
  }
);


// ======================================================
// UPDATE ARTICLE
// ======================================================

authorApp.put(
  "/articles",
  verifyToken("AUTHOR"),
  async (req, res) => {

    try {

      // author id from token
      const authorIdOfToken = req.user?.id;

      // data from frontend
      const {
        articleId,
        title,
        category,
        content,
      } = req.body;

      // update article
      const modifiedArticle =
        await ArticleModel.findOneAndUpdate(
          {
            _id: articleId,
            author: authorIdOfToken,
          },
          {
            $set: {
              title,
              category,
              content,
            },
          },
          {
            new: true,
          }
        );

      // not found
      if (!modifiedArticle) {
        return res.status(403).json({
          message: "Not authorized to edit article",
        });
      }

      // response
      res.status(200).json({
        message: "Article modified successfully",
        payload: modifiedArticle,
      });

    } catch (err) {

      console.log("Error in update article:", err);

      res.status(500).json({
        message: "Server error",
        error: err.message,
      });
    }
  }
);


// ======================================================
// ENABLE / DISABLE ARTICLE
// ======================================================

authorApp.patch(
  "/articles",
  verifyToken("AUTHOR"),
  async (req, res) => {

    try {

      // author id from token
      const authorIdOfToken = req.user?.id;

      // data from frontend
      const {
        articleId,
        isArticleActive,
      } = req.body;

      // find article
      const articleOfDB =
        await ArticleModel.findOne({
          _id: articleId,
          author: authorIdOfToken,
        });

      // article not found
      if (!articleOfDB) {
        return res.status(404).json({
          message: "Article not found",
        });
      }

      // already same state
      if (
        isArticleActive ===
        articleOfDB.isArticleActive
      ) {
        return res.status(200).json({
          message:
            "Article already in same state",
        });
      }

      // update state
      articleOfDB.isArticleActive =
        isArticleActive;

      // save
      await articleOfDB.save();

      // response
      res.status(200).json({
        message: "Article status updated",
        payload: articleOfDB,
      });

    } catch (err) {

      console.log("Error in patch article:", err);

      res.status(500).json({
        message: "Server error",
        error: err.message,
      });
    }
  }
);