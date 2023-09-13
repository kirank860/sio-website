var express = require("express");
const News = require("../models/News");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    // const id = req.params.id;
    // console.log(id);
    const newsData = await News.find();
    // const news = await News.find();
    console.log(newsData);
    // newsData, news
    res.render("article", { title: "Express", newsData });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
