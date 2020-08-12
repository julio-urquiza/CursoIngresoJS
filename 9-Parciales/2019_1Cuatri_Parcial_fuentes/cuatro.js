function mostrar()
{
    let numero1;
    let numero2;
    let resta;
    numero1=prompt("ingrese un numero");
    numero2=prompt("ingrese otro numero");
    if (numero2==numero1)
    {
        alert(numero1+numero2);
        alert("son iguales");
    }
    else if (numero1>numero2)
    {
        resta=numero1-numero2;
        alert(resta);
        alert("numero1>numero2");

    }
    else
    {
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        alert(numero1+numero2);
        alert("numero1<numero2");

    }
}
