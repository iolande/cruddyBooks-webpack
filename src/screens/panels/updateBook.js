import { inject } from 'aurelia-framework';
// import { EventAggregator } from 'aurelia-event-aggregator';
import { BookService } from '../../services/bookService';

@inject(BookService)
export class UpdateBook {
  selectedBook = {
    title: '',
    author: '',
    genre: '',
    read: false
  };

  searchTerm = '';

  constructor(bookService) {
    this.bookService = bookService;
  }

  doSearchByGenre() {
    return this.bookService.getBooksByGenre(this.searchTerm)
      .then(response => { this.bookList = response; });
  }

  selectBook(book) {
    // this.eventAggregator.publish('select:book', book);
    this.selectedBook = book;
  }
}
