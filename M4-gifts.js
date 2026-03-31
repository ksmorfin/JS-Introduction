const gifts = ["teddy bear", "doll", "bicycle", "video game", "puzzle", "board game", "action figure", "lego set", "remote control car", "dollhouse"];

function findgift(gifts, giftname, index = 0) {

    // Base case: no lo encontro
    if (index === gifts.length) {
        return `${giftname} is not in the list. `;
    }

    // Base case: lo encontro
    if (gifts[index] === giftname) {
        return `${giftname} is in the position ${index}.`;
    }

    // Recursive case: sigue buscando
    return findgift(gifts, giftname, index + 1);
}

// Ejemplo de uso
console.log(findgift(gifts, "bicycle"));
console.log(findgift(gifts, "dollhouse"));
console.log(findgift(gifts, "train set"));