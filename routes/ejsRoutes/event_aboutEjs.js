var express = require("express");
const Events = require("../../models/event");
var router = express.Router();

/* GET home page. */
router.get("/:id", async function (req, res, next) {
  const eventId = req.params.id
  const eventData = await Events.findById(eventId);
  console.log(eventData);
  res.render("event_about",{eventData});

});

module.exports = router;
