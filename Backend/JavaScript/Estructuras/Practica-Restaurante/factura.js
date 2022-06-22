//Inputs
let consumo = Number(prompt('Ingrese el valor de consumo'));
let desc, datosDesc;

//Process
if (consumo <= 100) {
    datosDesc = '10%';
    desc = consumo * 0.10;
} else if (consumo > 100) {
    datosDesc = '20%';
    desc = consumo * 0.20;
} else {
    datosDesc = '30%';
    desc = consumo * 0.30;
}

let montoDesc = consumo - desc;
let ivg = montoDesc * 0.19;
let totalPago = montoDesc + ivg;


//Outputs
document.write(`<pre>
    Valor de Consumo    : ${consumo}
    Descuento           : ${desc}       |  ${datosDesc}
    Monto con Descuento : ${montoDesc}
    IGV                 : ${ivg}        | 19%
    Total de Pago       : ${totalPago}
</pre>`)