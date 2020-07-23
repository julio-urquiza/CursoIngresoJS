function mostrar()
{
	/*
 	una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
	en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
	en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
	en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
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
			alert("El viaje te sale 18.000 pesos");//*1.2 +20%
			break;
		case "Cataratas_Invierno":
		case "Cordoba_Invierno":
			alert("El viaje te sale 13.500 pesos");//*0.9 -10%
			break;
		case "Cataratas_Verano":
		case "Cordoba_Verano":
		case "Bariloche_Otoño":
		case "Mar del plata_Otoño":
		case "Cataratas_Otoño":
		case "Bariloche_Primavera":
		case "Mar del plata_Primavera":
		case "Cataratas_Primavera":	
			alert("El viaje te sale 16.500 pesos");//*1.1 +10%
			break;
		case "Mar del plata_Invierno":	
		case "Bariloche_Verano":
			alert("El viaje te sale 12.000 pesos");//*0.8 -20%
			break;
		default:
			alert("El viaje te sale 15.000 pesos");//cordoba_otoño_primavera
			break;
		


	}
	
}//FIN DE LA FUNCIÓN