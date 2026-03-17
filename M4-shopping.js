const Shoppinglist = [];

const additem = (item) => {

    if (!Shoppinglist.includes(item)) {
        Shoppinglist.push(item);
    } else {
        console.log("The item is already in the shopping list.");
    }
}

const removeitem = (item) => {

    const index = Shoppinglist.indexOf(item);

    if (index !== -1) {
        Shoppinglist.splice(index, 1);
    } else {
        console.log("The item is not in the shopping list.");
    }
};

const showlist = () => {

    console.log("Shopping List:");

    Shoppinglist.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
};

// use example

additem("Milk");
additem("Bread");
additem("Eggs");
additem("Milk"); // This will not be added again

showlist();

removeitem("Bread");

showlist();