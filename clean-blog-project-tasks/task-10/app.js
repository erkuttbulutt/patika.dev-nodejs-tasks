const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Blog = require("./models/Blog");

const app = express();

//! Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/clean-blog-project");

//* TEMPLATE ENGİNE
app.set("view engine", "ejs");

//* MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* ROUTES
app.get("/", async (req, res) => {
  const posts = await Blog.find({});
  res.render("index", { posts });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/addPost", (req, res) => {
  res.render("add_post");
});

app.get("/posts/:id", async (req, res) => {
  const blogId = await Blog.findById(req.params.id);
  res.render("post", { blogId });
});

app.post("/posts", async (req, res) => {
  console.log(req.body);
  await Blog.create(req.body);
  res.redirect("/");
});

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
