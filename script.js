var entradatexto;
var botonencriptar = document.querySelector(".encriptartexto");
var botondesencriptar = document.querySelector(".desencriptartexto");
var resultado = document.querySelector(".textoresultado");
var botoncopiar = document.querySelector(".copiarresultado");
var muneco = document.querySelector(".muneco");
var contenedor = document.querySelector(".contenedorparrafo");

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarrelleno();
    mostrarCopiar();
    obtenertexto();
    resultado.textContent = encriptartexto(entradatexto);
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

function obtenertexto() {
    entradatexto = document.querySelector(".cajatext").value;
}

function encriptartexto(entradatexto) {
    var textoencriptado = "";
    for (let i = 0; i < entradatexto.length; i++) {
        if (entradatexto[i] == "a") {
            textoencriptado = textoencriptado + "zxc";
        } else if (entradatexto[i] == "e") {
            textoencriptado = textoencriptado + "sdf";
        } else if (entradatexto[i] == "i") {
            textoencriptado = textoencriptado + "vbn";
        } else if (entradatexto[i] == "o") {
            textoencriptado = textoencriptado + "jkl";
        } else if (entradatexto[i] == "u") {
            textoencriptado = textoencriptado + "rty";
        } else {
            textoencriptado = textoencriptado + entradatexto[i];
        }
    }
    return textoencriptado;
}