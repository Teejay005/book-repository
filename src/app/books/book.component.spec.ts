import { TestBed, async } from '@angular/core/testing';
import { BookComponent } from './book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Book } from './book';
import { BookService } from './book.service';

describe('BookComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        BookComponent
      ],
      providers: [BookService]
    }).compileComponents();
  }));

  it('should create the Book Component', () => {
    const fixture = TestBed.createComponent(BookComponent);
    const bookComponent = fixture.debugElement.componentInstance;
    expect(bookComponent).toBeTruthy();
  });

 
  it('form invalid when empty', () => {
    const fixture = TestBed.createComponent(BookComponent);
    const bookComponent = fixture.debugElement.componentInstance;
    expect(bookComponent.bookForm.valid).toBeFalsy();

    let title = bookComponent.bookForm.controls['title'];
    expect(title.valid).toBeFalsy();

    let description = bookComponent.bookForm.controls['description'];
    expect(title.valid).toBeFalsy();

    let category = bookComponent.bookForm.controls['category'];
    expect(title.valid).toBeFalsy();
  });

  it('submitting a form emits a Books', () => {
    let bookService = TestBed.get(BookService);
    const fixture = TestBed.createComponent(BookComponent);
    const bookComponent = fixture.debugElement.componentInstance;
    
    expect(bookComponent.bookForm.valid).toBeFalsy();
    bookComponent.bookForm.controls['title'].setValue("Shakespare");
    bookComponent.bookForm.controls['description'].setValue("A wonderful book");
    bookComponent.bookForm.controls['category'].setValue("Drama");
    expect(bookComponent.bookForm.valid).toBeTruthy();

    bookComponent.submit();

    expect(bookService.getBooks()[0].title).toBe("Shakespare");
    expect(bookService.getBooks()[0].category).toBe("Drama");
    expect(bookService.getBooks()[0].description).toBe("A wonderful book");
  });
});