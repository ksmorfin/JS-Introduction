let book = {   // Aqui comienzas a crear un objeto, un objeto siempre va entre llaves {}
    title: "El Principito",   // Cada una de estas lineas es una propiedad. nombre(propiedad): valor
    author: "Antoine de Sanit-Exupery",   // La coma, separa las propiedades
    año: 1943,
    status: "available",
    chapters: [],   // Esto es un array vacio dentro del objeto

    infobook: function() {   //Un metodo es una funcion normal pero dentro de un objeto {}, lo mismo que una funcion normal pero pertenece al objeto
        console.log("title of the book " + this.title +   // 'this' means object
                    ", written by " + this.author +
                    ", in the year " + this.año +
                    ", the status is: " + this.status + ".");
    },

    addchapter: function(chapter) {
        this.chapters.push(chapter);
    },

    deletechapter: function(chapter) {
        let index = this.chapters.index0f(chapter);   // index0f() busca en que posicion esta algo en el array, si no lo encuentra devuelve -1
        if (index !== -1) {
            this.chapters.splice(index, 1);
        }
    }
};

book.addchapter("Chapter 1");
book.addchapter("chapter 2");

book.infobook();
console.log(book.chapters);