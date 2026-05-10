# Online Bookstore - Complete Setup and Usage Guide

## Project Overview

This is a **full-stack online bookstore application** with the following features:
- 📚 Browse and search books
- 🔍 View detailed book information
- 🛒 Add books to shopping cart
- 💳 Complete checkout with order confirmation
- 📊 REST API endpoints for all operations

## Tech Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Java 17, Spring Boot 3.1.0 |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Database** | H2 (In-memory) |
| **Build Tool** | Maven 3.6+ |

## Prerequisites

Before running the application, install the following:

### 1. Java 17 or Higher
- **Windows**: Download from [oracle.com](https://www.oracle.com/java/technologies/downloads/#java17)
- **Mac/Linux**: 
  ```bash
  # Using Homebrew on Mac
  brew install openjdk@17
  
  # Using apt on Linux
  sudo apt-get install openjdk-17-jdk
  ```
- **Verify Installation**:
  ```bash
  java -version
  ```

### 2. Maven 3.6 or Higher
- **Windows**: Download from [maven.apache.org](https://maven.apache.org/download.cgi)
- **Mac/Linux**:
  ```bash
  # Using Homebrew on Mac
  brew install maven
  
  # Using apt on Linux
  sudo apt-get install maven
  ```
- **Verify Installation**:
  ```bash
  mvn -v
  ```

## Project Structure

```
online-bookstore/
├── backend/
│   ├── src/main/
│   │   ├── java/com/bookstore/
│   │   │   ├── BookstoreApplication.java          # Main Spring Boot Application
│   │   │   ├── controller/                        # REST Controllers
│   │   │   │   ├── HomeController.java            # MVC Routes
│   │   │   │   ├── BookController.java            # Book API
│   │   │   │   ├── CartController.java            # Cart API
│   │   │   │   └── OrderController.java           # Order/Checkout API
│   │   │   ├── model/                            # JPA Entities
│   │   │   │   ├── Book.java
│   │   │   │   ├── CartItem.java
│   │   │   │   └── Order.java
│   │   │   ├── service/                          # Business Logic
│   │   │   │   ├── BookService.java
│   │   │   │   ├── CartService.java
│   │   │   │   └── OrderService.java
│   │   │   ├── repository/                       # Data Access Layer
│   │   │   │   ├── BookRepository.java
│   │   │   │   ├── CartItemRepository.java
│   │   │   │   └── OrderRepository.java
│   │   │   └── config/
│   │   │       └── DataInitializer.java          # Sample Data
│   │   └── resources/
│   │       ├── application.properties            # Configuration
│   │       ├── templates/                        # HTML Pages
│   │       │   ├── index.html                    # Homepage
│   │       │   ├── book-detail.html              # Book Details Page
│   │       │   ├── cart.html                     # Shopping Cart
│   │       │   └── checkout.html                 # Checkout Page
│   │       └── static/
│   │           ├── css/
│   │           │   └── style.css                 # Styling
│   │           └── js/
│   │               ├── main.js                   # Homepage Logic
│   │               ├── book-detail.js            # Book Details Logic
│   │               ├── cart.js                   # Cart Logic
│   │               └── checkout.js               # Checkout Logic
│   └── pom.xml                                   # Maven Configuration
├── run.bat                                       # Windows Quick Start Script
├── run.sh                                        # Mac/Linux Quick Start Script
└── README.md                                     # Project Documentation
```

## Installation & Setup

### Method 1: Using Quick Start Scripts (Recommended)

#### On Windows:
```bash
cd c:\Users\manoj\Documents\online-bookstore
run.bat
```

#### On Mac/Linux:
```bash
cd ~/Documents/online-bookstore
chmod +x run.sh
./run.sh
```

### Method 2: Manual Build & Run

1. **Navigate to backend directory**:
   ```bash
   cd online-bookstore/backend
   ```

2. **Clean and build the project**:
   ```bash
   mvn clean package
   ```
   > This will compile the Java code and package everything into a JAR file.

3. **Run the application**:
   ```bash
   mvn spring-boot:run
   ```

4. **Access the application**:
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Features & Usage

### 1. Homepage (`/`)
- **View all books** with title, author, description, and price
- **Search books** by title using the search bar
- **Click on book title** to view detailed information
- **Add to Cart** button to add books to your shopping cart
- **Cart counter** in the top-right showing number of items

### 2. Book Details (`/book?id=<id>`)
- **Full book information** including description and rating
- **Quantity selector** to choose how many copies to add
- **Stock availability** information
- **Add to Cart** with custom quantity
- **Back to Home** link to return to homepage

### 3. Shopping Cart (`/cart`)
- **View all cart items** in a table format
- **See total price** and number of items
- **Remove items** from cart with confirmation
- **Proceed to Checkout** button to place an order

### 4. Checkout (`/checkout`)
- **Order review** showing all items and total price
- **Shipping information form** (Full Name, Email, Address, City, Zip)
- **Payment information form** (Card Number, Expiry, CVV)
- **Place Order** button to confirm purchase
- **Order confirmation** with Order ID and status

## REST API Endpoints

### Book Endpoints
```
GET    /api/books                    # Get all books
GET    /api/books/{id}               # Get book by ID
GET    /api/books/search?query={q}   # Search books by title
POST   /api/books                    # Create new book (admin)
```

### Cart Endpoints
```
GET    /api/cart                     # Get current cart items
POST   /api/cart                     # Add item to cart
DELETE /api/cart/{id}                # Remove item from cart
GET    /api/cart/total               # Get cart total price
```

### Checkout Endpoints
```
POST   /api/checkout                 # Place order
GET    /api/checkout                 # Get user's orders
```

## Sample Data

The application comes pre-loaded with 8 classic books:

| Title | Author | Price |
|-------|--------|-------|
| To Kill a Mockingbird | Harper Lee | $12.99 |
| 1984 | George Orwell | $13.99 |
| Pride and Prejudice | Jane Austen | $10.99 |
| The Great Gatsby | F. Scott Fitzgerald | $11.99 |
| Brave New World | Aldous Huxley | $14.99 |
| The Catcher in the Rye | J.D. Salinger | $10.49 |
| Jane Eyre | Charlotte Brontë | $12.49 |
| Wuthering Heights | Emily Brontë | $11.49 |

## Testing with cURL or Postman

### Get All Books
```bash
curl http://localhost:8080/api/books
```

### Search Books
```bash
curl "http://localhost:8080/api/books/search?query=gatsby"
```

### Get Book by ID
```bash
curl http://localhost:8080/api/books/1
```

### Get Cart Items
```bash
curl http://localhost:8080/api/cart
```

### Add to Cart
```bash
curl -X POST http://localhost:8080/api/cart \
  -H "Content-Type: application/json" \
  -d '{"bookId": 1, "quantity": 2}'
```

## Troubleshooting

### Issue: "Maven command not found"
**Solution**: Ensure Maven is installed and added to your system PATH.
- Windows: Add Maven `bin` folder to System Environment Variables
- Mac/Linux: Check Maven is in `/usr/local/bin/mvn`

### Issue: "Java version not compatible"
**Solution**: Ensure you have Java 17 or higher installed.
```bash
java -version
```
Update to Java 17+ if needed.

### Issue: "Port 8080 already in use"
**Solution**: Change the port in `backend/src/main/resources/application.properties`:
```properties
server.port=8081
```
Then restart the application.

### Issue: "Database connection error"
**Solution**: The H2 database is in-memory and resets on restart. This is normal for development.
To persist data, update `application.properties`:
```properties
spring.datasource.url=jdbc:h2:./bookstore
spring.jpa.hibernate.ddl-auto=update
```

## Performance Tips

1. **First Build Takes Longer**: Maven downloads dependencies on first run (~2-3 minutes)
2. **Use DevTools**: Spring DevTools is included for hot reload during development
3. **Check H2 Console**: Access H2 database console at `http://localhost:8080/h2-console`

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Book reviews and ratings
- [ ] Book cover images
- [ ] Order history and tracking
- [ ] Admin panel for inventory management
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Product recommendations
- [ ] Wishlist functionality
- [ ] Multiple payment methods

## Project Learning Outcomes

✅ Full-stack development with Spring Boot  
✅ REST API design and implementation  
✅ Frontend with HTML, CSS, JavaScript  
✅ Database design with JPA/Hibernate  
✅ MVC architecture  
✅ Session management  
✅ Error handling and validation  

## Support & Documentation

- **Spring Boot Docs**: [spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
- **Maven Guide**: [maven.apache.org](https://maven.apache.org)
- **H2 Database**: [h2database.com](http://www.h2database.com)

---

**Happy coding!** 🚀📚
