function findlongestword(text) {
    const words = text.split(" ");

    let longestword = "";

    for (let i = 0; i < words.length; i++) {
        let currentword = words[i];
        if (currentword.length > longestword.length) {
        longestword= currentword;
        }
    }

    return longestword;

}

//Example
console.log(findlongestword("Hello world, this is a test of the longest word function."));
