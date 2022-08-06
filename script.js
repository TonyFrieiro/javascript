function Persona (usuario, clave ,){
    this.usuario = usuario;
    this.clave = clave;
}

let salir = 0;

const array = [];

const boton = document.getElementById("boton")


boton.addEventListener("click",()=>{
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("password").value;

    const persona1 = new Persona (usuario, clave);

    array.push(persona1)

    console.log(array)
    if ((usuario == "tony")&&(clave == "1234")){
        let formulario = document.getElementById("formulario");
    
        formulario.remove();
    
        let bienvenido = document.createElement("p")
        bienvenido.innerHTML = "<h2> Bienvenido a la pagina " + usuario + " , lograste iniciar sesion </h2>"
        document.body.append(bienvenido);
    }
    
})



// function saliendo(){
//     salir = prompt("desea salir escriba 1")
// }

// while (salir != 1){
//     //let usuario = prompt ("ingrese el usuario")
//     //console.log(usuario)
//     //let clave = prompt ("ingrese la clave")
//     //console.log(clave)

//     let usuario = document.getElementById("usuario");
//     let clave = document.getElementById("password");


    
//     const persona1 = new Persona (usuario, clave);
    
//     array.push(persona1)
    
//     console.log(array)
//     console.log(array.toString());
//     console.log(array.length);
//     console.log(Object.keys(array))

//     //saliendo();
// }



// let usuario = document.getElementById("usuario");
// let clave = document.getElementById("password");

// const persona1 = new Persona (usuario, clave);

// array.push(persona1)

// console.log(array)
// console.log(array.toString());
// console.log(array.length);
// console.log(Object.keys(array))


// function ejecutar(Persona){
//     let usuario = document.getElementById("usuario");
//     let clave = document.getElementById("password");

//     const persona1 = new Persona (usuario, clave);

//     array.push(persona1)

//     console.log(array)
// }


