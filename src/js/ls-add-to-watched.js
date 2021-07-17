import {onClickWatched} from './render-library'

const renderLibraryEl = document.querySelector('.render-watched-js');
const headerEl = document.querySelector('.header-main')

export default function addToLockalS(filmUser) {
  const btnWatchedEl = document.querySelector('.btn-watched-js');

  if (!localStorage.watchedFilm) {
    btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
  } else {
    const filmsStr = localStorage.getItem('watchedFilm');
    btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);

    if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
      btnWatchedEl.innerText = 'remove from watched';
      btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
    }
  }

  function onClickBtnAddToWatched() {
    btnWatchedEl.classList.add('modal-button-color')

    if (!localStorage.watchedFilm) {
      const films = [];

      films.push(filmUser);
      localStorage.setItem(`watchedFilm`, JSON.stringify(films));
      btnWatchedEl.innerText = 'remove from watched';
      if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
        onClickWatched();
      }
    } else {
      const filmsStr = localStorage.getItem('watchedFilm');

      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        btnWatchedEl.innerText = 'remove from watched';
        onClickBtnRemoveToWatched();
      } else {
        const filmsArr = JSON.parse(filmsStr);

        filmsArr.push(filmUser);
        localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
        btnWatchedEl.innerText = 'remove from watched';
        if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
          onClickWatched();
        }
      }
    }
  }

  function onClickBtnRemoveToWatched() {
    btnWatchedEl.classList.remove('modal-button-color')

    const filmsStr = localStorage.getItem('watchedFilm');
    const filmsArr = JSON.parse(filmsStr);

    if (filmsArr.length === 1) {
      localStorage.removeItem('watchedFilm');
      btnWatchedEl.innerText = 'add to watched';
      if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
        onClickWatched();
      }
      
      return;
    } else {
      if (filmsArr.length > 1) {
        for (let i = 0; i <= filmsArr.length; i++) {
          if (filmsArr[i].id === filmUser.id) {
            filmsArr.splice(i, 1);
            localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
            if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
              onClickWatched();
            }
            btnWatchedEl.innerText = 'add to watched';
            btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
          }
        }
      }
    }
  }
}
