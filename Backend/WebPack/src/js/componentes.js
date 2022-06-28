//import '../css/estilos.css'
import wplogo from '../img/logo.jpg'

export const saludar = (nombre)=>{
    console.log('Creando Etiqueta H1');
    const h2 = document.createElement('h2');
    h2.innerText = `Hola ${nombre}`;

    document.body.append(h2);

    const img = document.createElement('img');
    img.src = wplogo;
    document.body.append(img);
}