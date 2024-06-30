document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

function addToCart(event) {
    const button = event.target;
    const product = button.closest('.product'); // Find the closest parent with class 'product'
    if (!product) {
        console.error('Parent product element not found.');
        return;
    }

    const productTitle = product.querySelector('h3'); // Find the product title element
    if (!productTitle) {
        console.error('Product title element not found.');
        return;
    }
    const titleText = productTitle.innerText; // Get the inner text of the product title

    const productPrice = product.querySelector('p.price'); // Find the product price element
    if (!productPrice) {
        console.error('Product price element not found.');
        return;
    }
    const priceText = productPrice.innerText; // Get the inner text of the product price

    // Create cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <h3>${titleText}</h3>
        <p>${priceText}</p>
    `;

    // Append cart item to cart items container on cart.html
    let cartItems = document.getElementById('cart-items');
    if (!cartItems) {
        // If cart items container doesn't exist, create it
        cartItems = document.createElement('div');
        cartItems.id = 'cart-items';
        document.body.appendChild(cartItems); // Add to body or appropriate container
    }
    
    cartItems.appendChild(cartItem);

    // Update cart UI
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        const cartItemElements = cartItems.querySelectorAll('.cart-item');
        const totalItems = cartItemElements.length;
        
        // Update cart count display
        let cartCount = document.getElementById('cart-count');
        if (!cartCount) {
            // If cart count display doesn't exist, create it
            cartCount = document.createElement('div');
            cartCount.id = 'cart-count';
            document.body.appendChild(cartCount); // Add to body or appropriate container
        }
        
        cartCount.innerText = totalItems.toString();
    } else {
        console.error('Cart items container not found.');
    }
}
