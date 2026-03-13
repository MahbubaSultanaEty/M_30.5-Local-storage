console.log("connected");

const handleAddProduct = () => {
    const productEL = document.getElementById("product");
    const product= productEL.value;
    const quantityEL = document.getElementById("quantity");
    const quantity= quantityEL.value;

    console.log(product, quantity);
    displayProduct(product, quantity);
    addProductToCart(product, quantity);

    productEL.value = "";
    quantityEL.value = "";

}


const getCart = () => {
    const cart = {};
    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart(); // this function is actually is returning the  cart object as a value here. So basucally its cart= {}. And its been delcared in another function to make it reusable and more orginised
    cart[product] = quantity;
    console.log("cart", cart);
}


const displayProduct = (product, quantity) => {
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    
    const productContainer = document.getElementById("product-container");
    productContainer.appendChild(li);
}