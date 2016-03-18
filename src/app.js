export class App {
  configureRouter(config, router) {
    config.title = 'Cruddy books';
    config.map([
      { route: ['', 'books'], name: 'books', moduleId: 'screens/books', nav: true, title: 'Books' }
    ]);

    this.router = router;
  }
}
