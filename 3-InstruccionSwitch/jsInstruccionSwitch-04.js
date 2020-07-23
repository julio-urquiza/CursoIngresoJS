function mostrar()
{
	/*
	al seleccionar un mes informar.
	si es Febrero: " Este mes no tiene más de 29 días."
	si NO es Febrero: "Este mes tiene 30 o más días"
	*/
	let mes;
	mes =document.getElementById("txtIdMes").value;
	switch(mes)
	{
		case "Febrero": 
			alert ("tiene 28 dias");
			break;
		case "Abril":			 
		case "Junio":				 
		case "Septiembre":
		case "Noviembre":
			alert ("tiene 30 dias");
			break
		default:
			alert ("tiene 31 dias");
			break
	}


}//FIN DE LA FUNCIÓN