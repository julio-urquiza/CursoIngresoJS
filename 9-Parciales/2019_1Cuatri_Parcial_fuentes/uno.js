
function mostrar()
{
    let medida;
    let perimetro;

    medida=parseInt(prompt("ingrese la medida de si triangulo equilatero y le daremos el perimetro"));
    while(!(medida>0))
    {
        medida=parseInt(prompt("ERROR, ingrese la medida en numeros(1,2,3...)"));
    }
    perimetro=medida*3;
    alert(perimetro);



}
