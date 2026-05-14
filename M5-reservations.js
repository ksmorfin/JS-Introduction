// Simulamos mesas disponibles en el restaurante
let availableTables = 5;

/**
 * 1. Verificar disponibilidad de mesas
 */
function checkAvailability(requestedTables) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (requestedTables <= availableTables) {
                resolve(`Available Tables: ${availableTables}`);
            } else {
                reject(`Error: There are not enough available tables. Available: ${availableTables}`);
            }
        }, 1000);
    });
}

/**
 * 2. Simular envío de correo de confirmación
 */
function sendReservationConfirmation(clientName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3; // 70% éxito, 30% error

            if (exito) {
                resolve(`E-mail sent to ${clientName} ✔️`);
            } else {
                reject(`Error: The email could not be sent to ${clientName} ❌`);
            }
        }, 1000);
    });
}

/**
 * 3. Función principal con async/await
 */
async function makeReservation(clientName, requestedTables) {
    try {
        console.log(`Processing reservation for ${clientName}...`);

        const availability = await checkAvailability(requestedTables);
        console.log(availability);

        // Reducimos mesas disponibles si se confirma
        availableTables -= requestedTables;
        const confirmation = await sendReservationConfirmation(clientName);
        console.log(confirmation);

        console.log("🎉 Reservation successfully completed");

    } catch (error) {
        console.error(error);
    }
}

/**
 * 4. Pruebas
 */
makeReservation("Ana", 2);
makeReservation("Luis", 4);
makeReservation("María", 1);