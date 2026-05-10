// Main page - Display books
document.addEventListener('DOMContentLoaded', function() {
    loadBooks();
    updateCartCount();
});

function loadBooks(query = '') {
    let url = '/api/books';
    if (query) {
        url = `/api/books/search?query=${encodeURIComponent(query)}`;
    }
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayBooks(data);
        })
        .catch(error => console.error('Error loading books:', error));
}

function displayBooks(books) {
    const container = document.getElementById('booksContainer');
    container.innerHTML = '';
    
    if (books.length === 0) {
        container.innerHTML = '<p>No books found.</p>';
        return;
    }
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-image">📖</div>
            <div class="book-details">
                <div class="book-title"><a href="/book?id=${book.id}" style="color: inherit; text-decoration: none;">${book.title}</a></div>
                <div class="book-author">by ${book.author}</div>
                <div class="book-description">${book.description}</div>
                <div class="book-price">$${book.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${book.id}, '${book.title}', ${book.price})">Add to Cart</button>
            </div>
        `;
        container.appendChild(bookCard);
    });
}

function addToCart(bookId, title, price) {
    const quantity = 1;
    
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
        alert(`"${title}" has been added to your cart!`);
        updateCartCount();
    })
    .catch(error => console.error('Error adding to cart:', error));
}

function searchBooks() {
    const query = document.getElementById('searchInput').value;
    loadBooks(query);
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

// Allow search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBooks();
            }
        });
    }
});
