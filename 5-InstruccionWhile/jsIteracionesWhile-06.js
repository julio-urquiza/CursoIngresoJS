function mostrar()
{
	/*
	Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
	*/

	let numero=0;
	//let suma=0;
	//let promedio;
	let i=1;
	while(i<=5)
	{
		numero+=parseInt(prompt("ingrese un numero"));
		//suma+=numero;
		//promedio=suma/5;
		i++;
	}
	
	document.getElementById("txtIdSuma").value=numero;
	document.getElementById("txtIdPromedio").value=numero/5;

}//FIN DE LA FUNCIÓN