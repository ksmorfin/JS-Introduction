// Seleccionar elementos del DOM
const addorderbtn = document.getElementById("addorderbtn");
const ordersContainer = document.getElementById("orders");

// Variable para generar IDs únicos
let orderId = 1;


// Función para crear un nuevo pedido
function createOrder() {

    // Crear el objeto pedido
    const order = {
        id: orderId,
        status: "In Progress"
    };

    // Mostrar el pedido en pantalla
    renderOrder(order);

    // Procesar el pedido de manera asincrónica
    processOrder(order);

    // Incrementar el ID
    orderId++;
}


// Función para mostrar pedidos en la interfaz
function renderOrder(order) {

    // Crear un div
    const orderElement = document.createElement("div");

    // Agregar clases
    orderElement.classList.add("order");

    // Agregar un ID al elemento
    orderElement.id = `order-${order.id}`;

    // Contenido HTML
    orderElement.innerHTML = `
    <h3>Order #${order.id}</h3>
    <p class="processing">
    Status: ${order.status}
    </p>
`;

    // Insertar en el contenedor
    ordersContainer.appendChild(orderElement);
}


// Función que simula la preparación
function prepareOrder(order) {

    // Promise para manejar asincronía
    return new Promise((resolve) => {

        // Tiempo aleatorio entre 2 y 5 segundos
        const preparationTime = Math.floor(Math.random() * 4000) + 2000;

        // Simulación de preparacion
        setTimeout(() => {

            // Cambia el estado
            order.status = "Completed";

            // Finaliza Promise
            resolve(order);

        }, preparationTime);

    });
}


// Función async para procesar pedido
async function processOrder(order) {

    // Esperar la preparación
    const completedOrder = await prepareOrder(order);

    // Actualizar
    updateOrderStatus(completedOrder);
}


// Función para actualizar el estado visual
function updateOrderStatus(order) {

    // Buscar elemento
    const orderElement = document.getElementById(`order-${order.id}`);

    // Actualizar contenido
    orderElement.innerHTML = `
    <h3>Order #${order.id}</h3>
    <p class="completed">
    Status: ${order.status}
    </p>
`;
}


// Evento del botón
addorderbtn.addEventListener("click", createOrder);