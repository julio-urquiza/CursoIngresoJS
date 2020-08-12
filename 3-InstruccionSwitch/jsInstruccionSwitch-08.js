function mostrar()
{
	/*
	Al seleccionar un destino informar si hace FRIO o CALOR en ese destino 
	*/
	let lugar;
	lugar=document.getElementById("txtIdDestino").value;
	switch(lugar)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("ahì hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("ahì hace calor");
			break;
	}



}//FIN DE LA FUNCIÓN