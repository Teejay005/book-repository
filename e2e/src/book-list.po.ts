

import { browser, by, element } from 'protractor';
import {  } from './book.po';

export class BookPage {
  listOfBooks  = element.all(by.css('.selector'));
};
