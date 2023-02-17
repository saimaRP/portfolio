// <!-- Name : Saima Rafik Patel
//     Student Id: 301248048
// -->
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Me Page" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

router.get("/products", function (req, res, next) {
  res.render("index", { title: "Products" });
});

router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services Page" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Page" });
});

module.exports = router;

