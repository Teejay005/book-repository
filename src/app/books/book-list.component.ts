import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'books-list-app',
  templateUrl: './book-list.component.html'
})

export class BookListComponent implements OnInit {
  books = [];
  constructor(private bookService: BookService) { }
 
  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }
}