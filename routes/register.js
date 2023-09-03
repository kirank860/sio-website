var express = require("express");
var router = express.Router();
const Registration = require("../models/Registration");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("register");
});

router.post("/", async function (req, res, next) {
  try {
    console.log(req.body);

    // Check if a user with the same email already exists
    const existingUser = await Registration.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400); //.json({ error: "Email already exists" });
    }

    const newRegistration = new Registration({
      name: req.body.name,
      gender: req.body.gender,
      mobileNumber: req.body.contact,
      email: req.body.email,
      district: req.body.location,
      profession: req.body.profession,
      regDate: req.body.day,
      matterOfInterest: req.body.intrest,
    });

    // Save the registration data to the database
    await newRegistration.save();
    return res.status(200).send("Successfully registered");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
