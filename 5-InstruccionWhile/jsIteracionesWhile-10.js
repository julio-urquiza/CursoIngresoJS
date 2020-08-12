/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	// que tenfo que hacer con ese numero?
	
	// declarar contadores y variables 
	let numero;
	let seguir;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let promedioPositivos=0;
	let promedioNegativos=0;
	let diferencia;
	
	// generar un bucle del tipo mientras el usuario quiera (dowhile)
	do {
		// codigo dentro del bucle
		//pido un numero 
		numero = parseInt(prompt("ingrese un nuemro"));
		// analizar el signo del numero y actuar en consecuencia
		if (numero < 0) //numero<0    !(numero>=0)
		{//Negativos
			alert("negativos");
			acumuladorNegativos += numero;
			contadorNegativos++;
		}

		else if (numero == 0) 
		{//ceros
			alert("ceros");
			contadorCeros++;
		}

		else 
		{//positivos
			alert("positivos");
			acumuladorPositivos += numero;
			contadorPositivos++;
		}

		if (numero % 2 ==0) 
		{
			contadorPares++;
		}
		seguir = prompt("desea continuar?");
	} while (seguir == "si")
	// codigo despues del bucle

	// hacer los calculos que necesitan los datos conseguidos durante el bucle 
	if(contadorPositivos!=0)
	{
	promedioPositivos= acumuladorPositivos/contadorPositivos;
	}
	if(contadorNegativos!=0)
	{
	promedioNegativos= acumuladorNegativos/contadorNegativos;
	}
	diferencia= contadorPositivos+ contadorNegativos;

	// muestro los resulttados 
	console.log("1-Suma de los negativos."+acumuladorPositivos);
	console.log("2-Suma de los positivos."+acumuladorNegativos);
	console.log("3-Cantidad de positivos."+contadorPositivos);
	console.log("4-Cantidad de negativos."+contadorNegativos);
	console.log("5-Cantidad de ceros."+contadorCeros);
	console.log("6-Cantidad de números pares."+contadorPares);
	console.log("7-Promedio de positivos."+promedioPositivos);
	console.log("8-Promedios de negativos."+promedioNegativos);
	console.log("9-Diferencia "+diferencia);

}//FIN DE LA FUNCIÓN