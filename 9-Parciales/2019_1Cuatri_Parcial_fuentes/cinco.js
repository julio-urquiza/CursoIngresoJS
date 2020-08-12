function mostrar()
{
    let continente;
    let dias;
    let descuento;
    let descuentoF;
    let aumentoF;
    let devito=0;
    let merPago=0;
    let efectivo=0;
    let otro=0;
    let modoDePago;
    let pagoFinal;


    dias=prompt("ingresa la cantidada de dias");
    continente=document.getElementById("Marca").value;
    switch(continente)
    {
        case "América":
            alert("seleccionaste america tienes un descuento del 50%");
            descuento=50;
            devito=10
            break;
        case "África":
            alert("seleccionaste africa tienes un descuento del 60%");
            descuento=60;
            merPago=15;
            efectivo=15;
            break;
        case "Europa":
            alert("seleccionaste europa tienes un descuento del 20%");
            descuento=20;
            devito=15;
            merPago=10;
            otro=5;
            break;
        default:
            alert("seleccionaste asia o oceania  tienes un aumento del 20%");
            aumentoF=1.2;
            break;
    }
    modoDePago=prompt("ingresa el tipo de pago(devito, MercadoPago, efectivo o otro)");
    switch(modoDePago)
    {
        case "devito":
            descuento+=devito;
            break;
        case "MercadoPago":
            descuento+=merPago;
            break;
        case "efectivo":
            descuento+=efectivo;
            break;
        case "otro":
            descuento+=otro;
            break;
    }
    descuentoF=(100-descuento)/100;
    if (continente=="Oceania" ||continente=="Asia")
    {
        pagoFinal=(100*dias)*aumentoF;
    }
    else
    {
        pagoFinal=(100*dias)*descuentoF;
    }
    
    alert("tu viaje sale "+pagoFinal);
}
