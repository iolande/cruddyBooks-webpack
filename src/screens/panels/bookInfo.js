import {inject} from 'aurelia-framework';
import {BookCollection} from '../../collections/bookCollection';

@inject(BookCollection)
export class BookInfo {
  constructor(bookCollection) {
    this.books = bookCollection.books;
  }
}
