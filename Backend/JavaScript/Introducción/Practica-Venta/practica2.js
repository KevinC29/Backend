//Inputs
let vv, igv = 0, pv = 0;

//Process
vv = parseFloat(prompt('Ingrese el valor de la venta'));
igv = vv * 0.19;
pv = vv + igv;

//Outputs
/*
document.write('Valor de la venta es: ', vv, '<br>')
document.write('IGV: ', igv, '<br>')
document.write('Precio de Venta: ', pv, '<br>')*/

document.write(
`<pre>  Valor de la Venta   : ${vv} <br>
        IGV                 : ${igv} <br>
        Precio de Venta     : ${pv}
</pre>`); //alt+96 ``

console.log(`Valor de la Venta: ${vv} \n IGV: ${igv} \n Precio de Venta: ${pv}`); //Para la consola
