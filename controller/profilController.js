const express = require('express');
const router = express.Router();

const Profil = require('../model/profil');


router.get("/", (req, res, next) => {
    const profilList = Profil.list();
    res.render('profil/profilList', {profilList: profilList});
});

router.get("/zapiszProfil", (req, res, next) => {
    res.render('profil/profilForm', { pageTitle: "Nowy użytkownik", formAction: "add", profil: {} });
});

router.post("/add", (req, res, next) => {
    const newProfil = new Profil(req.body.name, req.body.surname, req.body.log, req.body.password, req.body.mail, req.body.desc);
    Profil.add(newProfil);
    res.redirect("/");
});

router.get("/kontakt", (req, res, next) => {
    res.render('profil/kontaktInfo');
});

router.get("/mojekonto", (req, res, next) => {
    res.render('profil/mojeKonto');
});

router.get("/usun", (req, res, next) => {
    Profil.delete(req.query.profil_id);
    res.redirect("/profil");
});

router.get("/szczegoly", (req, res, next) => {
    const profilList = Profil.list();
    res.render('szczegKonta', {profilId: req.query.profil_id, profilList: profilList})
});

module.exports.route = router; 