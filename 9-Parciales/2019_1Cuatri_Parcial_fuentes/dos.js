function mostrar()
{
    let nombre1;
    let nombre2;
    let peso1;
    let peso2;
    let sumaPesos;
    let promedio;

    nombre1=prompt("ingrese su nombre");
    nombre2=prompt("ingrese el nombre de su pareja");
    peso1=parseInt(prompt("ingrese su peso"));
    peso2=parseInt(prompt("ingrese el peso de su pareja"));
    sumaPesos=peso2+peso1;
    promedio=sumaPesos/2;


    alert(`ustedes se llaman  xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx `);
}
