function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if(edad <= 18)
	{
		alert("es un adolescente");
	}
	else
	{
		alert("es un adulto");
	}

}//FIN DE LA FUNCIÓN