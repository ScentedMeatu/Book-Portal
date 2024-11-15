import { question } from "readline-sync";

let books = [{ id: 101, name: "lord of rings", price: 4000, status: 'available', quantity: 10 },
{ id: 102, name: "harry potter", price: 2500, status: 'available', quantity: 10 },
{ id: 103, name: "one piece", price: 20000, status: 'available', quantity: 10 },
{ id: 104, name: "hobbit", price: 4000, status: 'available', quantity: 10 },
{ id: 105, name: "re-zero", price: 10000, status: 'available', quantity: 10 },
{ id: 106, name: "pacific rim", price: 1800, status: 'available', quantity: 10 },
{ id: 107, name: "witcher", price: 4000, status: 'available', quantity: 10 },
{ id: 108, name: "astrophysics for people in a Hurry", price: 2000, status: 'available', quantity: 10 },
{ id: 109, name: "dairy of wimpy kid", price: 1000, status: 'available', quantity: 10 },
{ id: 110, name: "game of thrones", price: 5000, status: 'available', quantity: 10 }];

let cart = [];

function display() {
    console.log(`+-----+------------------------------------+-------+-----------+----------+
| id  | name                               | price | status    | quantity |
+-----+------------------------------------+-------+-----------+----------+`);

    for (let book of books) {
        console.log(`| ${String(book.id).padEnd(3, ' ')} | ${book.name.padEnd(34, ' ')} | ${String(book.price).padEnd(5, ' ')} | ${book.status.padEnd(9, ' ')} | ${String(book.quantity).padEnd(8, ' ')} |`);
    }

    console.log("+-----+------------------------------------+-------+-----------+----------+");
}

function addBook(uid) {
    let index = 0;
    for (let book of books) {
        if (uid == book.id) {
            if (book.status === 'available') {
                book.quantity--;
                if (book.quantity === 0)
                    book.status = 'unavailable';
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].id === book.id) {
                        cart[i].quantity++;
                        cart[i].total_price = cart[i].quantity * cart[i].price;
                        return;
                    }
                }

                cart.push({
                    id: book.id,
                    name: book.name,
                    price: book.price,
                    quantity: 1,
                    total_price: book.price
                });
                return;

            } else {
                console.log("book you asked is unavailable");
                return;
            }
        }
        index++;
    }

    console.log("Invalid ID");
}

function displayCart() {
    if (cart.length !== 0) {
        let grandTotal = 0;
        console.log(`+-----+------------------------------------+-------+----------+-------------+
| id  | name                               | price | quantity | total price |
+-----+------------------------------------+-------+----------+-------------+`);
        for (let i = 0; i < cart.length; i++) {
            console.log(`| ${String(cart[i].id).padEnd(3, ' ')} | ${cart[i].name.padEnd(34, ' ')} | ${String(cart[i].price).padEnd(5, ' ')} | ${String(cart[i].quantity).padEnd(8, ' ')} | ${String(cart[i].total_price).padEnd(11, ' ')} |`);
            grandTotal += cart[i].total_price;
        }
        console.log(`+-----+------------------------------------+-------+----------+-------------+
| grand total                                                 | ${String(grandTotal).padEnd(11, ' ')} |
+-------------------------------------------------------------+-------------+`);
    }
    else {
        console.log('cart empty');
    }
}

while (true) {
    console.log("1) show available books \n2) add book \n3) show cart");
    const opt = question();
    switch (opt) {
        case "1": display(); break;
        case "2": console.log("\nEnter the ID of the book need to be add");
            let id = question();
            addBook(id);
            break;
        case "3": displayCart(); break;
        default: console.log("Invalid Option"); break;
    }
}


