//Pido datos
var datos = prompt("Como te llamas?")

//Uso los datos del usuario en un alert
var bienvenida = alert("Bienvenido/a a FARMA WEB " + datos + "!")

//Otro prompt para preguntarle ubicacion y luego condicional
var ubicacion = prompt("De que zona sos?")


if (ubicacion == ("Palermo") || (ubicacion== "Recoleta") || (ubicacion == "Almagro") || (ubicacion == "Caballito")){
    alert("Realizamos envios en tu zona! Podes hacer tu pedido online")
}else{
   alert("Lo siento! No realizamos envios hasta tu zona,de todas maneras, podes ver los productos y acercarte a la sucursal")
}