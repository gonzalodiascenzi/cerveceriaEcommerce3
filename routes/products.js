var express = require('express');
const { routes } = require('../app');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET home page. */
router.get('/', productsController.index
);


module.exports=router;
