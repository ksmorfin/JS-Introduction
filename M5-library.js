// ===============================
// BOOK INVENTORY SYSTEM
// ===============================

// Base de datos en formato JSON
let library = [
    {
        title: "El Principito",
        author: "Antoine de Saint-Exupéry",
        genre: "Fable",
        availability: true
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        availability: false
    },
    {
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        genre: "Magic Realism",
        availability: true
    },
    {
        title: "Pedro Paramo",
        author: "Carlos Fuentes",
        genre: "Magic Realism",
        availability: true
    },
    {
        title: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        genre: "Classic",
        availability: false
    },
    {
        title: "Padre rico, padre pobre",
        author: "Robert Kiyosaki",
        genre: "Personal Finance",
        availability: false
    },
    {
        title: "El Alquimista",
        author: "Paulo Coelho",
        genre: "Adventure",
        availability: false
    },
    {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        availability: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        availability: true
    },
    {
        title: "The Messenger",
        author: "Markus Zusak",
        genre: "Young Adult",
        availability: true
    }
];

// ===============================
// FUNCTION TO READ BOOKS
// ===============================

function readBooks(callback) {
    console.log("Reading library data...");

    setTimeout(() => {
        callback(library);
    }, 2000);
}

// ===============================
// DISPLAY BOOKS
// ===============================

function displayBooks() {
    readBooks((books) => {
        console.log("\n=== LIBRARY BOOKS ===");
    
        books.forEach((book, index) => {
            console.log(`
Book ${index + 1}:
Title: ${book.title}
Author: ${book.author}
Genre: ${book.genre}
Available: ${book.availability ? "Yes" : "No"}
            `);
        });
    });
}

// ===============================
// ADD BOOKS
// ===============================

function addBook(title, author, genre, callback) {

    const newBook = {
        title,
        author,
        genre,
    };

    console.log("\nAdding new book...");

    setTimeout(() => {
        library.push(newBook);

        callback(`Book "${title}" added successfully!`);
    }, 2000);
}

// ===============================
// UPDATE AVAILABILITY
// ===============================

function updateAvailability(title, status, callback) {

    console.log("\nUpdating book availability...");

    setTimeout(() => {
        const book = library.find(
            (book) => book.title === title
        );

        if (book) {
            book.availability = status;

            callback(
                `Book "${title}" availability updated to: ${status ? "available" : "unavailable"
                }!`
            );

        } else {
            callback(`Book "${title}" not found in the library.`);
        }

    }, 2000);
}

// ===============================
// MAIN EXECUTION
// ===============================

displayBooks();    // Mostrar libros iniciales

addBook(    // Agregar un nuevo libro
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "Classic",
    (message) => {

        console.log("\n" + message);
    
        displayBooks();    // Mostrar libros actualizados

        updateAvailability(    // Actualizar disponibilidad
            "The Great Gatsby",
        false,
        (updateMessage) => {

            console.log("\n" + updateMessage);

            displayBooks();    // Mostrar libros con disponibilidad actualizada
        }
        );
    }
);