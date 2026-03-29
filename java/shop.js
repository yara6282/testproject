let cartCount = 0;

function addToCart(name) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(name + " has been added to your cart! 🛹🛒");
}