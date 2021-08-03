const imagenes = document.querySelectorAll(".img-galeria")
const imagenesLight = document.querySelector(".agregar-imagen")
const ContenedorLight = document.querySelector(".imagen-light")
const hamburguer1 = document.querySelector(".hamburguer")


imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute("src"))
    })
})

const aparecerImagen =(imagen)=>{
    imagenesLight.src = imagen
    ContenedorLight.classList.toggle("show")
    imagenesLight.classList.toggle("showImage")
    hamburguer1.style.opacity = "0"
    
}

ContenedorLight.addEventListener("click", (e)=>{
    
if(e.target != imagenesLight){
    ContenedorLight.classList.toggle("show")
    imagenesLight.classList.toggle("showImage")
    hamburguer1.style.opacity = "1"
}
})
