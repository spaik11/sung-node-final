const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  author: { type: String, default: "", unique: true },
  subject: { type: String, default: "" },
  article: { type: String, default: "" },
});

module.exports = mongoose.model("blog", BlogSchema);
