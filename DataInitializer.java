package com.bookstore.config;

import com.bookstore.model.Book;
import com.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {
    @Autowired
    private BookRepository bookRepository;
    
    @Override
    public void run(String... args) throws Exception {
        // Add sample books
        bookRepository.save(new Book(null, "To Kill a Mockingbird", "Harper Lee", 
            "A gripping tale of racial injustice and childhood innocence.", 12.99, 50, null));
        
        bookRepository.save(new Book(null, "1984", "George Orwell", 
            "A dystopian social science fiction novel about totalitarianism.", 13.99, 40, null));
        
        bookRepository.save(new Book(null, "Pride and Prejudice", "Jane Austen", 
            "A romantic novel of manners and marriage.", 10.99, 60, null));
        
        bookRepository.save(new Book(null, "The Great Gatsby", "F. Scott Fitzgerald", 
            "A classic American novel set in the Jazz Age.", 11.99, 45, null));
        
        bookRepository.save(new Book(null, "Brave New World", "Aldous Huxley", 
            "A dystopian novel depicting a futuristic society.", 14.99, 35, null));
        
        bookRepository.save(new Book(null, "The Catcher in the Rye", "J.D. Salinger", 
            "A story about adolescence and alienation.", 10.49, 55, null));
        
        bookRepository.save(new Book(null, "Jane Eyre", "Charlotte Brontë", 
            "A gothic romance novel with a strong female protagonist.", 12.49, 50, null));
        
        bookRepository.save(new Book(null, "Wuthering Heights", "Emily Brontë", 
            "A passionate story of love and revenge on the Yorkshire moors.", 11.49, 40, null));
    }
}
