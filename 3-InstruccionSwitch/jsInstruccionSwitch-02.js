function mostrar()
{
    /*
    al seleccionar un mes informar.
    si estamos en Invierno: "Abrigate que hace frio."
    si aún no llego el Invierno: "Falta para el invierno."
    si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
    ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. 
    */
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
        case "Enero": 
		case "Enero": 
		case "Marzo":
		case "Enero": 
        case "Enero": 
		case "Enero": 
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
	}



}//FIN DE LA FUNCIÓN