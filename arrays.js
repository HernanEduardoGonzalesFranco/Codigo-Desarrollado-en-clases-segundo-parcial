const numeros = [40,80,40,40,99]
let alumnos = [
    {nombre:"Angel",n1:15,n2:40},
    {nombre:"Hernan",n1:25,n2:35},
    {nombre:"Eduardo",n1:18,n2:28},
    {nombre:"Alexandra",n1:41,n2:49},
    {nombre:"Alberto",n1:27,n2:50},
    {nombre:"Geovany",n1:31,n2:24}
]
console.clear()
//console.log(numeros,alumnos)

for (let index = 0; index < alumnos.length; index++)
    //console.log("alumnos -->",alumnos[index].nombre)

alumnos.forEach(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});
alumnos.map(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});

const item = alumnos.map(alumno => {
    prom = (alumno.n1+alumno.n2)/2
    return [alumno.nombre,prom]
});

//console.log(item)

const items = alumnos.filter(alumno => alumno.nombre!="Hernan");

alumnos=[...items]
console.log(items)