
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
}

}




