import {BookCollection} from '../../../src/collections/bookCollection';

class MockBookService {}

describe('BookCollection', () => {
  let sut;
  let mockBookService;

  beforeEach(() => {
    mockBookService = new MockBookService();
    sut = new BookCollection(mockBookService);
  });

  afterEach(() => {
    mockBookService = null;
    sut = null;
  });

  describe('constructor', () => {
    it('should create properties', () => {
      expect(sut.bookService).toBe(mockBookService);
    });
  });

  describe('getAllBooks', () => {
    it('should return a promise');
    it('should set the books array to the json returned from a successful response');
    it('should call bookService.getBooks once');
  });
});
