@echo off
REM Online Bookstore - Quick Start Script for Windows

echo.
echo ====================================
echo Online Bookstore - Quick Start
echo ====================================
echo.

cd backend

echo Checking for Java...
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Java is not installed or not in PATH
    echo Please install Java 17 or higher
    pause
    exit /b 1
)

echo Java found!
echo.
echo Building the project...
call mvn clean package

if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo Build successful!
echo.
echo Starting the application...
echo The application will run on: http://localhost:8080
echo.

call mvn spring-boot:run

pause
