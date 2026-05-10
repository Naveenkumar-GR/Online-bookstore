package com.bookstore.controller;

import com.bookstore.model.Order;
import com.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/api/checkout")
@CrossOrigin(origins = "*")
public class OrderController {
    @Autowired
    private OrderService orderService;
    
    @PostMapping
    public Order checkout(HttpSession session) {
        String sessionId = session.getId();
        return orderService.createOrder(sessionId);
    }
    
    @GetMapping
    public List<Order> getOrders(HttpSession session) {
        String sessionId = session.getId();
        return orderService.getOrdersBySessionId(sessionId);
    }
}
