
const fs = require('fs');
const path = require('path');
const productoPath = path.resolve(__dirname + '/../data/producto.json'); //Obtenemos la ruta de productos
const productosJSON = fs.readFileSync(productoPath); //Leemos el archivo JSON
const productoParseado = JSON.parse(productosJSON); //Parseamos el archivo JSON a un Array de Objetos Literales.

module.exports= {

 index: function (req,res){
 res.render('newViews/cervezas', {
 productos : productoParseado
 });
 
},
 

 register: function (req,res){
    res.render('newViews/registerFormProduct');
},

 processRegister: function (req, res) {
    const nuevoProducto = {
        nombre: req.body.nombre,
        precio: req.body.precio
    }
    const newList = JSON.stringify([...productoParseado, nuevoProducto], null, 2);

        fs.writeFileSync(productoPath, newList);

        res.redirect('/products/');

},

 productDetail: function (req, res) {
    let id = req.params.id;

    // Buscar que exista el producto
    // Lo almacenas en una constante
    // Lo mandas a la vista de producto Detail

    res.render('newViews/productDetails')
}

}



