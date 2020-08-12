/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = parseInt(prompt("ingrese un numero entre 1 y 9."));
	while(numero>9 || numero<1 || isNaN(numero))
	{
		numero=parseInt(prompt("el numero es incorrecto"));
	}
	alert("el numero es correcto");
	document.getElementById("txtIdNumero").value=numero;
	/*
	let numero;
	numero = prompt("ingrese un numero entre 1 y 9.");
	while(!(numero<=9 && numero>0))
	{
		numero=prompt("el numero es incorrecto");
	}
	alert("el numero es correcto");
	document.getElementById("txtIdNumero").value=numero;
	*/
}//FIN DE LA FUNCIÓN