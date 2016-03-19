import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
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

  // TODO: change this to the correct format for fetch
  // getBooksByGenre(genre) {
  //   return this.httpClient.createRequest('books')
  //       .asGet()
  //       .withParams({
  //         genre: genre
  //       })
  //     .send()
  //     .then(response => response.json())
  //     .catch(this.serviceError);
  // }

  // TODO: change this to the correct format for fetch
  // postBook(data) {
  //   const content = JSON.stringify(data);

  //   return this.httpClient.createRequest('books')
  //     .asPost()
  //     .withContent(content)
  //     .send();
  // }

  serviceError(response) {
    console.log(response);
  }
}
