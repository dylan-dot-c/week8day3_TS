"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    const newUser = {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age,
        cart: [],
    };
    return newUser;
}
function createItem(name, price, description) {
    const item = {
        id: (0, uuid_1.v4)(),
        name: name,
        price: price,
        description: description,
    };
    return item;
}
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(itemToDelete, user) {
    const filteredCart = user.cart.filter((item) => item.id != itemToDelete.id);
    user.cart = [...filteredCart];
}
function removeQuantityFromCart(item, user, count) {
    const newCart = [];
    let removeCount = count;
    for (let itemCart of user.cart) {
        if (itemCart.id === item.id && removeCount > 0) {
            removeCount -= 1;
            continue;
        }
        else {
            newCart.push(itemCart);
        }
    }
    user.cart = [...newCart];
}
function cartTotal(user) {
    let total = 0;
    for (let item of user.cart) {
        total += item.price;
    }
    return total;
}
function printCart(user) {
    console.table(user.cart);
}
function main() {
    const user = createUser("Dylan", 20);
    const itemA = createItem("Nike", 20.99, "Best in the world");
    const itemB = createItem("Apple Mac", 2000.99, "Not too bad");
    const itemC = createItem("Carrots", 25.99, "Good enough for your eyes");
    addToCart(itemA, user);
    printCart(user);
    console.log(user.name, "total is", cartTotal(user));
    addToCart(itemB, user);
    addToCart(itemB, user);
    addToCart(itemB, user);
    printCart(user);
    console.log(user.name, "total is", cartTotal(user));
    addToCart(itemC, user);
    addToCart(itemC, user);
    addToCart(itemC, user);
    printCart(user);
    console.log(user.name, "total is", cartTotal(user));
    removeFromCart(itemB, user);
    removeFromCart(itemB, user);
    removeFromCart(itemB, user);
    printCart(user);
    console.log(user.name, "total is", cartTotal(user));
    removeQuantityFromCart(itemC, user, 2);
    printCart(user);
    console.log(user.name, "total is", cartTotal(user));
}
main();
