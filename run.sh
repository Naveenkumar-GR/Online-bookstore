#!/bin/bash

# Online Bookstore - Quick Start Script for Linux/Mac

echo ""
echo "===================================="
echo "Online Bookstore - Quick Start"
echo "===================================="
echo ""

cd backend

echo "Checking for Java..."
if ! command -v java &> /dev/null; then
    echo "ERROR: Java is not installed or not in PATH"
    echo "Please install Java 17 or higher"
    exit 1
fi

echo "Java found!"
echo ""
echo "Building the project..."
mvn clean package

if [ $? -ne 0 ]; then
    echo "ERROR: Build failed"
    exit 1
fi

echo ""
echo "Build successful!"
echo ""
echo "Starting the application..."
echo "The application will run on: http://localhost:8080"
echo ""

mvn spring-boot:run
