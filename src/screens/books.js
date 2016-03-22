import {inject} from 'aurelia-framework';
import {BookCollection} from '../collections/bookCollection';
import {BookService} from '../services/bookService';

@inject(BookCollection, BookService)
export class Books {
  searchTerm = '';
  selectedBook = {
    title: '',
    author: '',
    genre: '',
    read: false
  };

  constructor(bookCollection, bookService) {
    this.bookCollection = bookCollection;
    this.bookService = bookService;
  }

  activate() {
    return this.bookCollection.getAllBooks()
      .then(() => this.books = this.bookCollection.books);
  }

  doSearchByGenre() {
    return this.bookService.getBooksByGenre(this.searchTerm)
      .then(response => this.bookList = response);
  }

  selectBook(book) {
    this.selectedBook = book;
  }
}
