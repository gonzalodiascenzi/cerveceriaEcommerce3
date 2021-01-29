var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/contacto',  (req, res) => {
  res.render('newViews/contacto');
})

router.get('/fundadores',  (req, res) => {
  res.render('newViews/fundadores');
})

router.get('/eventos',  (req, res) => {
  res.render('newViews/eventos');
})

router.get('/local',  (req, res) => {
  res.render('newViews/local');
})


module.exports = router;

//https://coldbreakusa.com/es
