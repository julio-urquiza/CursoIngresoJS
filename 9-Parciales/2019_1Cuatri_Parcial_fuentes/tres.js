function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;
    precio=parseInt(prompt("ingrese el precio"));
    descuento=parseInt(prompt("imgrese el porcentaje descuento(solo numeros)"));
    precioFinal=precio*(descuento/100);
    document.getElementById("elPrecioFinal").value=precioFinal
}
