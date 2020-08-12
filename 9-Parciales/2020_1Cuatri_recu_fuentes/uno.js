
function mostrar()
{
	let tipo;
	let precio;
	let precioJabonMasCaro;
	let unidades;
	let unidadesA
	let unidadesBarbijos;
	let unidadesMas
	let marca;
	let fabricante;
	let fabricanteA;
	let flagA=0;
	let flagB=0;
	let promedioCompra;


	for(let i=0;i<3;i++)
	{
		tipo=prompt("ingrese el tipo de producto (barbijo, jabon ò alcohol)").toLowerCase();
		while(!(tipo=="barbijo" || tipo=="jabon" || tipo=="alcohol" ))
		{
			tipo=prompt("ERROR, ingrese el tipo de producto Vàlido (barbijo, jabon ò alcohol)").toLowerCase();
		}


		precio=parseInt(prompt("ingrese el precio(de 100 a 300 pesos)"));
		while(!(precio>=100 && precio<=300))
		{
			precio=parseInt(prompt("ERROR, ingrese un precio vàlido(de 100 a 300 pesos)"));
		}


		unidades=parseInt(prompt("ingrese cuantos desea llevar(hasta 1000 unidades)"));
		while(!(unidades>=0 &&unidades<=1000))
		{
			unidades=parseInt(prompt("ingrese cuantos desea llevar(hasta 1000 unidades)"));
		}


		marca=prompt("ingrese la marca");


		fabricante=prompt("ingrese el fabricante");
		
	
		//a)
		if(tipo=="jabon" && (flagA==0 || precioJabonMasCaro<precio))
		{
			precioJabonMasCaro=precio;
			unidadesA=unidades;
			fabricanteA=fabricante;
			flag=1;
		}
		//b)
		if(flagB==0 || unidadesMas<unidades)
		{
			unidadesMas=unidades;
			promedioCompra=precio/unidades;
			flagB=1;
		}
		//c)
		if(tipo=="barbijo")
		{
			unidadesBarbijos+=unidades;
		}
	}
	console.log("a-del jabon mas cario hay "+unidadesA+" unidades producido por "+fabricanteA);
	console.log("b-el promedio de compra del produto con mas unidades es "+promedioCompra);
	console.log("c-hay "+unidadesBarbijos+" unidades de barvijos en total");

}
