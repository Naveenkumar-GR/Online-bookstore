package com.bookstore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "index";
    }
    
    @GetMapping("/cart")
    public String cart() {
        return "cart";
    }
    
    @GetMapping("/book")
    public String bookDetail() {
        return "book-detail";
    }
    
    @GetMapping("/checkout")
    public String checkout() {
        return "checkout";
    }
}
