import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book, Category } from './book';

@Component({
  selector: 'books-app',
  templateUrl: './book.component.html'
})

export class BookComponent {
  book: Book = {
    title: "Talking with Tech Leads",
    category: Category.Drama,
    description: "A good read"
  }

  bookForm = new FormGroup({
    title: new FormControl(this.book.title),
    category: new FormControl(this.book.category),
    description: new FormControl(this.book.description)
  });

  onSubmit() {
    console.warn(this.bookForm.value);
  }
}