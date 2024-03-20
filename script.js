var entradatexto;
var botonencriptar = document.querySelector(".encriptartexto");
var botondesencriptar = document.querySelector(".desencriptartexto");
var resultado = document.querySelector(".textoresultado");
var botoncopiar = document.querySelector(".copiarresultado");
var muneco = document.querySelector(".muneco");
var contenedor = document.querySelector(".contenedorparrafo");

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;
botoncopiar.onclick = copiar;

function encriptar() {
    validarEntrada();
    ocultarrelleno();
    mostrarCopiar();
    obtenertexto();
    resultado.textContent = encriptartexto(entradatexto);
    botoncopiar.textContent = "Copiar";
}

function desencriptar() {
    validarEntrada();
    ocultarrelleno();
    mostrarCopiar();
    obtenertexto();
    resultado.textContent = desencriptartexto(entradatexto);
    botoncopiar.textContent = "Copiar";
}
function copiar() {
    let copiar = document.querySelector(".textoresultado");
    navigator.clipboard.writeText(copiar.textContent);
    botoncopiar.textContent = "Copiado";
}
function mostrarCopiar() {
    botoncopiar.removeAttribute('hidden');
}
function validarEntrada() {
    obtenertexto();
    var textoValido = /^[a-z\s]+$/;
    if (textoValido.test(entradatexto)) {
        alert("Texto encriptado!");
    } else {
        alert("Ingrese texto en minúsculas, sin acentos y sin caracteres especiales.");
    }
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

function desencriptartexto(entradatexto) {
    var textodesencriptado = "";
    for (let i = 0; i < entradatexto.length; i++) {
        if (entradatexto[i] == "z" && entradatexto[i+1] == "x" && entradatexto[i+2] == "c") {
            textodesencriptado = textodesencriptado + "a";
            i = i + 2;
        } else if (entradatexto[i] == "s" && entradatexto[i+1] == "d" && entradatexto[i+2] == "f") {
            textodesencriptado = textodesencriptado + "e";
            i = i + 2;
        } else if (entradatexto[i] == "v" && entradatexto[i+1] == "b" && entradatexto[i+2] == "n") {
            textodesencriptado = textodesencriptado + "i";
            i = i + 2;
        } else if (entradatexto[i] == "j" && entradatexto[i+1] == "k" && entradatexto[i+2] == "l") {
            textodesencriptado = textodesencriptado + "o";
            i = i + 2;
        } else if (entradatexto[i] == "r" && entradatexto[i+1] == "t" && entradatexto[i+2] == "y") {
            textodesencriptado = textodesencriptado + "u";    
            i = i + 2;
        } else {
            textodesencriptado = textodesencriptado + entradatexto[i];
        }
    }
    return textodesencriptado;
}