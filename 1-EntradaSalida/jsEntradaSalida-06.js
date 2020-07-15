/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let nun1;
	let nun2;
	let resultado;
	
	nun1 =parseInt(document.getElementById("txtIdNumeroUno").value);
	//tranforma de string a number  (tambien esta parsefloat)
	nun2 =parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = nun1 + nun2;
	alert ("la suma es "+ resultado);
}

