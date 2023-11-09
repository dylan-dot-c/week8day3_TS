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

function createUser(name: string, age: number) {
    const newUser: User = {
        id: uuidv4(),
        name: name,
        age: age,
        cart: [],
    };

    return newUser;
}

function createItem(name: string, price: number, description: string) {
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

    user.cart = [...newCart];
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

// Add 3 Item B to the users Cart
// print the contents of the user's cart
// print the Total of the user's cart

function main(): void {
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
