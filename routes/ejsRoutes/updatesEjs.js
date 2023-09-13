var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    res.render("updates"); // Sending the response
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
