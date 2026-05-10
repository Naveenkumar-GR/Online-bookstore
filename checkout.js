// Checkout page
document.addEventListener('DOMContentLoaded', function() {
    loadOrderReview();
});

function loadOrderReview() {
    fetch('/api/cart')
        .then(response => response.json())
        .then(data => {
            displayOrderReview(data);
        })
        .catch(error => console.error('Error loading order review:', error));
}

function displayOrderReview(cartItems) {
    const orderItemsContainer = document.getElementById('orderItems');
    orderItemsContainer.innerHTML = '';
    
    let total = 0;
    
    if (cartItems.length === 0) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty. <a href="/">Go back to shopping</a></p>';
        document.getElementById('orderTotal').textContent = '0.00';
        return;
    }
    
    cartItems.forEach(item => {
        const subtotal = item.book.price * item.quantity;
        total += subtotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div>
                <strong>${item.book.title}</strong> by ${item.book.author}<br>
                $${item.book.price.toFixed(2)} × ${item.quantity}
            </div>
            <div>$${subtotal.toFixed(2)}</div>
        `;
        orderItemsContainer.appendChild(orderItem);
    });
    
    document.getElementById('orderTotal').textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkoutForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            placeOrder();
        });
    }
});

function placeOrder() {
    fetch('/api/checkout', {
        method: 'POST'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to place order');
        }
        return response.json();
    })
    .then(data => {
        showConfirmation(data);
    })
    .catch(error => {
        console.error('Error placing order:', error);
        alert('Error placing order. Please try again.');
    });
}

function showConfirmation(order) {
    document.querySelector('.checkout-container').innerHTML = `
        <div class="confirmation-message">
            <h2>✓ Order Confirmed!</h2>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Order Date:</strong> ${new Date(order.orderDate).toLocaleDateString()}</p>
            <p><strong>Total Amount:</strong> $${order.totalAmount.toFixed(2)}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <br>
            <p>Thank you for your purchase! Your order has been successfully placed.</p>
            <p>We will process your order shortly and send you a confirmation email.</p>
            <br>
            <p><a href="/">Continue Shopping</a></p>
        </div>
    `;
}
