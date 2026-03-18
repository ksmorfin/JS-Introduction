function findapair(guests) {
    for (let i = 0; i < guests.length -1; i++) {
        let initial1 = guests[i][0];
        let initial2 = guests[i + 1][0];

        if (initial1 === initial2) {
            return [guests[1], guests[i + 1]];
        }
    }
    return null;
}

const list = ["Antonio", "Diego", "Dante", "Francisco", "Korina", "Mago", "Martha"];

console.log(findapair(list));