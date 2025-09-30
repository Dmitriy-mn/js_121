const PRODUCT_LS_KEY = 'basket';


const container = document.querySelector(".js-list");
const totalPrice = document.querySelector(".js-total-price");
const clearBtn = document.querySelector(".js-clear");

let totalCost;
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];

if(products.length) {
    clearBtn.hidden = false;
    totalCost = products.reduce((acc, { price, qty }) => {
        return acc + (price * qty);
    }, 0)
}


totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : "Your basket is empty";
container.insertAdjacentHTML("beforeend", createMerkup(products));
clearBtn.addEventListener("click", handlerClear);

function handlerClear() {
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = "./03-shop.html";
}

function createMerkup(arr) {
    return arr.map(({ img, name, price, qty }) => `
        <li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${qty * price}</p>
        </li>
    `).join("");
}







