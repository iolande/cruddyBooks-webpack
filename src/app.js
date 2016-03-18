export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'books'], name: 'books', moduleId: 'screens/books', nav: true, title: 'Books' }
    ]);

    this.router = router;
  }
}
