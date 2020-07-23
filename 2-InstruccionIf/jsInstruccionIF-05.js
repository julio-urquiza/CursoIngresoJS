function mostrar()
{
	//condicion que es verdadera para
	//los valores de edad que estan  por debajo o por encima del rango 13,17
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	//pregunto si estoy fuera del rango 
	if(edad <13 || edad >17)
	{
		alert("no es adolescente");
	}
	/*
	pregunto si no estoy fuera del rango 
	if(!(edad >=13 && edad <=17)
	{
		alert("no es un adolescente");
	}
	*/
}//FIN DE LA FUNCIÓN