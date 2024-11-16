import { question, questionNewPassword } from "readline-sync";

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
    console.log(`+-----+------------------------------------+-------+-------------+----------+
| id  | name                               | price | status      | quantity |
+-----+------------------------------------+-------+-------------+----------+`);

    for (let book of books) {
        console.log(`| ${String(book.id).padEnd(3, ' ')} | ${book.name.padEnd(34, ' ')} | ${String(book.price).padEnd(5, ' ')} | ${book.status.padEnd(11, ' ')} | ${String(book.quantity).padEnd(8, ' ')} |`);
    }

    console.log("+-----+------------------------------------+-------+-------------+----------+");
}

function addBook(uid, quan) {
    let index = 0;
    for (let book of books) {
        if (uid == book.id) {
            if (book.status === 'available') {
                if (book.quantity >= quan) {
                    book.quantity -= Number(quan)
                } else {
                    console.log('\nthe quantity exceeds available quantity \ngive new value');
                    addBook(uid, question());
                    return;
                }

                if (book.quantity === 0)
                    book.status = 'unavailable';
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].id === book.id) {
                        cart[i].quantity += Number(quan);
                        cart[i].total_price = cart[i].quantity * cart[i].price;
                        return;
                    }
                }

                cart.push({
                    id: book.id,
                    name: book.name,
                    price: book.price,
                    quantity: Number(quan),
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

function removeBook(uid, quan) {
    let index = 0;
    for (let book of cart) {
        if (uid == book.id) {
            if (quan === 'max')
                quan = `${book.quantity}`;
            if (book.quantity >= quan) {
                book.quantity -= Number(quan)
            } else {
                console.log('\nthe quantity exceeds available quantity \ngive new value');
                removeBook(uid, question());
                return;
            }
            for (let i = 0; i < books.length; i++) {
                if (books[i].id === book.id) {
                    books[i].quantity += Number(quan);
                }
            }
            if (book.quantity === 0) {
                cart.splice(index, 1);
                return;
            }
            cart[index].total_price = cart[index].quantity * cart[index].price;
            return;

        }
        index++;
    }
    console.log("Invalid ID");
}

function updateCart() {
    if (cart.length !== 0) {
        console.log('select the book');
        let bookid = question();
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == bookid) {
                console.log('\n1) increase quantity\n2) decrease quantity\n3) remove');
                let option = question();
                switch (option) {
                    case "1": console.log("enter the quantity");
                        addBook(bookid, question()); break;
                    case "2": console.log("enter the quantity");
                        removeBook(bookid, question()); break;
                    case "3": removeBook(bookid, 'max'); break;
                    default: console.log('Invalid');
                }
                return;
            }
        }
        console.log('book doesnt exist in cart');
    } else {
        console.log('cart empty');
    }
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
| cart total                                                  | ${String(grandTotal).padEnd(11, ' ')} |
+-------------------------------------------------------------+-------------+`);
    }
    else {
        console.log('cart empty');
    }
}

while (true) {
    console.log("1) show available books \n2) add book \n3) show cart \n4) update cart");
    const opt = question();
    switch (opt) {
        case "1": display(); break;
        case "2": console.log("\nEnter the ID of the book need to be add");
            let id = question();
            console.log("\nEnter the number of the books need to be add");
            let quan = question();
            addBook(id, quan);
            break;
        case "3": displayCart(); break;
        case "4": updateCart(); break;
        default: console.log("Invalid Option"); break;
    }
}


