console.log("Hello world");
import { v4 as uuidv4 } from "uuid";

type Item = {
    readonly id: string;
    name: string;
    price: number;
    description: string;
};

type User = {
    readonly id: string;
    name: string;
    age: number;
    cart: Item[];
};

function createItem({ name, price, description }: Item) {
    const item: Item = {
        id: uuidv4(),
        name: name,
        price: price,
        description: description,
    };

    return item;
}

function addToCart(item: Item, user: User) {
    user.cart.push(item);
}

function removeFromCart(itemToDelete: Item, user: User) {
    const filteredCart = user.cart.filter((item) => item.id != itemToDelete.id);
    user.cart = [...filteredCart];
}

function removeQuantityFromCart(item: Item, user: User, count: number) {
    const newCart: Item[] = [];
    let removeCount = count;
    for (let itemCart of user.cart) {
        if (itemCart.id === item.id && removeCount > 0) {
            removeCount -= 1;
            continue;
        } else {
            newCart.push(itemCart);
        }
    }
}

function cartTotal(user: User) {
    let total = 0;
    for (let item of user.cart) {
        total += item.price;
    }

    return total;
}

function printCart(user: User) {
    console.table(user.cart);
}

let person: Item = {
    id: uuidv4(),
    name: "Dylan",
    price: 20.99,
    description: "Best",
};

console.log(person);
