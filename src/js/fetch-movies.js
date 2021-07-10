const API_KEY = 'bb99cf0123948bcb57616045b789da85';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie';


// fetch популярных фильмов на сегодня, до ввода запроса
import getRefs from './get-refs';
import movieCardTpl from '../templates/movie-card.hbs';


const refs = getRefs();

fetchCardMovie();

function fetchCardMovie() {
  fetchPopularMovies().then(results => {
    createCardMarkup(results);
    });
  }

function fetchPopularMovies() {
  return fetch(`${BASE_URL}/day?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    });
}
// console.log(fetchPopularMovies());


function createCardMarkup(results) {
  refs.moviesContainer.insertAdjacentHTML('beforeend', movieCardTpl(results));
}


