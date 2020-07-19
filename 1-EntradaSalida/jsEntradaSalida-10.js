/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let nuevoSueldo;

	sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	nuevoSueldo = sueldo * .75; 
	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);
}
