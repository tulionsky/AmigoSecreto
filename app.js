// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista = [];

function agregarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Debes ingresar un nombre');
        return;
    } else{
        amigosLista.push(document.getElementById('amigo').value);
    } vaciarCampo();
    mostrarAmigos();
    colocarCursor();
}

function vaciarCampo() {
    document.getElementById('amigo').value = '';
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigosLista.forEach((amigo) => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo() {
    let amigoSeleccionado = amigosLista[Math.floor(Math.random() * amigosLista.length)];
    document.getElementById('listaAmigos').innerHTML = `<span style="color: black;">FELICIDADES, TU AMIGO SECRETO ES <span style="color: red;">"${amigoSeleccionado}"<span style="color: black;"><br>PRESIONA EL BOTÓN NUEVAMENTE PARA VER EL SIGUIENTE AMIGO SECRETO`;
    amigosLista.splice(amigosLista.indexOf(amigoSeleccionado), 1);
    mensajeListaVacia();
}

function colocarCursor() {
    document.getElementById('amigo').focus();
}

function mensajeListaVacia() {
    if (amigosLista.length === 0) {
        document.getElementById('listaAmigos').innerHTML = 'NO HAY AMIGOS EN LA LISTA';
    }
}