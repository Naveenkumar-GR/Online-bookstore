// Book detail page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    
    if (bookId) {
        loadBookDetail(bookId);
    } else {
        // If no book ID in URL, redirect to home
        window.location.href = '/';
    }
    
    updateCartCount();
});

function loadBookDetail(bookId) {
    fetch(`/api/books/${bookId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Book not found');
            }
            return response.json();
        })
        .then(book => {
            displayBookDetail(book);
        })
        .catch(error => {
            console.error('Error loading book details:', error);
            document.getElementById('bookDetailContainer').innerHTML = '<p>Book not found.</p>';
        });
}

function displayBookDetail(book) {
    const container = document.getElementById('bookDetailContainer');
    
    const bookHTML = `
        <div class="book-detail-card">
            <div class="book-detail-image">📖</div>
            <div class="book-detail-content">
                <h1>${book.title}</h1>
                <p class="author">by ${book.author}</p>
                <div class="rating">★★★★★ (4.8/5 - Based on reviews)</div>
                
                <div class="book-description">
                    <h2>Description</h2>
                    <p>${book.description}</p>
                </div>
                
                <div class="book-info">
                    <div class="price">
                        <h3>Price: $${book.price.toFixed(2)}</h3>
                    </div>
                    <div class="stock">
                        <p>Available: ${book.quantity} in stock</p>
                    </div>
                </div>
                
                <div class="actions">
                    <div class="quantity-selector">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" value="1" min="1" max="${book.quantity}">
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCartFromDetail(${book.id}, '${book.title}', ${book.price})">
                        Add to Cart
                    </button>
                    <a href="/" class="back-link">← Back to Home</a>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = bookHTML;
}

function addToCartFromDetail(bookId, title, price) {
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (quantity < 1) {
        alert('Please enter a valid quantity');
        return;
    }
    
    fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            bookId: bookId,
            quantity: quantity
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(`${quantity} copy(ies) of "${title}" has been added to your cart!`);
        updateCartCount();
    })
    .catch(error => console.error('Error adding to cart:', error));
}

function updateCartCount() {
    fetch('/api/cart')
        .then(response => response.json())
        .then(data => {
            const count = data.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cart-count').textContent = count;
        })
        .catch(error => console.error('Error updating cart count:', error));
}
