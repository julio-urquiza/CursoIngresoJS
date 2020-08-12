/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	let flag=0;

	do
	{
		if(flag==0)
		{
			clave = prompt("ingrese el número clave.");
			flag=1;
		}
		else
		{
			clave=prompt("clave invalida, ingrese otra");
		}
	}while(clave!="utn750")
	alert("la clave es correcta");
	/*
	clave = prompt("ingrese el número clave.");
	while(clave!="utn750")
	{
		clave=prompt("clave invalida, ingrese otra");
	}
	alert("la clave es correcta");
	*/

}//FIN DE LA FUNCIÓN
