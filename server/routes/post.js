const express = require("express");
const router = express.Router();
const { createPost, getPosts } = require("../controllers/postController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", getPosts);
router.post("/", verifyToken, createPost);

module.exports = router;
