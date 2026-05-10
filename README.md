# Online Bookstore Application

A full-stack online bookstore application built with Spring Boot, HTML, CSS, and JavaScript.

## Project Structure

```
online-bookstore/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/bookstore/
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── service/
│   │   │   │   ├── repository/
│   │   │   │   ├── config/
│   │   │   │   └── BookstoreApplication.java
│   │   │   └── resources/
│   │   │       ├── templates/ (HTML files)
│   │   │       ├── static/ (CSS, JS files)
│   │   │       └── application.properties
│   └── pom.xml
```

## Features

✅ **Homepage** - Display list of books with title, author, and price
✅ **Search Functionality** - Search books by title
✅ **Book Details** - View book description and price
✅ **Shopping Cart** - Add/remove items with quantity management
✅ **Cart Page** - View all items and total price
✅ **Checkout** - Order confirmation with order details
✅ **REST API** - Complete REST endpoints for all operations
✅ **Database** - H2 in-memory database with sample data

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

## Installation & Running

### 1. Navigate to the backend directory
```bash
cd online-bookstore/backend
```

### 2. Build the project
```bash
mvn clean package
```

### 3. Run the application
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

## API Endpoints

### Books
- `GET /api/books` - Get all books
- `GET /api/books/{id}` - Get book by ID
- `GET /api/books/search?query={query}` - Search books by title

### Cart
- `GET /api/cart` - Get user's cart items
- `POST /api/cart` - Add book to cart
- `DELETE /api/cart/{id}` - Remove item from cart
- `GET /api/cart/total` - Get cart total

### Checkout
- `POST /api/checkout` - Place an order
- `GET /api/checkout` - Get user's orders

## Tech Stack

- **Backend**: Java 17, Spring Boot 3.1.0, Spring Data JPA, Hibernate
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Database**: H2 (In-memory)
- **Build Tool**: Maven

## Sample Books

The application comes pre-loaded with 8 classic books:
1. To Kill a Mockingbird - Harper Lee
2. 1984 - George Orwell
3. Pride and Prejudice - Jane Austen
4. The Great Gatsby - F. Scott Fitzgerald
5. Brave New World - Aldous Huxley
6. The Catcher in the Rye - J.D. Salinger
7. Jane Eyre - Charlotte Brontë
8. Wuthering Heights - Emily Brontë

## Project Learning Outcomes

- HTML5 semantic markup for UI design
- CSS3 responsive design and styling
- Vanilla JavaScript for interactive features
- Spring Boot REST API development
- Spring Data JPA for database operations
- MVC architecture with Spring Web MVC
- Entity relationships and database modeling
- Session management for shopping carts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- User authentication system
- Book reviews and ratings
- Book images and thumbnails
- Inventory management
- Order history tracking
- Payment gateway integration
- Email notifications
- Admin dashboard

## License

MIT License
