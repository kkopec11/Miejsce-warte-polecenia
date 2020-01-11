const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
    res.render('profil/mainProfil');
});



module.exports.route = router; 