const travels = [];  // Esto es un array

const calculatecost = (destination, transport) => {
    
let basecost = 0;  // Esto es una variable

if (transport === "plane") {  // Esto es una condición
    basecost = 700;
} else if (transport === "train") {
    basecost = 500;
} else {
    basecost = 300;
}

return basecost;   // Esto es lo que me regresa la función

};

const registerdestination = (destination, date, transport) => {  // Esto es una función, la que recibe los datos

const cost = calculatecost(destination, transport);   // Esto es una funcion dentor de otra funcion

const travel = { destination, date, transport, cost };

travels.push(travel);

};

const showitinerary = () => {

    console.log("----- TRAVEL ITINERARY -----");

    for (let travel of travels) {
    console.log(`Destination: ${travel.destination}`);
    console.log(`Date: ${travel.date}`);
    console.log(`Transport: ${travel.transport}`);
    console.log(`Estimated Cost: $${travel.cost}`);
    console.log('-------------------------');
    }

};

registerdestination("Madrid", "2024-07-15", "plane");
registerdestination("Iceland", "2024-08-20", "bus");
registerdestination("Greece", "2024-09-10", "train");
registerdestination("Italy", "2024-10-05", "plane");
registerdestination("Portugal", "2024-11-25", "train");
registerdestination("France", "2024-12-15", "bus");

showitinerary();   // Esta funcion muestra los travels guardados



