/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
*/
function ComenzarIngreso () 
{
	//definicion de variables
	let Edad;
	let Genero;
	let EstadoCivil;
	let Sueldo;
	let Legajo;
	let nacionalidad;
	
	
	
	// A.	Edad, entre 18 y 90 años inclusive.
	Edad = prompt("Indique su Edad");
	while(!(Edad>=18 && Edad<=90)) //while()
	{
		Edad=prompt("Edad invalida, ingrese una valida");
	}
	alert("puede continuar");
	document.getElementById("txtIdEdad").value=Edad;
	
	
	// B.	Sexo, “M” para masculino y “F” para femenino
	Genero = prompt("Indique su género (F para femenino y M para masculino)");
	while(!(Genero=="f" || Genero=="m")) //while()
	{
		Genero=prompt("genero invalido, ingrese F ó M");
	}
	alert("puede continuar");
	document.getElementById("txtIdSexo").value=Genero;
	
	
	// C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	EstadoCivil = prompt("Indique su Estado Civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");
	while(!(EstadoCivil==1 || EstadoCivil==2|| EstadoCivil==3 ||EstadoCivil==4)) //while()
	{
		EstadoCivil=prompt(" Estado Civil invalido, indique:(1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");
	}
	alert("puede continuar");
	document.getElementById("txtIdEstadoCivil").value=EstadoCivil;
	
	
	// D.	Sueldo bruto, no menor a 8000.
	Sueldo=prompt("indique su sueldo (no menor a 8000)");
	while(!(Sueldo>8000)) //while()
	{
		Sueldo=prompt("sueldo invalido, ingrese solo numeros (no menor a 8000)");
	}
	alert("puede continuar");
	document.getElementById("txtIdSueldo").value=Sueldo;
	
	
	// E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	Legajo=prompt("indique su legajo (numérico de 4 cifras, sin ceros a la izquierda)");
	while(!(Legajo>999 && Legajo<10000)) //while()
	{
		Legajo=prompt("legajo invalido,ingrese uno valido (numérico de 4 cifras, sin ceros a la izquierda)");
	}
	alert("puede continuar");
	document.getElementById("txtIdLegajo").value=Legajo;
	
	
	// F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	nacionalidad=prompt("indique su nacionalidad ( “A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
	while(!(nacionalidad=="a"||nacionalidad=="e"||nacionalidad=="n")) //while()
	{
		nacionalidad=prompt("nacionalidad invalida,ingrese una valida ( “A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");
	}
	alert("puede continuar");
	document.getElementById("txtIdNacionalidad").value=nacionalidad;






}
