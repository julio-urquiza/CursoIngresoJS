function mostrar()
{
	let numero;
	let flag;
	
	numero= parseInt(prompt("ingrese el numero"));
	for(let i=1;i<=numero;i++)
	{
		flag=0;
		for(let a=1;a<=i;a++)
		{
			
			if(i%a==0 )
			{
				flag++;
			}
		}
		if(flag<=2)
		{
		console.log("este "+ i);
		}
	}// console.log("hay "+contador+" numeros divisores");

}//FIN DE LA FUNCIÓN