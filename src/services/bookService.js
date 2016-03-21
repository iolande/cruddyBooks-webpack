import {inject} from 'aurelia-framework';
import {json, HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';

@inject(HttpClient)
export class BookService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.httpClient.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8000/api/');
    });
  }

  getBooks() {
    return this.httpClient.fetch('books')
      .then(response => response.json(), response => this.serviceError)
      .catch(this.serviceError);
  }

  getBooksByGenre(genre) {
    return this.httpClient.fetch(`books?genre=${genre}`)
      .then(response => response.json())
      .catch(this.serviceError);
  }

  // postBook(data) {
  //   return this.httpClient.fetch('books', {
  //       method: 'POST',
  //       body: json(data)
  //     })
  //     .then(response => response.json())
  //     .catch(this.serviceError);
  // }

  serviceError(response) {
    console.log(response);
  }
}
