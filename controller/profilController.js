const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
    const postList = Post.list();
    res.render('profil/mainProfil', {postList: postList});
});


module.exports.route = router; 