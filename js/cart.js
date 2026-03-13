// console.log("connected");

const handleAddProduct = () => {
    const productEL = document.getElementById("product");
    const product= productEL.value;
    const quantityEL = document.getElementById("quantity");
    const quantity = parseInt(quantityEL.value);
    

    // console.log(product, quantity);
    
    addProductToCart(product, quantity);
    displayProduct(product, quantity);
    productEL.value = "";
    quantityEL.value = "";

}


const getCart = () => {
    let cart = {};

    const cartJson = localStorage.getItem("cart");
    if (cartJson) {
        cart = JSON.parse(cartJson)
    }

    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart(); // this function is actually is returning the empty cart object as a value here. So basucally its cart= {}. And its been delcared in another function to make it reusable and more orginised

    // cart[product] = quantity; [when you simply do this when you try to add a product more than once with a new quanity, the existing (product: quantity) key value get removes. so thats why we need to use if/else in this case , so that every time you add a new product the existing products quanity increases with the new quantity]
    if (cart[product]) {
        cart[product] = cart[product] + quantity;
    } else {
        cart[product] = quantity;
    }

    // console.log("cart", cart);
    const cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
}


const displayProduct = (product, quantity) => {
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    
    const productContainer = document.getElementById("product-container");
    productContainer.appendChild(li);
}


// DISPLAY cart products from the local storage
const displayStoredProducts = () => {
    const cart = getCart();
    for (let product in cart) {
        const quantity= cart[product]
        console.log(product, quantity);
        displayProduct(product, quantity)
    }
}
displayStoredProducts()


/**
 * To save Object/Array in the Local Storage
 * 1. Convert the object to JSON string by JSON.stringify
 * 2. Localstore.setItem()
 */

/**
 * To get an array/object from the local String
 * 1. use getItem() to get the array/object and it will be in json strign format 
 * 2. now convert the sting to object using JSON.parse() method
 */

/**
JSON.parse() কেন ব্যবহার করি?
* localStorage সবসময় string data দেয়
* so when you try to a new item to the cart, it just overwrites the existing item and deletes that existing item. Beacause string is like a text content
* That why cart এ item add করতে হলে object দরকার

JSON.parse() → string কে object বানায়
➡ তাই আগের item গুলো থাকে
➡ নতুন item add করা যায়
 */