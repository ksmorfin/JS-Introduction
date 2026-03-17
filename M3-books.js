let books = [];

function addbook(title) {
    books.push(title);
}

function showbooks() {
    for (let i = 0; i < books.length; i++) {clearInterval
    console.log(books[i]);
}
}

addbook("El Principito");
addbook("1984");
addbook("Cien años de soledad");
addbook("Pedro Paramo");
addbook("Don Quijote de la Mancha");
addbook("Padre rico, padre pobre");
addbook("El Alquimista");
addbook("Lord of the Rings");
addbook("The Hobbit");
addbook("Cartas cruzadas");

showbooks();
