var botonencriptar = document.querySelector(".encriptartexto")
var botondesencriptar = document.querySelector(".desencriptartexto")
var resultado = document.querySelector(".textoresultado")
var botoncopiar = document.querySelector(".copiarresultado")
var muneco = document.querySelector(".muneco")
var contenedor = document.querySelector(".contenedorparrafo")

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarrelleno();
    mostrarCopiar();
    botoncopiar.setAttribute('value', 'Copiar');
}

function desencriptar() {
    ocultarrelleno();
    mostrarCopiar();
    botoncopiar.setAttribute('value', 'Copiar');
}

function mostrarCopiar() {
    botoncopiar.removeAttribute('hidden');
}
function ocultarrelleno() {
    muneco.setAttribute('hidden', 'true');
    contenedor.setAttribute('hidden', 'true');
}