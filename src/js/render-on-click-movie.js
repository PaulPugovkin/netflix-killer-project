import getRefs from './get-refs';
import movieModalCard from '../templates/movie-modal-card.hbs';
import onOpenModal from './modal-open';
import addToWatchedLockalS from './ls-add-to-watched';
import addToQueueLockalS from './ls-add-to-queue';
import FilmApiService from './class-api-service';
import { loader, loaderStyles } from './spinner';
import { errorMsg, errorServerMsgStyles } from './notification';

const refs = getRefs();

const filmApiService = new FilmApiService();

refs.moviesContainer.addEventListener('click', getMovieById);

async function getMovieById(e) {
  if (e.target.className === 'card-image-js') {
    loader.showLoading(loaderStyles)
  };
  
  try {
    if (e.target.className !== 'card-image-js') return;
    refs.modal.innerHTML = '';

    filmApiService.movie = e.target.dataset.id;
    const result = await filmApiService.fetchOnClickMovie();
    const movies = await filmApiService.fetchVideoMovie();
    
    if (movies.results.length > 0) {
      const resultForRender = {
        ...result,
        trailers: movies.results
      };
      await renderOpenedMovie(resultForRender);
    } else {
      await renderOpenedMovie(result);
    }
    
    onOpenModal();
    await addToWatchedLockalS(result);
    await addToQueueLockalS(result);
  } catch {
    errorMsg.showToast(errorServerMsgStyles);
  }
  loader.hideLoading();
}

async function renderOpenedMovie(res) {
  const result = await refs.modal.insertAdjacentHTML('beforeend', movieModalCard(res));
}
