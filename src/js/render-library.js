const renderLibraryEl = document.querySelector('.render-library-js');
const renderWatchedEl = document.querySelector('.render-watched-js');
const renderQueueEl = document.querySelector('.render-queue-js');
const renderContainer = document.querySelector('.gallery-section > .container');
import movieCardTpl from '../templates/movie-card.hbs';

renderLibraryEl.addEventListener('click', onClickLibrary);
renderWatchedEl.addEventListener('click', onClickWatched);
renderQueueEl.addEventListener('click', onClickQueue);

function onClickLibrary() {
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');
  const filmsStr = localStorage.getItem('watchedFilm');
  const filmsArr = JSON.parse(filmsStr);
  renderContainer.insertAdjacentHTML('beforeend', movieCardTpl(filmsArr));
}

function onClickWatched() {
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');
  renderContainer.innerHTML = '';
  const filmsStr = localStorage.getItem('watchedFilm');
  const filmsArr = JSON.parse(filmsStr);
  renderContainer.insertAdjacentHTML('beforeend', movieCardTpl(filmsArr));
}

function onClickQueue() {
  renderWatchedEl.classList.remove('active');
  renderQueueEl.classList.add('active');
  renderContainer.innerHTML = '';
  const filmsStr = localStorage.getItem('queueFilm');
  const filmsArr = JSON.parse(filmsStr);
  renderContainer.insertAdjacentHTML('beforeend', movieCardTpl(filmsArr));
}
