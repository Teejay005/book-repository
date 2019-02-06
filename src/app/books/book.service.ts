import { Injectable } from '@angular/core';
import { Book } from './book';
 
@Injectable({
  providedIn: 'root',
})

export class BookService {
  books: Book[] = [];
 
  add(book: Book) {
    this.books.push(book);
  }
 
  clear() {
    this.books = [];
  }

  getBooks(): Book[]{
      return this.books;
  }
}