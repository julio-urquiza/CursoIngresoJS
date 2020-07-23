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
			alert( "Este mes no tiene más de 29 días.");
			break;
		/*
		case "Enero":          para esto esta el default
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 o más días");
			break;
		*/
		default:
			alert("Este mes tiene 30 o más días");
			break;
	}
	


}//FIN DE LA FUNCIÓN