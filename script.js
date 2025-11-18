let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

function clearCart() {
  cart = [];
  updateCart();
}

function handleContact(event) {
  event.preventDefault();
  document.getElementById('contact-msg').textContent = 'Thanks! We’ll get back to you soon.';
  event.target.reset();
}
