/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*
	prioridad de operadores 
	+ prioridad 
				()
				/%*
				+-
	- prioridad
	*/
	let nun1;
	let nun2;
	let resultado;
	
	nun1 =parseInt(document.getElementById("txtIdNumeroDividendo").value);
	nun2 =parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado = nun1 % nun2;
	alert ("el modulo es "+ resultado);
	
}
