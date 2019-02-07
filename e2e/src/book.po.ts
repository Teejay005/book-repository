import { browser, by, element } from 'protractor';
import { BookListPage } from './book-list.po';

export class BookPage {
  titleInput = element(by.id('title'));
  categoryInput = element(by.id('category'));
  descriptionInput = element(by.id('description'));
  addButton = element(by.id('addButton'));

  goToBooKListPageButton = element(by.css('.list-group-item'));

  get() {
    browser.get('/');
  }

  setTitle(title) {
    this.titleInput.sendKeys(title);
  };

  setCategory  (category) {
    this.categoryInput.sendKeys(category);
  };

  setDescription  (description) {
    this.categoryInput.sendKeys(description);
  };

  addBook () {
    this.addButton.click();
  };

  clickButtonToGoToBookListPage(){
    this.goToBooKListPageButton.click();
    return new BookListPage();
  }
};