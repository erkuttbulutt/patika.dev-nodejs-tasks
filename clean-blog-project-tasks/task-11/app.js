const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const path = require("path");
const Blog = require("./models/Blog");
const blogController = require("./controllers/blogControllers")
const pageController = require("./controllers/pageController")

const app = express();

//! Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/clean-blog-project");

//* TEMPLATE ENGİNE
app.set("view engine", "ejs");

//* MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//* ROUTES
app.get("/", blogController.getAllBlogs);
app.get("/posts/:id", blogController.getBlog);
app.post("/posts", blogController.createBlog);
app.put("/posts/:id", blogController.updateBlog);
app.delete("/posts/:id", blogController.deleteBlog);

app.get("/about", pageController.getAboutPage);
app.get("/addPost", pageController.getAddPage);

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
