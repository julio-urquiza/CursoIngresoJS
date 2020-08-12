function mostrar()
{
  let tipo;
  let tipoMasCaro;
  let cantidad;
  let cantidadF=0;
  let importe;
  let importeF=0;
  let importeBruto;
  let masCaro;
  let descuento;
  let seguir;
  let flag=0;
   do
   {
     
      tipo= prompt("ingrese tipo de bolsas").toLowerCase();
      while(!(tipo=="arena" || tipo=="cal" || tipo=="cemento"))
      {
        tipo= prompt("ERROR, ingrese el tipo de bolsas valido (arena, cal ò cemento)").toLowerCase();
      }
      console.log(tipo);

      
      cantidad= parseInt(prompt("ingrese la cantidad deseada"));
      while(!(cantidad>=0))
      {
        cantidad= parseInt(prompt("ERROR, ingrese la cantidad deseada (solo numeros)"));
       
      } 
      console.log(cantidad);
      cantidadF+=cantidad;
      console.log(cantidadF);
      if(cantidadF>=10 && cantidadF<30)
        {
          descuento=.85;
        }
        else if(cantidad>=30)
        {
          descuento=.75;
        }
     

      importe= parseInt(prompt("ingrese el importe (solo numeros)"));
      while(!(importe>=0))  // while( importe<0 || !(isNaN(importe)) )
      {
        importe= parseInt(prompt("ERROR, ingrese el importe (solo numeros)"));
      }
      console.log(importe);
      importeF+=importe;

      if(flag=0)
      {
        masCaro=importe;
        flag=1;
      }
      else(masCaro<=importe)
      {
        masCaro=importe;
        tipoMasCaro=tipo;
      }


      seguir= prompt("¿desea sguir comprando?(si ò no)").toLowerCase();
      while(!(seguir=="si"||seguir=="no"))
      {
        seguir= prompt("ERROR,¿desea continuar comprando?(si ò no)").toLowerCase();
      }
   }while(seguir=="si");
   console.log("a- el precio sin descuento es "+importeF);
   importeBruto=importeF*descuento
   console.log("b- el precio bruto es "+importeBruto);
   console.log("c- la cantidad de bolsas es "+cantidadF);
   console.log("d- el mas caro es "+ tipoMasCaro);
}
