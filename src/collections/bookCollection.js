import {inject} from 'aurelia-framework';
import {BookService} from '../services/bookService';

@inject(BookService)
export class BookCollection {
  books = []

  constructor(bookService) {
    this.bookService = bookService;
  }

  getAllBooks() {
    return this.bookService.getBooks()
      .then(response => this.books = response);
  }
}
