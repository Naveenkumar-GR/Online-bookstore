# QUICK START GUIDE - Online Bookstore

## 🚀 How to Run

### On Windows:
1. Open Command Prompt or PowerShell
2. Navigate to the project folder:
   ```
   cd c:\Users\manoj\Documents\online-bookstore
   ```
3. Double-click `run.bat` OR run:
   ```
   mvn spring-boot:run -f backend/pom.xml
   ```

### On Mac/Linux:
1. Open Terminal
2. Navigate to the project folder:
   ```
   cd ~/Documents/online-bookstore
   ```
3. Make the script executable:
   ```
   chmod +x run.sh
   ```
4. Run:
   ```
   ./run.sh
   ```
   OR manually run:
   ```
   cd backend
   mvn clean package
   mvn spring-boot:run
   ```

## 📍 Access the Application

Once the application starts, open your browser and go to:
```
http://localhost:8080
```

## 🎯 Features to Try

1. **Browse Books** - View all available books on the homepage
2. **Search** - Use the search bar to find books by title
3. **Add to Cart** - Click "Add to Cart" button on any book
4. **View Cart** - Click the cart icon in the top right (🛒)
5. **Remove Items** - Remove books from cart if needed
6. **Checkout** - Fill in shipping/payment info and place order
7. **Order Confirmation** - See your order confirmation message

## 🔧 Technical Details

- **Backend Framework**: Spring Boot 3.1.0
- **Java Version**: Java 17
- **Database**: H2 (in-memory, resets on restart)
- **Frontend**: HTML5, CSS3, JavaScript
- **Build Tool**: Maven 3.6+

## 📚 Sample Data

The application includes 8 pre-loaded books with:
- Title
- Author
- Description
- Price
- Stock Quantity

All books are created automatically when the app starts.

## 🐛 Troubleshooting

### Port 8080 already in use?
Edit `backend/src/main/resources/application.properties` and change:
```
server.port=8080
```
to another port like `8081`

### Maven not found?
Make sure Maven is installed and added to your PATH:
```
mvn -v
```

### Database issues?
The H2 database is in-memory and will reset on each restart. This is normal for this demo.

## 📞 API Testing

You can test the REST APIs using Postman or cURL:

```bash
# Get all books
curl http://localhost:8080/api/books

# Search books
curl "http://localhost:8080/api/books/search?query=gatsby"

# Get specific book
curl http://localhost:8080/api/books/1
```

## 📖 Project Structure

```
online-bookstore/
├── backend/
│   ├── src/main/java/com/bookstore/
│   │   ├── controller/     (REST endpoints)
│   │   ├── service/        (Business logic)
│   │   ├── model/          (Entity classes)
│   │   ├── repository/     (Database access)
│   │   └── config/         (Configuration & data init)
│   ├── src/main/resources/
│   │   ├── templates/      (HTML pages)
│   │   └── static/         (CSS, JS files)
│   └── pom.xml            (Maven configuration)
├── README.md              (Full documentation)
└── run.bat/.sh           (Quick start scripts)
```

## ✨ Learning Outcomes

By exploring this project, you'll learn:
- REST API design with Spring Boot
- Frontend-Backend integration
- Entity relationship modeling
- HTML/CSS responsive design
- JavaScript async operations
- Spring Data JPA
- Session management
- Database operations with JDBC

Enjoy! 🎉
