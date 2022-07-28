
let salir = prompt("Para salir escriba s")
edad = 0;
contador = 0

do{
    edad2 = parseInt(prompt("Ingrese edad"))
    
    edad = edad + edad2;
    contador++;
    salir = prompt("Para dejar de ingresar edades escriba s")
}while( salir != "s")
promedio = edad/contador;
alert("Promedio de edades : "+promedio + " años")