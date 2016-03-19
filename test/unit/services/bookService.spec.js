import {BookService} from '../../../src/services/bookService';
import {MockHttpClient} from '../_helpers/mocks/httpClient';

describe('BookService', () => {
  let sut;
  let mockHttpClient;

  beforeEach(() => {
    mockHttpClient = new MockHttpClient();
    sut = new BookService(mockHttpClient);
  });

  afterEach(() => {
    mockHttpClient = null;
    sut = null;
  });

  describe('constructor', () => {
    it('should create properties', () => {
      expect(sut.httpClient).toBe(mockHttpClient);
    });
  });

  describe('getAllBooks', () => {
    it('should call the API at the correct url');
    it('should call the API with the correct params');
    it('should return a promise');
    it('should return a successful response as json');
    it('should catch any error');
  });
});
