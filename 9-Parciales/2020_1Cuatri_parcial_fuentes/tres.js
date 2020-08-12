function mostrar()
{
	let nombre;
	let perMTemp;
	let edad;
	let sumaEdad=0;
	let sexo;
	let Ecivil;
	let temperatura;
	let mayorTemperatura=0;
	let contViudosMayores=0;
	let contSoltViud=0;
	let contTerceraE=0;
	let contSolteros=0;
	let promedioSolteros;

	do{
		nombre= prompt("ingrese su nombre").toLowerCase();
		while(!(isNaN(nombre)) )
		{
			nombre= prompt("ERROR, ingrese su nombre por favor").toLowerCase();
		}
		

		edad= parseInt(prompt("ingrese su edad"));
		while(!(edad>0))
		{
			edad= parseInt(prompt("ERROR, ingrese una edad vàlida"));
		}
	

		sexo=prompt("ingrese su sexo(F ò M)").toLowerCase();
		while(!(sexo=="f"||sexo=="m"))
		{
			sexo=prompt("ERROR, ingrese su sexo(F ò M)").toLowerCase();
		}

		
		Ecivil=prompt("indique su estado civil(soltero, viudo ò casado)").toLowerCase();
		while(!(Ecivil=="soltero" || Ecivil=="viudo" || Ecivil=="casado"))
		{
			Ecivil=prompt("ERROR, indique su estado civil(soltero, viudo ò casado)").toLowerCase();
		}
		

		temperatura= parseInt(prompt("cual es su temperatura"));
		while(!(temperatura>=35 && temperatura<=39))
		{
			temperatura= parseInt(prompt("ERROR, ingrese una temperatura vàlida"));
		}

	
		if(mayorTemperatura<temperatura)
		{
			mayorTemperatura=temperatura;
			perMTemp=nombre;
		}
		if(Ecivil=="viudo" && edad>=18)
		{
			contViudosMayores++;
		}
		if(Ecivil== "soltero" || Ecivil=="viudo")
		{
			contSoltViud++;
		}
		if(edad>=60 && temperatura>30)
		{
			contTerceraE++;
		}
		if(sexo=="m" && Ecivil=="soltero")
		{
			contSolteros++;
			sumaEdad++;
		}

		
			
		seguir= prompt("¿desea sguir?(si ò no)").toLowerCase();
		while(!(seguir=="si"||seguir=="no"))
		{
		  seguir= prompt("ERROR,¿desea continuar?(si ò no)").toLowerCase();
		}
	}while(seguir=="si");


	console.log("a-la persona con mas temperatura es "+perMTemp);
	console.log("b-hay "+contViudosMayores+" mayores viudos");
	console.log("c-hay "+contSoltViud+" solteros y viudos");
	console.log("d-hay "+contTerceraE+" personas de la tercera edad con 38 grados" );
	promedioSolteros=sumaEdad/contSolteros;
	console.log("e-El promedio de edad entre los hombres solteros es "+promedioSolteros);


}
