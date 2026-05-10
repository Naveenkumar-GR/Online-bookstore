package com.bookstore.controller;

import com.bookstore.model.CartItem;
import com.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "*")
public class CartController {
    @Autowired
    private CartService cartService;
    
    @GetMapping
    public List<CartItem> getCart(HttpSession session) {
        String sessionId = session.getId();
        return cartService.getCartItems(sessionId);
    }
    
    @PostMapping
    public CartItem addToCart(@RequestBody Map<String, Object> request, HttpSession session) {
        String sessionId = session.getId();
        Long bookId = Long.parseLong(request.get("bookId").toString());
        Integer quantity = Integer.parseInt(request.get("quantity").toString());
        return cartService.addToCart(sessionId, bookId, quantity);
    }
    
    @DeleteMapping("/{id}")
    public void removeFromCart(@PathVariable Long id) {
        cartService.removeFromCart(id);
    }
    
    @GetMapping("/total")
    public Map<String, Double> getCartTotal(HttpSession session) {
        String sessionId = session.getId();
        Double total = cartService.getCartTotal(sessionId);
        return Map.of("total", total);
    }
}
