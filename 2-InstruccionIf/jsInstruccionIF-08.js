function mostrar()
{
	//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA, 
	//pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
	let estado;
	let edad;

	estado = document.getElementById("estadoCivil").value;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 18 && estado =="Soltero")
	{
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN