const express = require('express');
const router = express.Router();

const Post = require('../model/post');


router.get("/", (req, res, next) => {
    const postList = Post.list();
    res.render('posty/postList', {postList: postList});
});

router.get("/zapiszPost", (req, res, next) => {
    res.render('posty/postForm', { pageTitle: "Nowy post", formAction: "add", post: {} });
});

router.post("/add", (req, res, next) => {
    const newPost = new Post(req.body.title, req.body.score, req.body.desc);
    Post.add(newPost);
    res.redirect("/posty");
});

router.get("/profil", (req, res, next) => {
    const postList = Post.list();
    res.render('posty/mainProfil', {postList: postList});
});

module.exports.route = router; 