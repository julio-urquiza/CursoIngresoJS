function mostrar()
{
	let numero;
	let contador=0;
	numero= parseInt(prompt("ingrese el numero"));
	for(let i=1;i<=numero;i++)
	{
		if(i%2==0)
		{
			contador++;
			console.log(i);
		}
	}
	console.log("hay "+contador+" numero pares");



}//FIN DE LA FUNCIÓN