import getRefs from './get-refs';

const refs = getRefs();

const options = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: 'bb99cf0123948bcb57616045b789da85',
  PAGE_NUM: 1,
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchByQuery(searchQuery);
}

function fetchByQuery(query) {
  fetch(
    `${options.BASE_URL}search/movie?api_key=${options.API_KEY}&language=en-US&page=${options.PAGE_NUM}&query=${query}`,
  )
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    });
}