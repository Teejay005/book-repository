import { TestBed, async } from '@angular/core/testing';
import { BookComponent } from './book.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        BookComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BookComponent);
    const bookComponent = fixture.debugElement.componentInstance;
    expect(bookComponent).toBeTruthy();
  });

  it(`should have a book object`, () => {
    const fixture = TestBed.createComponent(BookComponent);
    console.log(fixture.debugElement.componentInstance)
    const bookComponent = fixture.debugElement.componentInstance;
    expect(bookComponent.book.title).toEqual('Talking with Tech Leads');
    expect(bookComponent.book.category.toString()).toEqual('Drama');
    expect(bookComponent.book.description).toEqual('A good read');
  });

//   it('should render title in a h1 tag', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to book-repository!');
//   });
});