// 1. Deifnir una variable llamada nota
let nota = 83; // Puedes cambiar este valor para probar diferentes casos

// 2. Imprimir la nota en la consola
console.log("La nota del estudiante es:", nota);

// 3. Evaluar la nota usando condiciones

if (nota >= 90) {
    console.log("Resultado: Excelente");
} else if (nota >= 75 && nota <= 89) {
    console.log("Resultado: Bien");
} else if (nota >= 60 && nota <= 74) {
    console.log("Resultado: Suficiente");
} else if (nota < 60) {
    console.log("Resultado: No aprueba");
} else {
    console.log("Nota inválida");
}
