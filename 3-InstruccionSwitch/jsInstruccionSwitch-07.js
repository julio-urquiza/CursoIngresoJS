function mostrar()
{
	/*
	Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste 
	*/
	let lugar;
	lugar=document.getElementById("txtIdDestino").value;
	switch(lugar)
	{
		case "Bariloche":
			alert("queda para el sur");
			break;
		case "Cataratas":
			alert("queda para el norte");
			break;
		case "Mar del plata":
			alert("queda para el oeste");
			break;
		case "Ushuaia":
			alert("queda para el este");
			break;
	}

}//FIN DE LA FUNCIÓN