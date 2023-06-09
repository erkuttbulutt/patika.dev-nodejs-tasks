const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

//* TEMPLATE ENGİNE
app.set("view engine", "ejs");

//* MIDDLEWARES
app.use(express.static("public"));

//* ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/addPost", (req, res) => {
  res.render("add_post");
});

app.get("/post", (req, res) => {
  res.render("post");
});

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
