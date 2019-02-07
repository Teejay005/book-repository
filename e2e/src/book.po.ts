import { browser, by, element } from 'protractor';
import { BookListPage } from './book-list.po';

export class BookPage {
  titleInput = element(by.model('title'));
  categoryInput = element(by.binding('category'));
  descriptionInput = element(by.binding('description'));
  addButton = element(by.binding('add'));

  get() {
    browser.get('/');
  }

  setTitle(title) {
    this.titleInput.sendKeys(title);
  };

  setCategory = function (category) {
    this.categoryInput.sendKeys(category);
  };

  setDescription = function (description) {
    this.categoryInput.sendKeys(description);
  };

  addBook = function () {
    this.addButton.click();
    return bookListPage();
  };
};