// 1. Declarar el arreglo de frutas
let frutas = ["🍎", "🍌", "🍎", "🍓", "🍌", "🍎", "🍇"];

// 2. Crear un objeto vacio para contar
let conteo = {};

// 3. Recorrer el arreglo
for (let i = 0; i < frutas.length; i++) {

    let frutaActual = frutas[i];

    // Si la fruta ya existe en el objeto, sumar 1
    if (conteo[frutaActual]) {
        conteo[frutaActual]++;

    } else {
        // Si no existe, empezar a contar desde 1
        conteo[frutaActual] = 1;
    
    }
}

// 4. Imprimir el resultado
console.log("Cantidad de cada fruta:");
console.log(conteo);
