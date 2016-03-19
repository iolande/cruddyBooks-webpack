import {inject} from 'aurelia-framework';
import {BookCollection} from '../collections/bookCollection';

@inject(BookCollection)
export class Books {
  constructor(bookCollection) {
    this.bookCollection = bookCollection;
  }

  activate() {
    return this.bookCollection.getAllBooks();
  }
}
