function mostrar()
{
	/*
	una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

	en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

	en Verano: Se viaja a Mar del plata y Cataratas solamente

	en Otoño: Se viaja a todos los destinos.

	primavera: solo no se viaja a Bariloche 
	*/
	let lugar;
	let estacion;
	let juntos;
	
	lugar = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	juntos = lugar +"_"+estacion;

	switch(juntos)
	{
		case "Bariloche_Invierno":
		case "Mar del plata_Verano":
		case "Cataratas_Verano":
		case "Cordoba_Otoño":
		case "Cataratas_Otoño":
		case "Bariloche_Otoño":
		case "Mar del plata_Otoño":
		case "Bariloche_Primavera":
			alert("si se viaja")
			break;
		case "Cataratas_Invierno":
		case "Cordoba_Invierno":
		case "Cordoba_Verano":
		case "Mar del plata_Primavera":
		case "Cataratas_Primavera":	
		case "Mar del plata_Invierno":	
		case "Bariloche_Verano":
		case "Cordoba_Primavera":
			alert("no se viaja")
			break;
	}

}//FIN DE LA FUNCIÓN