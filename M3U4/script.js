// ============================================
// EJERCICIO 1 - Métodos de array (filter)
// ============================================

const alumnos = [
    { nombre: 'Juan Gomez', nota: 7 },
    { nombre: 'Pedro Rodriguez', nota: 4 },
    { nombre: 'Roxana García', nota: 8 },
    { nombre: 'Luciano Lopez', nota: 5 },
    { nombre: 'Fernanda Gimenez', nota: 6 },
    { nombre: 'Florencia Martinez', nota: 10 },
    { nombre: 'Raul Sanchez', nota: 7 },
    { nombre: 'Sandra Figueroa', nota: 8 }
];

// filter() recorre el array y se queda solo con los elementos
// que cumplen la condición que le pasamos (nota >= 7)
const alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7);

console.log("Alumnos aprobados:");
console.log(alumnosAprobados);


// ============================================
// EJERCICIO 2 - Desestructuración de objetos
// ============================================

const producto = {
    id: 123,
    nombre: "Auriculares inalámbricos",
    precio: 120000,
    stock: 25,
    categoria: "Electrónica"
};

// a) Desestructuración: creamos 3 variables sacando directamente
// esas 3 propiedades del objeto "producto", en un solo paso
const { nombre, precio, stock } = producto;

// b) Mostramos las variables en la consola usando interpolación de strings
console.log(`Producto: ${nombre} - Precio: $${precio} - Stock disponible: ${stock} unidades`);
