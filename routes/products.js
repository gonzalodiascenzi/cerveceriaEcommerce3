var express = require('express');
const { routes } = require('../app');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET home page. */
router.get('/', productsController.index);

router.get('/register', productsController.register);

router.post('/register', productsController.processRegister);

// router.get('/:id', productsController.productDetail);


module.exports=router;
