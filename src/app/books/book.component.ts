import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from './book.service';
import { Category } from './book';

@Component({
  selector: 'books-app',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  books = [];
  categoryValues = ["Comedy", "Drama", "Sport"];

  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(private bookService: BookService) { }

  submit() {
    this.bookService.add(this.bookForm.value);
    this.bookForm.reset();
  }
}