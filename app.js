// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let amigos = [];
let sorteado = []
let cantidadDeAmigos = amigos.length;

//funcion para agregar amigos
//agarrar valor de la caja
//validar que no sea un vacío
//limpiar la caja luego de que el valo halla sido añadido
function agregarAmigo() {
    if (document.querySelector("#amigo").value =="") {
        alert("Escribe el nombre de un amigo, no puede estar vacía esta casilla!");
    } else {
        amigos.push(document.getElementById("amigo").value);
    console.log(amigos);
    limpiarCaja();
    actualizarListaAmigos();
    return;
    }
    
}

//crea una funcion que actualice la lista de amigos

function actualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
   listaAmigos.innerHTML = "";
       for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//función para limpiar la caja
function limpiarCaja(){
    document.querySelector('#amigo').value = "";
}

//función para sortear los amigos
/*Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.*/

function sortearAmigo() {
    if (amigos == '') {
        alert('Debes agregar amigos antes de hacer el sorteo')
    } else {
        let sorteado = Math.floor(Math.random()*amigos.length);
        console.log(sorteado);
        let ganador = amigos[sorteado];
        console.log(ganador);
        document.getElementById('resultado').innerHTML = ganador;
        // let sorteo = document.getElementById('resultado');
        // let li = document.createElement('li');
        // li.innerHTML = ganador;
        // resultado.appendChild(li);
    }
}

console.log(amigos);
