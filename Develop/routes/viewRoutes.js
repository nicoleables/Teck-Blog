const router = require("express").Router();

router.get("/login", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("login", {
    title: "Login Page",
  });
});

router.get("/signup", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("signup", {
    title: "Signup Page",
  });
});

router.get("/home", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("home", {
    logged_in: req.session.logged_in,
    title: "Home",
  });
});

router.get("/dashboard", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("dashboard", {
    logged_in: req.session.logged_in,
    title: "Dashboard",
  });
});

module.exports = router;