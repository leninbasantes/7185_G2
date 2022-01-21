const { response, json } = require("express");

function recivirDatos(){
    var cad = document.getElementById('nameProduct').value;
    fetch (`http://localhost:4000/api/product/${cad}`).then(response => response.json()).then(json => console.log(json));
}