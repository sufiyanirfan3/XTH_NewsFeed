const express = require("express");
const route = express.Router();
const postController = require("../../controllers/post/controller");

route.get("/newsFeed", user.authenticateUser, postController.getNewsFeed);

route.post("/post", user.authenticateUser, postController.createPost);

route.get("/post", user.authenticateUser, postController.getAllUserPost);
route.get("/post/:id", user.authenticateUser, postController.getOneUserPost);

route.put("/post/:id", user.authenticateUser, postController.updatePost);
route.delete("/post/:id", user.authenticateUser, postController.deletePost);

module.exports = route;
