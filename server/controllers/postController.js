const Post = require("../models/Post");

const createPost = async (req, res) => {
    const { title, content, image } = req.body;

    try {
        const newPost = new Post({
            title,
            content,
            image,
        });
        await newPost.save();
        res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    createPost,
    getPosts,
};
