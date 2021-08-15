import AnimalesData from "./Consulta.js";

document.getElementById("animal").addEventListener("change", async () => {
    const  {animales}  = await AnimalesData.getData();
    console.log(animales);

const animalSelected=document.getElementById("animal").value;    
const animalInfo = animales.find((a)=>a.name==animalSelected);
document.getElementById("preview").style.backgroundImage=`url(assets/imgs/${animalInfo.imagen})`;




});

