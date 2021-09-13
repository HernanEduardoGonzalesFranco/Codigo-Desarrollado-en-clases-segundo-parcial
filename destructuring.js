const datos = {
    imagen: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
    correo: 'hgonzalesf@unemi.edu.ec'
}
console.log(datos)
//Primera forma
const mostrarDatos = (avatar) =>
    `
        <img src=${avatar.imagen} alt=${avatar.correo}/>        
    `
//Segunda forma
const mostrarDatos1 = (avatar) =>{
    const {imagen,correo} = avatar
    return(
        `
        <img src=${imagen} alt=${correo}/>        
        `
    )
}
//Tercera forma
const mostrarDatos2 = ({imagen:img,correo}) =>
    `
    <img src=${img} alt=${correo}/>        
    `

const $root = document.getElementById("root")
$root.innerHTML = "<h3>Destructurando</h3>"
$root.innerHTML += mostrarDatos2(datos)