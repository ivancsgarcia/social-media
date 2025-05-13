const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

dotenv.config();
const app = express();
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    }),
);
app.use(express.json());
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

mongoose
    .connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
    });

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.listen(port, () => {
    console.log(`Server is running. Listening on port ${port}`);
});
