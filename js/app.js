
//agregar overlay lightbox
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption =$ ("<p></p>");

//con imagen
$overlay.append($image);

//con texto
$overlay.append($caption);

//agregar al overlay al body
$("body").append($overlay);

//1. Usuario da clic en el link que rodea toda la imag 
$("#galeria li a").click( function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);

//1.1 muestra el light box con la imagen a la que se dio clic
$image.attr("src",href);

var texto = $(this).children("img").attr("alt");
$caption.text(texto);

$overlay.show();

})

$overlay.click(function(){
	$overlay.hide();
})

//se crea menu lateral y agregamos al menu
var $select = $("<select></select>");
$("#menu").append($select);

//reorrer el menu
$("#menu a").each(function(){
	var $anchor = $(this);
//crear una opcion para el select por cada elemento del menu
var $option = $("<option></option>");
//obtener cada valor de la opcion del atributo href
$option.val($anchor.attr("href"));
//obtener texto de cada opcion
$option.text($anchor.text());
//agregar la opcion al select
$select.append($option);

})

//var $button = $("<button>IR</button>");
//$("#menu").append($button);

//$button.click(function(){
$select.change(function(){
	window.location = $select.val();
})


if($(this).hasClass("selected"))
{
	$option.prop("selected", true);
}





/*
//escoer el mensaje
jQuery(".advertencia").hide();

//mostrar el mensaje lentamente usamos el atajo $
$ (".advertencia").show("slow");

jQuery(".advertencia").hide().show("slow");

*/

/*function enviarAdvertencia () {
	jQuery(".advertencia").hide().show("slow");	
}

//le pasamos al handler la funcion sin parentesis 
$(document).ready(enviarAdvertencia)*/


