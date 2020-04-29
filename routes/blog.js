const express = require("express");
const router = express.Router();

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

router.post("/blog", createBlog);

router.get("/blogs", getAllBlogs);

router.get("/blog/:id", getBlogById);

router.put("/blog/:id", updateBlog);

router.delete("/blog/:id", deleteBlog);

module.exports = router;
