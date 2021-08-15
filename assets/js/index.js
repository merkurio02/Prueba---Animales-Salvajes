import AnimalesData from "./Consulta.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Clases/Animales.js";

let listaAnimales = [];



document.getElementById("btnRegistrar").addEventListener("click",async ()  => {
    
    const { animales } = await AnimalesData.getData();

    const nombre = document.getElementById("animal").value;
    const data = animales.find((a) => a.name == nombre);
    const edad = document.getElementById("edad").value;
    const img = data.imagen;
    const comentarios = document.getElementById("comentarios").value;
    const sonido = data.sonido;

    let nuevoAnimal;

    if(nombre=="Leon"){
        nuevoAnimal= new Leon(nombre, edad, img, comentarios, sonido);

    }else if(nombre=="Lobo"){
        nuevoAnimal= new Lobo(nombre, edad, img, comentarios, sonido);
    }else if(nombre=="Oso"){
        nuevoAnimal= new Oso(nombre, edad, img, comentarios, sonido);
    }else if(nombre=="Serpiente"){
        nuevoAnimal= new Serpiente(nombre, edad, img, comentarios, sonido);
    }else {
        //(nombre=="Aguila")
        nuevoAnimal= new Aguila(nombre, edad, img, comentarios, sonido);
    }

    listaAnimales.push(nuevoAnimal);

    reloadTable();
});


const reloadTable=()=>{
    const animalesTemplate  =document.getElementById("Animales");

    animalesTemplate.innerHTML="";

    listaAnimales.forEach((p,i)=>{
        animalesTemplate.innerHTML+=
        `<div class="card bg-dark text-light col-6 col-md-4 col-lg-3 border" >
        <img src="assets/imgs/${p.Img}" class="card-img-top" alt="...">
        <div class="card-body">
        <audio >
        <source src="assets/sounds/${p.Sonido}" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
      
      <i class="fas fa-play btn btn-light"></i>
       </div>
      </div>`

    })
}