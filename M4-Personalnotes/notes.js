const fs = require('fs');   // Leer y escribir archivos

function getnotes() {
    try {
        const data = fs.readFileSync('notes.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

//readFileSync: lee el archivo
//'utf-8': lo convierte en texto
//JSON.parse: convierte texto en objeto JS
//try/catch: si el archivo no existe, devuelve un array vacío []

function savenotes(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes, null, 4));
}

//JSON.stringfy convierte objeto JS en texto JSON
//null, 2: formato bonito con indentación de 2 espacios

function createnote(title, content) {
    const notes = getnotes();

    const exists = notes.find(note => note.title === title);

    if (exists) {
        console.log('⚠️ Note with this title already exists. Please choose a different title.');
        return;
    }

    const newnote = {
        title: title,
        content: content
    };

notes.push(newnote);

savenotes(notes);

console.log('Note saved correctly');
}

//Lees notas existentes → creas una nueva → add push → guardas notas actualizadas

//Here, listar notas
function listnotes() {
    const notes = getnotes();

    console.log('📌 Notes list');

    notes.forEach((note, index) => {
        console.log(`${index + 1}, ${note.title} - ${note.content}`);
    });
}

//Delete notes
function deletenote(title) {
    const notes = getnotes();

    const newnotes = notes.filter(note => note.title !== title);

    savenotes(newnotes);

    console.log('Note deleted (if existed)');
}

//EXAMPLE USAGE

//createnote('Test', 'This is a test note');

createnote('Buy groceries', 'Milk, Bread, Eggs');
createnote('Study JavaScript', 'Complete Final Project');
createnote('NASM', 'Review lastest chapters');
createnote('Gym', 'Make new client routine');
createnote('Real estate', 'Design new website');

listnotes();

deletenote('Buy groceries');

listnotes();