export class MockHttpClient {
  fetch(url) {
    const response = this.itemStub;
    this.url = url;

    return new Promise((resolve) => {
      resolve({ json: () => response });
    });
  }

  configure(func) {}
}
