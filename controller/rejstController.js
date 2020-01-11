const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
    res.render('rejestr/rejsrForm');
});

router.get("/kontakt", (req, res, next) => {
    res.render('rejestr/kontaktInfo');
});


module.exports.route = router; 