/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let genero;
	genero = prompt("indique su genero (f ó m)").toLowerCase;
	// caso 1 cuando el dato sea invalido
	// cuando sea distinto de F o M
	// while(!(genero=="f"||genero=="m"))
	// caso 2 cuando el dato no sea valido
	// cuando genero no se iagul a f o m
	while(genero !="f" && genero !="m")
	{
		genero=prompt("invalido, ingrese uno valido").toLowerCase;
	}
	alert("puede continuar");
	document.getElementById("txtIdSexo").value=genero;
}//FIN DE LA FUNCIÓN