// ============================================
// EJERCICIO 1 - Función que calcula un promedio
// ============================================

function calcularPromedio() {
    // Tomamos los valores que el usuario escribió en los inputs
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    let promedio = (nota1 + nota2) / 2;

    let materia = "Historia";

    // Mostramos el resultado en el <p id="resultadoPromedio">
    document.getElementById("resultadoPromedio").innerHTML =
        `El promedio de ${materia} es: ${promedio}`;
}


// ============================================
// EJERCICIO 2 - Contador de caracteres (DOM + eventos)
// ============================================

// Buscamos los elementos del HTML que vamos a usar
let textarea = document.getElementById("textoUsuario");
let contador = document.getElementById("contador");

// Escuchamos el evento "input" (se dispara cada vez que el usuario escribe o borra algo)
textarea.addEventListener("input", function () {
    let cantidadCaracteres = textarea.value.length;
    contador.innerHTML = `Caracteres: ${cantidadCaracteres}`;
});
