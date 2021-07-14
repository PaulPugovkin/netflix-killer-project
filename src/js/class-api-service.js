const options = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: 'bb99cf0123948bcb57616045b789da85',
};

export default class FilmApiService {
  constructor() {
    this.searchQuery = '';
    this.pageNumber = 1;
  }

  async fetchOnClickMovie() {
    const response = await fetch(
      `${options.BASE_URL}movie/${this.searchQuery}?api_key=${options.API_KEY}`,
    );
    return response.json();
  }

  async fetchPopularMovie() {
    const response = await fetch(
      `${options.BASE_URL}trending/movie/day?api_key=${options.API_KEY}&page=${this.pageNumber}`,
    );
    return await response.json();
  }

  async fetchGenres() {
    const response = await fetch(
      `${options.BASE_URL}genre/movie/list?api_key=${options.API_KEY}&page=${this.pageNumber}`,
    );
    return response.json();
  }

  async fetchByQuery() {
    const response = await fetch(
      `${options.BASE_URL}search/movie?api_key=${options.API_KEY}&language=en-US&page=${this.pageNumber}&query=${this.searchQuery}`,
    );
    return response.json();
  }

  incrementPage() {
    this.pageNumber += 1;
  }

  decrementPage() {
    this.pageNumber -= 1;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get page() {
    return this.pageNumber;
  }

  set page(newPage) {
    this.pageNumber = newPage;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}