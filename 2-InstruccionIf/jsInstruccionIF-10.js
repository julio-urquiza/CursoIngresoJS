function mostrar()
{
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4 	
	*/
	let numero;
	let maximo = 10;
	let minimo = 1;
	numero= Math.round(Math.random()* (maximo - minimo)+ minimo)
	alert(numero);	

	if(numero >8)
	{
		alert("EXCELENTE");
	}
	else if(numero <4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		alert("APROBÓ");
	}

}//FIN DE LA FUNCIÓN