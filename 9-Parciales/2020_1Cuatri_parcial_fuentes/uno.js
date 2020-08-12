function mostrar()
{	
	let tipo;
	let precio;
	let unidades;
	let unidadesA;
	let masUnidades;
	let unidadesJabon=0;
	let marca;
	let fabricante;
	let fabricanteA;
	let precioAlcoholBarato;
	let flagA=0;
	let flagB=0;

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


		//a
		if(tipo=="alcohol" && (flagA==0 || precioAlcoholBarato>precio))
		{
			precioAlcoholBarato=precio;
			unidadesA=unidades
			fabricanteA=fabricante
			flagA=1;
		}
		
		//b
		if(flagB==0 || masUnidades<unidades)
		{
			masUnidades=unidades;
			flagB=1
		}	
		
		
		//c
		if (tipo=="jabon")
		{
			unidadesJabon+=unidades;
		}

	}
	console.log("a-hay "+unidadesA+" unidades del alcohol mas barato, fabricado por "+fabricanteA);
	console.log("b-");
	console.log("c-hay "+unidadesJabon+" unidades de jabon");
}
