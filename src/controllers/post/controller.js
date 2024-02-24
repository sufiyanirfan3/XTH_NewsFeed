const sequelize = require("sequelize");
const { Op } = require("sequelize");
const Post = require("../../models").posts;
const Comment = require("../../models").comments;
const Like = require("../../models").likes;
const Share = require("../../models").shares;

exports.getNewsFeed = async function (req, res) {
  try {
    const { user_id } = authUser(); //Auth using JWT

    const posts = await Post.findAll({
      where: {
        order: [["postCreationDate", "DESC"]],
        limit: 20, //show top 20 posts on news feed
      },
      // Here we can define conditions to show posts based on
      // - User follow the other person
      // - User commented on any of recent posts
      // - User is friend with him.
      // - User usually watches the video or posts of that person
      // - User remains engaged with the posts. Reads carefully the post
    });

    return res.json({
      success: true,
      message: "Posts fetched Successfully",
      data: posts,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.createPost = async function (req, res) {
  try {
    const { user_id } = await authUser(); //auth user using JWT
    const post = await Post.create({
      post_user_id: user_id,
      platform: req.platform,
      text: req.text,
      image: req.image,
      video: req.video,
    });

    return res.json({
      success: true,
      message: "Post created Successfully",
      data: post,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.getAllUserPost = async function (req, res) {
  try {
    const { user_id } = authUser(); //Auth using JWT

    const posts = await Post.findAll({
      where: {
        post_user_id: user_id,
      },
    });

    return res.json({
      success: true,
      message: "Posts fetched Successfully",
      data: posts,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.getOneUserPost = async function (req, res) {
  try {
    const { user_id } = authUser(); //Auth using JWT
    const { post_id } = req.params();

    const post = await Post.findOne({
      where: {
        post_user_id: user_id,
        post_id: post_id,
      },
    });

    return res.json({
      success: true,
      message: "Post fetched Successfully",
      data: post,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.updatePost = async function (req, res) {
  try {
    const { user_id } = await authUser(); //auth user using JWT
    const { post_id } = req.params();
    const post = await Post.update({
      where: {
        post_id: post_id,
        post_user_id: user_id,
      },
    });

    return res.json({
      success: true,
      message: "Post updated Successfully",
      data: post,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.deletePost = async function (req, res) {
  try {
    const { user_id } = await authUser(); //auth user using JWT
    const { post_id } = req.params();
    await Post.delete({
      where: {
        post_id: post_id,
        post_user_id: user_id,
      },
    });

    return res.json({
      success: true,
      message: "Post deleted Successfully",
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.commentPost = async function (req, res) {
  try {
    const { user_id } = await authUser(); //auth user using JWT
    const { post_id } = req.params();

    const comment = await Comment.create({
      comment_user_id: user_id,
      post_id: post_id,
      comment: req.comment,
    });

    return res.json({
      success: true,
      message: "Comment created Successfully",
      data: comment,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};

exports.likePost = async function (req, res) {
  try {
    const { user_id } = await authUser(); //auth user using JWT
    const { post_id } = req.params();

    const like = await Like.create({
      like_user_id: user_id,
      post_id: post_id,
    });

    return res.json({
      success: true,
      message: "Like created Successfully",
      data: like,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};


exports.sharePost = async function (req, res) {
  try {
    const { user_id } = await authUser(); //auth user using JWT
    const { post_id } = req.params();

    const share = await Share.create({
      share_user_id: user_id,
      post_id: post_id,
    });

    return res.json({
      success: true,
      message: "Share created Successfully",
      data: share,
    });
  } catch (e) {
    return res.json({
      success: false,
      error: e.message,
    });
  }
};
