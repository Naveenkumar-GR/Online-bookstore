# Online Bookstore - Developer Quick Reference

## 🚀 Quick Start Checklist

### Before Running Application
- [ ] Install Java 17 or higher
- [ ] Install Maven 3.6 or higher
- [ ] Verify installations: `java -version` and `mvn -v`
- [ ] Clone/Download project to your machine

### Running the Application
- [ ] Navigate to project root directory
- [ ] Run `run.bat` (Windows) OR `run.sh` (Mac/Linux)
- [ ] Wait for Spring Boot to start (takes ~10 seconds)
- [ ] Open http://localhost:8080 in browser

### Testing Features
- [ ] Browse homepage with 8 books
- [ ] Search for a book (try "gatsby")
- [ ] Click on book title to view details
- [ ] Add books to cart from homepage or detail page
- [ ] View shopping cart
- [ ] Remove items from cart
- [ ] Proceed to checkout
- [ ] Fill in form and place order
- [ ] See order confirmation

---

## 📱 Features Overview

| Page | URL | Features |
|------|-----|----------|
| **Homepage** | `/` | Browse books, search, add to cart |
| **Book Details** | `/book?id=1` | Full book info, custom quantity |
| **Shopping Cart** | `/cart` | View items, remove, total price |
| **Checkout** | `/checkout` | Order review, form, confirmation |

---

## 🔌 API Testing

### Using Browser Console
```javascript
// Get all books
fetch('/api/books').then(r => r.json()).then(console.log)

// Search books
fetch('/api/books/search?query=gatsby').then(r => r.json()).then(console.log)

// Get cart
fetch('/api/cart').then(r => r.json()).then(console.log)

// Add to cart
fetch('/api/cart', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({bookId: 1, quantity: 1})
}).then(r => r.json()).then(console.log)
```

### Using cURL
```bash
# Get all books
curl http://localhost:8080/api/books

# Get specific book
curl http://localhost:8080/api/books/1

# Search
curl "http://localhost:8080/api/books/search?query=gatsby"

# Get cart
curl http://localhost:8080/api/cart

# Add to cart
curl -X POST http://localhost:8080/api/cart \
  -H "Content-Type: application/json" \
  -d '{"bookId": 1, "quantity": 2}'

# Remove from cart
curl -X DELETE http://localhost:8080/api/cart/1

# Checkout
curl -X POST http://localhost:8080/api/checkout
```

### Using Postman
1. Create new Collection
2. Create requests for each endpoint
3. Set method (GET, POST, DELETE)
4. Set URL (http://localhost:8080/api/...)
5. For POST: Set body to JSON, add data
6. Send and view response

---

## 📂 Important Files

### Backend Configuration
```
backend/src/main/resources/application.properties
```
Key properties:
- `server.port=8080` - Application port
- `spring.datasource.url=jdbc:h2:mem:testdb` - Database
- `spring.h2.console.enabled=true` - H2 Console

### Static Assets
```
backend/src/main/resources/static/
  ├── css/style.css           # All styling
  └── js/                      # JavaScript logic
      ├── main.js
      ├── book-detail.js
      ├── cart.js
      └── checkout.js
```

### Templates
```
backend/src/main/resources/templates/
  ├── index.html              # Homepage
  ├── book-detail.html        # Book details
  ├── cart.html               # Shopping cart
  └── checkout.html           # Checkout page
```

---

## 🔧 Common Issues & Solutions

### Port 8080 Already in Use
**Solution**: Change in application.properties
```properties
server.port=8081
```
Then access at `http://localhost:8081`

### "mvn: command not found"
**Solution**: 
1. Install Maven (see SETUP_GUIDE.md)
2. Add Maven bin to PATH environment variable
3. Restart terminal/IDE

### "Java not found"
**Solution**: Install Java 17+
```bash
java -version  # Check version
```

### Application won't start
**Solution**: Check console for errors
1. Ensure Java 17+ is installed
2. Try `mvn clean install` first
3. Check port 8080 isn't in use
4. Try restarting terminal

### Cart empty after refresh
**This is expected**: Session is cleared on browser refresh. This is normal for a demo.

---

## 🧪 Testing Scenarios

### Scenario 1: Add Item to Cart
1. Go to homepage
2. Find a book (e.g., "1984")
3. Click "Add to Cart"
4. Verify cart counter increases
5. Go to /cart to see item

### Scenario 2: Search and Add
1. Go to homepage
2. Type "jane" in search
3. Should see "Jane Eyre"
4. Click title to view details
5. Set quantity to 2
6. Click "Add to Cart"
7. Go to cart, should show 2 items

### Scenario 3: Complete Purchase
1. Add 2-3 books to cart
2. Go to cart page
3. Verify total is correct
4. Click "Proceed to Checkout"
5. Fill in form (any values work)
6. Click "Place Order"
7. Verify confirmation message

### Scenario 4: Remove from Cart
1. Add item to cart
2. Go to cart page
3. Click "Remove" button
4. Confirm removal
5. Verify item gone

---

## 📊 Sample Data (Pre-loaded)

| ID | Title | Author | Price |
|----|-------|--------|-------|
| 1 | To Kill a Mockingbird | Harper Lee | 12.99 |
| 2 | 1984 | George Orwell | 13.99 |
| 3 | Pride and Prejudice | Jane Austen | 10.99 |
| 4 | The Great Gatsby | F. Scott Fitzgerald | 11.99 |
| 5 | Brave New World | Aldous Huxley | 14.99 |
| 6 | The Catcher in the Rye | J.D. Salinger | 10.49 |
| 7 | Jane Eyre | Charlotte Brontë | 12.49 |
| 8 | Wuthering Heights | Emily Brontë | 11.49 |

---

## 💡 Tips & Tricks

### Development
- Spring DevTools is enabled for hot reload
- Make changes and refresh browser to see them
- Check browser console for JavaScript errors
- Check IDE console for backend errors

### Debugging
- Use browser DevTools (F12) to inspect network requests
- Check Application tab for localStorage/sessionStorage
- Use Network tab to see API calls
- Check Console for JavaScript errors

### Database
- H2 console available at: http://localhost:8080/h2-console
- Default username: `sa`
- Default password: (empty)
- Useful for viewing/modifying database directly

---

## 📖 Documentation Files

- **README.md** - Project overview and features
- **QUICK_START.md** - Quick start instructions
- **SETUP_GUIDE.md** - Detailed setup and installation
- **IMPLEMENTATION_SUMMARY.md** - Complete implementation details
- **DEVELOPER_REFERENCE.md** - This file

---

## 🔐 Security Notes

This is a demonstration application. For production:
- [ ] Add authentication (Spring Security)
- [ ] Encrypt passwords (BCrypt)
- [ ] Validate all inputs
- [ ] Use HTTPS
- [ ] Implement proper session management
- [ ] Add CSRF protection
- [ ] Use environment variables for secrets
- [ ] Implement rate limiting
- [ ] Add audit logging

---

## 📈 Performance Optimization Tips

1. **Database**: Consider adding indexes on frequently searched columns
2. **Caching**: Add Redis for session caching
3. **Frontend**: Minify CSS/JS in production
4. **Images**: Optimize book cover images
5. **API**: Add pagination for large book lists

---

## 🚀 Deployment Checklist

Before deploying to production:
- [ ] Change H2 to MySQL/PostgreSQL
- [ ] Add authentication and authorization
- [ ] Enable HTTPS/SSL
- [ ] Implement logging
- [ ] Add monitoring
- [ ] Set up backups
- [ ] Configure environment variables
- [ ] Perform security audit
- [ ] Load testing
- [ ] Set up CI/CD pipeline

---

## 📞 Helpful Resources

- **Spring Boot Docs**: https://spring.io/projects/spring-boot
- **Maven Guide**: https://maven.apache.org
- **H2 Database**: http://www.h2database.com
- **MDN Web Docs**: https://developer.mozilla.org
- **CSS Tricks**: https://css-tricks.com

---

## 📋 Build Commands Reference

```bash
# Navigate to backend
cd backend

# Clean project
mvn clean

# Compile
mvn compile

# Build package
mvn package

# Run application
mvn spring-boot:run

# Run tests
mvn test

# Full build (clean + compile + test + package)
mvn clean install

# Skip tests during build
mvn clean package -DskipTests

# Check dependencies
mvn dependency:tree
```

---

## 🎯 Useful Shortcuts

### Browser Console
```javascript
// Quick API test
async function testAPI() {
  const books = await fetch('/api/books').then(r => r.json());
  console.log('Books:', books);
}
testAPI();
```

### Add Test Data via API
```bash
curl -X POST http://localhost:8080/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Book",
    "author": "Author Name",
    "description": "Book description",
    "price": 19.99,
    "quantity": 10
  }'
```

---

**Happy Development! 🚀📚**

Last Updated: May 6, 2026
