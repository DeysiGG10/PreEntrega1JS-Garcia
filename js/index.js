const nombresProductos = {
    1: "Empanada de Queso",
    2: "Empanada de Carne",
    3: "Empanada de Pollo",
    4: "Empanada de Camaron",
    5: "Empanada de Queso/Camaron",
    6: "Empanada de Queso/Choclo",
    7: "Empanada Vegetariana",
    8: "Empanada de Pulpo",
    9: "Papas Fritas",
   
};

const preciosProductos = {
    1: 1500,
    2: 1800,
    3: 1800,
    4: 2300,
    5: 2000,
    6: 2000,
    7: 2000,
    8: 2500,
    9: 3000,

};

const images = {
    1: 'images/empanada_queso.jpg',
    2: 'images/empanada_carne.jpg',
    3: 'images/empanada_pollo.jpg',
    4: 'images/empanada_camaron.jpg',
    5: 'images/empanada_queso_camaron.jpg',
    6: 'images/empanada_queso_choclo.jpg',
    7: 'images/empanada_vegetariana.jpg',
    8: 'images/empanada_pulpo.jpg',
    9: 'images/papas_fritas.jpg',
  
};

const products = Object.keys(nombresProductos).map(key => ({
    id: parseInt(key),
    name: nombresProductos[key],
    price: preciosProductos[key],
    image: images[key],
}));

const cart = {};

function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Agregar al carrito';
        addToCartButton.addEventListener('click', () => addToCart(product));

        productDiv.appendChild(productImage);
        productDiv.innerHTML += `<h3>${product.name}</h3><p>$${product.price.toFixed(2)}</p>`;
        productDiv.appendChild(addToCartButton);

        productsContainer.appendChild(productDiv);
    });

    updateCart();
}

function addToCart(product) {
    const productId = product.id;

    if (!cart[productId]) {
        cart[productId] = { ...product, quantity: 0 };
    }

    cart[productId].quantity++;

    updateCart();
}

function removeFromCart(productId) {
    if (cart[productId]) {
        cart[productId].quantity--;

        if (cart[productId].quantity <= 0) {
            delete cart[productId];
        }

        updateCart();
    }
}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '<h2>Carrito de Compras</h2>';

    let total = 0;

    for (const productId in cart) {
        const product = cart[productId];
        const productTotal = product.quantity * product.price;

        total += productTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `<p>${product.name} - Cantidad: ${product.quantity} - Total: $${productTotal.toFixed(2)}</p>`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.addEventListener('click', () => removeFromCart(productId));

        cartItemDiv.appendChild(removeButton);
        cartContainer.appendChild(cartItemDiv);
    }

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartContainer.appendChild(totalDiv);
}
function realizarPedido() {
    alert("Pedido realizado con exito. ¡Gracias por tu compra!");
}
displayProducts();