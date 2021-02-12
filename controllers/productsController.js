
const fs = require('fs');
const path = require('path');

module.exports= {

 index: function (req,res){
 res.render('newViews/cervezas', {
 productos : productoParseado
 });

 },
 
}




