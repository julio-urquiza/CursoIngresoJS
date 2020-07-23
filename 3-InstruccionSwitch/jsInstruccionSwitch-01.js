function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero": 
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
	}
//solo se puede usar el ==, no se pueden usar los demas operadores

/*
	if(mes =="Enero")
	{
		alert("que comiences bien el año!!!.");
	}
	else if(mes =="Marzo")
	{
		alert("a clases!!!.");
	}
	else if(mes =="Julio")
	{
		alert("se vienen las vacaciones!!!.");
	}
	else if(mes =="Diciembre")
	{
		alert("Felices fiesta!!!.");
	}
*/

}//FIN DE LA FUNCIÓN