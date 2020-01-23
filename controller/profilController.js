const express = require('express');
const router = express.Router();

const Profil = require('../model/profil');


router.get("/", (req, res, next) => {
    Profil.list()
      .then( ([profilList, metadata]) => {
        //wywołane w momencie poprawnego wykonania instrukcji sql i zwrócenia wyniku
        res.render('profil/profilList', {profilList: profilList});
      })
      .catch(err => {
        //błąd komunikacji z bazą danych
        console.log(err);
      });
    
});

router.get("/zapiszProfil", (req, res, next) => {
    res.render('profil/profilForm', { pageTitle: "Nowy użytkownik", formAction: "add", profil: {} }).window.locaction.reloud(false);
});

router.post("/add", (req, res, next) => {
    const newProfil = new Profil(req.body.name, req.body.surname, req.body.log, req.body.password, req.body.mail, req.body.desc);
    Profil.add(newProfil)
      .then(() => {
        res.redirect("/profil").window.locaction.reloud(false);
      })
      .catch(err => {
        console.log(err);
      });
    
});

router.get("/usun", (req, res, next) => {
    Profil.delete(req.query.profil_id);
    res.redirect("/profil").window.locaction.reloud(false);
});

router.get("/szczegoly", (req, res, next) => {
    Profil.getListFromId(req.query.profil_id).then(
      ([profilList, metadata]) => {
          res.render('profil/szczegKonta', {profilId: req.query.profil_id, profilList: profilList});
      }).catch(err => {
      console.log(err);
  });
});


router.post("/edytujZapisz", (req, res, next) => {
    const newProfill =  new Profil(req.body.name, req.body.surname, req.body.log, req.body.password, req.body.mail, req.body.desc, req.body.idProfil);
    Profil.edit(newProfill);
    res.redirect("/profil").window.locaction.reloud(false);
});

router.get("/mojekonto", (req, res, next) => {
    res.render('profil/mojeKonto');
});

router.get("/edycja", (req, res, next) => {
    Profil.getListFromId(req.query.profil_id).then(
      ([profilList, metadata]) => {
        res.render('profil/edycjaKonta', {profilId: req.query.profil_id, profilList: profilList});
      }).catch(err => {
      console.log(err);
  });
});

router.get("/kontakt", (req, res, next) => {
    res.render('profil/kontaktInfo');
});

module.exports.route = router; 