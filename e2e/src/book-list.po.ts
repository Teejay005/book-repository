import { browser, by, element } from 'protractor';

export class BookListPage {
  bookCountText = element(by.css('h2'));;
  listOfBooks  = element.all(by.css('.list-group-item'));
};
