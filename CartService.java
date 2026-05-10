package com.bookstore.service;

import com.bookstore.model.CartItem;
import com.bookstore.model.Book;
import com.bookstore.repository.CartItemRepository;
import com.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartItemRepository cartItemRepository;
    
    @Autowired
    private BookRepository bookRepository;
    
    public List<CartItem> getCartItems(String sessionId) {
        return cartItemRepository.findBySessionId(sessionId);
    }
    
    public CartItem addToCart(String sessionId, Long bookId, Integer quantity) {
        Optional<Book> book = bookRepository.findById(bookId);
        if (book.isEmpty()) {
            throw new RuntimeException("Book not found");
        }
        
        Optional<CartItem> existingItem = cartItemRepository.findBySessionIdAndBookId(sessionId, bookId);
        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + quantity);
            return cartItemRepository.save(item);
        }
        
        CartItem cartItem = new CartItem();
        cartItem.setSessionId(sessionId);
        cartItem.setBook(book.get());
        cartItem.setQuantity(quantity);
        return cartItemRepository.save(cartItem);
    }
    
    public void removeFromCart(Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }
    
    public Double getCartTotal(String sessionId) {
        List<CartItem> items = cartItemRepository.findBySessionId(sessionId);
        return items.stream()
            .mapToDouble(item -> item.getBook().getPrice() * item.getQuantity())
            .sum();
    }
    
    public void clearCart(String sessionId) {
        cartItemRepository.deleteBySessionId(sessionId);
    }
}
