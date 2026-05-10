package com.bookstore.service;

import com.bookstore.model.Order;
import com.bookstore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private CartService cartService;
    
    public Order createOrder(String sessionId) {
        Double totalAmount = cartService.getCartTotal(sessionId);
        
        Order order = new Order();
        order.setSessionId(sessionId);
        order.setTotalAmount(totalAmount);
        order.setOrderDate(LocalDateTime.now());
        order.setStatus("COMPLETED");
        
        Order savedOrder = orderRepository.save(order);
        cartService.clearCart(sessionId);
        
        return savedOrder;
    }
    
    public List<Order> getOrdersBySessionId(String sessionId) {
        return orderRepository.findBySessionId(sessionId);
    }
}
