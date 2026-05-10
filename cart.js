// Cart page - Display and manage cart
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
});

function loadCart() {
    fetch('/api/cart')
        .then(response => response.json())
        .then(data => {
            displayCart(data);
        })
        .catch(error => console.error('Error loading cart:', error));
}

function displayCart(cartItems) {
    if (cartItems.length === 0) {
        document.getElementById('emptyCart').style.display = 'block';
        document.getElementById('cartContent').style.display = 'none';
        updateCartCount();
        return;
    }
    
    document.getElementById('emptyCart').style.display = 'none';
    document.getElementById('cartContent').style.display = 'block';
    
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    let totalItems = 0;
    
    cartItems.forEach(item => {
        const subtotal = item.book.price * item.quantity;
        total += subtotal;
        totalItems += item.quantity;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.book.title}</td>
            <td>${item.book.author}</td>
            <td>$${item.book.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${subtotal.toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });
    
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = total.toFixed(2);
    updateCartCount();
}

function removeFromCart(cartItemId) {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
        fetch(`/api/cart/${cartItemId}`, {
            method: 'DELETE'
        })
        .then(() => {
            loadCart();
        })
        .catch(error => console.error('Error removing from cart:', error));
    }
}

function updateCartCount() {
    fetch('/api/cart')
        .then(response => response.json())
        .then(data => {
            const count = data.reduce((sum, item) => sum + item.quantity, 0);
            const cartCountElements = document.querySelectorAll('#cart-count');
            cartCountElements.forEach(el => el.textContent = count);
        })
        .catch(error => console.error('Error updating cart count:', error));
}

function proceedToCheckout() {
    window.location.href = '/checkout';
}
