import movieCardTpl from '../templates/movie-card.hbs';
import { filmApiService } from './render-movies-grid';
import { onRenderPagination } from './pagination';
import FilmLibrary from './class-library';
import { errorMsg, errorServerMsgStyles } from './notification';
export const filmLibrary = new FilmLibrary();

// const renderLibraryEl = document.querySelector('.render-library-js');
// const renderWatchedEl = document.querySelector('.render-watched-js');
// const renderQueueEl = document.querySelector('.render-queue-js');
const renderContainer = document.querySelector('.gallery-section > .container');


// renderLibraryEl.addEventListener('click', onClickLibrary);
// renderWatchedEl.addEventListener('click', onClickWatched);
// renderQueueEl.addEventListener('click', onClickQueue);
let libraryPage;
async function onClickLibrary() {
  libraryPage = filmLibrary.pageLibrary;
  let total_pages = 0;
  let width = document.body.clientWidth;

  if (width > 1023) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      const pageArr = [];
      total_pages = await Math.ceil(filmsArr.length / 9);
      
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 9));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
        errorMsg.showToast(errorServerMsgStyles);
    }
  }

  if (width > 767 && width < 1024) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 6);
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 6));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      errorMsg.showToast(errorServerMsgStyles);
    }
  }

  if (width > 200 && width < 768) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 4);
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 4));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      errorMsg.showToast(errorServerMsgStyles);
    }
  }
}

async function onClickWatched() {

  libraryPage = filmLibrary.pageLibrary;
  let total_pages = 0;
  let width = document.body.clientWidth;

  if (width > 1023) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      const pageArr = [];
      total_pages = await Math.ceil(filmsArr.length / 9);
      
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 9));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      errorMsg.showToast(errorServerMsgStyles);
    }
  }

  if (width > 767 && width < 1024) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 6);
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 6));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      errorMsg.showToast(errorServerMsgStyles);
    }
  }

  if (width > 200 && width < 768) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('watchedFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 4);
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 4));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      errorMsg.showToast(errorServerMsgStyles);
    }
  }

}
async function onClickQueue() {

  libraryPage = filmLibrary.pageLibrary;
  let total_pages = 0;
  let width = document.body.clientWidth;

  if (width > 1023) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('queueFilm');
      const filmsArr = await JSON.parse(filmsStr);
      const pageArr = [];
      total_pages = await Math.ceil(filmsArr.length / 9);
      
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 9));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
       errorMsg.showToast(errorServerMsgStyles);
    }
  }

  if (width > 767 && width < 1024) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('queueFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 6);
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 6));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      errorMsg.showToast(errorServerMsgStyles);
    }
  }

  if (width > 200 && width < 768) {
    try {
      filmApiService.query = '';
      const filmsStr = await localStorage.getItem('queueFilm');
      const filmsArr = await JSON.parse(filmsStr);
      total_pages = await Math.ceil(filmsArr.length / 4);
      const pageArr = [];
      for (let i = 0; i < total_pages - 1; i++) {
        pageArr.push(filmsArr.splice(0, 4));
      }
      pageArr.push(filmsArr);
      const moviesWithYearAndGenre = await getUpdatedLibraryMovieInfo(pageArr[libraryPage-1]);
      const result = await createCardMarkup(moviesWithYearAndGenre);
      await createCardMarkup(moviesWithYearAndGenre);
      await onRenderPagination(total_pages, libraryPage);
      return result;
    } catch {
      errorMsg.showToast(errorServerMsgStyles);
    }
  }

}

function getUpdatedLibraryMovieInfo(movies) {
  return movies.map(movie => ({
    ...movie,
    genres: movie.genres.map(({ name }) => name).join(', '),
    releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : '',
    voteAverage: movie.vote_average.toFixed(1),
  }));
}

function createCardMarkup(results) {
  renderContainer.innerHTML = '';
  const elements = movieCardTpl(results);
  renderContainer.innerHTML = elements;
  const voteAverageRef = document.querySelectorAll('.vote-average');
  voteAverageRef.forEach(el => el.classList.add('is-visible'));
}

export { onClickWatched, onClickQueue, onClickLibrary };
