const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  const posts = await Blog.find({});
  res.render("index", { posts });
};

exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("post", { blog });
};

exports.createBlog = async (req, res) => {
  console.log(req.body);
  await Blog.create(req.body);
  res.redirect("/");
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog.title = req.body.title;
  blog.detail = req.body.detail;
  blog.save();
  res.redirect("/");
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
