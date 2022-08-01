function Persona (usuario, clave ,){
    this.usuario = usuario;
    this.clave = clave;
}

let salir = 0;

const array = [];

while (salir != 1){
    let usuario = prompt ("ingrese el usuario")
    console.log(usuario)
    let clave = prompt ("ingrese la clave")
    console.log(clave)

    const persona1 = new Persona (usuario, clave);

    array.push(persona1)

    console.log(array.toString());
    console.log(array.length);

    salir = prompt("desea salir escriba 1")
}


