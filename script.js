let contador = 1;
let pais
let nombre
let apellido
let edad
let hobbie
do {
    if(contador=1)
        nombre = prompt("cual es su nombre")
        contador++;
    if(contador=2)
        apellido = prompt("cual es su apellido")
        contador++;
    if(contador=3)
        edad = prompt("cual es su edad")
        contador++
    if(contador=4)
        pais = prompt("cual es su pais de origen")
        contador++;
    if(contador=5)
        hobbie = prompt("cual es su hobbie")
        contador++;

} while (contador <= 5)

console.log(contador + "proceso terminado");