let productName = prompt("Enter product name: ");
let productPrice = prompt("Enter product price: ");
let productQuantity = prompt("Enter product quantity: ");

let total=(productPrice * productQuantity);

document.getElementById("receipt").innerHTML=`
    <h2>Receipt</h2>
    <p> Product: ${productName}</p>
    <p> Price: ${productPrice}</p>
    <p> Quantity: ${productQuantity}</p>
    <hr>
    <h2>Total</h2>
    <p> Total: ${total}</p>
    <p> Total plus tax: ${total * .07 + total}</p>
    `;