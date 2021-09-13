//variables primitivas
let nombre = "Hernan"
let apellido = "Gonzales"
let edad = 22
let estado = true
//constantes
//arreglos
const numeros = [2,45,60,85,10]
//objetos
const articulo = {
    descripcion:'Coca cola',
    precio:2,
    stock:1000
}
const notas = [
    {nombre:"Hernan", promedio:95,
        parciales:[
            {primer:[50,45]},
            {segundo:[42,40]}
        ]
    },
    {nombre:"Gonzales", promedio:80,
        parciales:[
            {primer:[35,45]},
            {segundo:[55,15]}
        ]
    },
    {nombre:"Angel", promedio:59,
        parciales:[
            {primer:[26,41]},
            {segundo:[57,50]}
        ]
    }
]
//if (condiciones)
/*if (nombre)
    console.log("nombre:",nombre,"|","edad:",edad)
else
    console.log("Nombre no ingresado: ",nombre)*/

let respuesta = (nombre==undefined) ? "Variable no creada" : nombre
//console.log(respuesta)

//cambios, presentacion
articulo.precio=30
articulo.estado=true
/* console.log("Articulo:",articulo, "Descripcion:", articulo.descripcion, "Precio:", articulo.precio, "Estado:",articulo.estado)
console.log(notas[1])
console.log(notas[1].nombre)
console.log(notas[1].parciales)
console.log(notas[1].parciales[1].segundo)
console.log(notas[1].parciales[1].segundo[1]) */
//switch
dia = 1
switch (dia){
    case 1:
        //console.log("Lunes")
        break
    case 2:
        //console.log("Martes")
        break
    default:
        //console.log("Dia no valido")
        break
}
// try and catch
let x=50, y=15
try {
    if (y == 0)
        throw("La division para 0 no existe")
    let resp = x/y
    //console.log(resp)
}catch(error){
    //console.log(error)
}

//Ciclos
const numeross = [2,45,60,85,10,8]/*
let pos=0
while (pos < numeross.length){
    console.log(pos,numeross[pos])
    pos += 1
}
while (pos < numeross.length && numeross[pos]!=85){
    console.log(pos,numeross[pos])
    pos += 1
}*/
//console.log("todo")
for (let index = 0; index < numeross.length; index++) {
}

for (let index = numeross.length-1; index >= 0; index--) {
}

//funciones
function suma(){
    let n1 =5
    let n2 =20
    //console.log("La suma de",n1, "+",n2,"es igual a:" ,n1+n2)
}
//Presentar funcion - llamar a la funcion
//suma()
function Multiplicar(n1=7,n2=8){
    return n1*n2
}
//console.log(Multiplicar(8,7))

//funcion de const

const sum = () => {
    let n1 =41
    let n2 =42
    //console.log(`La suma: ${n1} + ${n2} es igual a: ${n1+n2}`)
}
//sum()

const Mult = (n1=15,n2=54) => {
    n1 = (n1) ? n1 : 0
    n2 = (n2) ? n2 : 0
    return n1*n2
}
//console.log(Mult(8,8))

function resta(n1=9,n2=7){
    //console.log("La resta de",n1, "-",n2,"es igual a:" ,n1-n2)
}
//resta()
const rest =(n1=10,n2=5)=> n1 - n2

//console.log(rest())

function division(n1=7,n2=2){
    respp= n2 ? n1/n2 : 0
    return n1 / n2
}
const div = (n1=7,n2=2) => n2 ? n1/n2 : 0
//console.log(div(10,5))
//console.log(division(7,2)) 
//templates presentacion
const arreglo = [2,45,60,85,10,20]
for (let index = 0; index < numeross.length; index++) {
    console.log(`${index} [ ${numeross[index]} ]`)
}
