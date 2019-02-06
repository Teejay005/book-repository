import { BookService } from "./book.service";
import { Book, Category } from "./book";

describe('BookService', () => {
    let service: BookService;
    beforeEach(() => { service = new BookService(); });

    it('should add a book', () => {
        let book = new Book("Literature", Category.Drama, "Good");
        service.add(book);
        expect(service.getBooks()[0]).toBe(book);
    });

    it('should return list of books', () => {
        let book1 = new Book("Literature", Category.Drama, "Good");
        let book2 = new Book("Tiger Woods", Category.Sport, "All you need to know!");
        service.add(book1);
        service.add(book1);
        
        expect(service.getBooks().length).toBe(2);
    });
});