import { BookPage } from './book.po';
import { BookListPage } from './book-list.po';


describe('Book Repository App', () => {
  let page: BookPage;
  let booklistPage: BookListPage;

  beforeEach(() => {
    page = new BookPage();
  });

  it('should load the page', () => {
    page.get();
  });

  it('should display input  text box', () => {
    expect(page.titleInput).toBeTruthy();
  });

  it('should display description text area box', () => {
    expect(page.descriptionInput).toBeTruthy();
  });

  it('should display category select box', () => {
    expect(page.categoryInput).toBeTruthy();
  });

  it('Should Add book to booklist', () => {
    page.setTitle("Things fall apart");
    page.setDescription("Things fall apart");

    page.addBook();
  });

  it('Should show book saved when Book List link is clicked', () => {
    booklistPage = page.clickButtonToGoToBookListPage();
    expect(booklistPage.bookCountText.getText()).toBe('Book List: 1');
  });
});
