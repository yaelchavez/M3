// ============================================
// EJERCICIO 1 - Variables y tipos de dato
// ============================================

let producto = "Hobo Bag R"; // string (texto)
let precio = 45000; // number (número)
let disponible = true; // boolean (verdadero/falso)

console.log(`El ${producto} cuesta ${precio} y su disponibilidad es: ${disponible}.`);


// ============================================
// EJERCICIO 2 - Estructura de control (if/else)
// ============================================

let distancia = 15000; // distancia en metros, se puede cambiar para probar
let medioTransporte;

if (distancia <= 1000) {
    medioTransporte = "pie";
} else if (distancia <= 10000) {
    medioTransporte = "bicicleta";
} else if (distancia <= 30000) {
    medioTransporte = "colectivo";
} else if (distancia <= 100000) {
    medioTransporte = "auto";
} else {
    medioTransporte = "avion";
}

console.log(`Para una distancia de ${distancia} metros, el medio de transporte más adecuado es: ${medioTransporte}.`);


// ============================================
// EJERCICIO 3 - Bucle for
// ============================================

let productosRych = ["Hobo Bag R", "Cartera Duffel RYCH", "Baguette Suede", "Tote RYCH"];

for (let i = 0; i < productosRych.length; i++) {
    console.log(`¡No te olvides de comprar ${productosRych[i]}!`);
}
