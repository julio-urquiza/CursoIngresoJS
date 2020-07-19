/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let nuevoSueldo;
	let aumento;

	sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	//aumento = sueldo * .1;
	nuevoSueldo = sueldo * 1.1; 
	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);//redonde a dos decimales para arriba 
	//Math.ceil(8.1); redondea para arriba 	
	//Math.floor(8.9); redondea para abajo 	
	//Math.round(1.5);redondea normalmente
}	
