const express = require('express');
const router = express.Router();

const Post = require('../model/post');


router.get("/", (req, res, next) => {
    Post.list()
      .then( ([postList, metadata]) => {
        //wywołane w momencie poprawnego wykonania instrukcji sql i zwrócenia wyniku
        res.render('posty/postList', {postList: postList});
      })
      .catch(err => {
        //błąd komunikacji z bazą danych
        console.log(err);
      });
});

router.get("/zapiszPost", (req, res, next) => {
    res.render('posty/postForm', { pageTitle: "Nowy post", formAction: "add", post: {} });
});

router.post("/add", (req, res, next) => {
    const newPost = new Post(req.body.title, req.body.score, req.body.desc, req.body.idAut, req.body.idMjscPst);
    Post.add(newPost)
      .then(() => {
        res.redirect("/posty");
      })
      .catch(err => {
        console.log(err);
      });
      
});

router.get("/profil", (req, res, next) => {
      Post.list()
      .then(([postList, metadata]) => {
        res.render('posty/mainProfil', {postList: postList});

      }).catch(err => {
      console.log(err);
  });


});

router.get("/usun", (req, res, next) => {
    Post.delete(req.query.post_id);
    res.redirect("/posty");
});

router.get("/szczegoly", (req, res, next) => {
    Post.getListFromId(req.query.post_id).then(
      ([postList, metadata]) => {
          res.render('posty/szczegPostu', {postId: req.query.post_id, postList: postList});
      }).catch(err => {
      console.log(err);
  });
});

router.get("/edycja", (req, res, next) => {
    Post.getListFromIdEdyt(req.query.profil_id).then(
      ([profilList, metadata]) => {
        res.render('profil/edycjaPostu', {profilId: req.query.profil_id, profilList: profilList});
      }).catch(err => {
      console.log(err);
  });
});

router.post("/edytujZapisz", (req, res, next) => {
    const newPost =  new Post(req.body.title, req.body.score, req.body.desc, req.body.idAut, req.body.idMjscPst, req.body.idPost );
    Post.edit(newPost);
    res.redirect("/posty");
});

module.exports.route = router; 