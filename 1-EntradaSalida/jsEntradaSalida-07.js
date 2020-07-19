/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let nun1;
	let nun2;
	let resultado;
	
	nun1 =parseInt(document.getElementById("txtIdNumeroUno").value);
	nun2 =parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = nun1 + nun2;
	alert ("la suma es "+ resultado);
}

function restar()
{
	let nun1;
	let nun2;
	let resultado;
	
	nun1 =parseInt(document.getElementById("txtIdNumeroUno").value);//si le sacamos el parseint funcion igual
	//nun1 =document.getElementById("txtIdNumeroUno").value;
	//nun2 =document.getElementById("txtIdNumeroDos").value;
	nun2 =parseInt(document.getElementById("txtIdNumeroDos").value);// aca son strings 
	resultado = nun1 - nun2;//aca los convierte en numbers 
	alert ("la resta es "+ resultado);//funciona el los casos siguientes 
	//alert ("el resultado es de tipo"+ resultado); para ver los tipos de datos (number o string)
}

function multiplicar()
{ 
	let nun1;
	let nun2;
	let resultado;
	
	nun1 =parseInt(document.getElementById("txtIdNumeroUno").value);
	nun2 =parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = nun1 * nun2;
	alert ("el producto es "+ resultado);
}

function dividir()
{
	let nun1;
	let nun2;
	let resultado;
	
	nun1 =parseInt(document.getElementById("txtIdNumeroUno").value);
	nun2 =parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = nun1 / nun2;
	alert ("el cociente es "+ resultado);
	/* 
tipo de oeradores 
-aritmeticos suma(+), resta(-), multiplicacion(*), division(/) y módulo(%, resto de la division entera)
-relacionales 
-lógicos
*/

}

