require("dotenv").config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const Blog = require('./models/blog');

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const { checkForAuthenticationCookie } = require('./middlewares/authentication');

const app = express();
const PORT = process.env.PORT||8000;

mongoose.connect(process.env.MONGO_URL)
.then((e) => console.log("MongoDB Connected"));

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded ({extended:false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async(req, res) => {
    const allBlogs = await Blog.find().populate("createdBy");
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    }); 
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT,() => console.log(`Server Started at Port: ${PORT}`));