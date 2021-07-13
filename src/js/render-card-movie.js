import getRefs from './get-refs';
import movieCardTpl from '../templates/movie-card.hbs';
// import { fetchPopularMovies} from './fetch-popular';

// import { loader, loaderStyles } from "./spinner"


const refs = getRefs();

//закоментила Аня, запускаю фетч из файла пагинации
// fetchCardMovie();
// рендер карточек популярных фильмов до ввода запроса


// export default function fetchCardMovie() {
//     loader.showLoading(loaderStyles);
//     fetchPopularMovies().then(results => {
//         // console.log(results);
// createCardMarkup(results);
// loader.hideLoading();
// });
// }

// функция отображения разметки
export function createCardMarkup(results) {
    // insertAdjacentHTML добавляет новые элменеты, а нам нужно их менять при переключении страницы
    // refs.moviesContainer.insertAdjacentHTML('beforeend', movieCardTpl(results));
    const elements = movieCardTpl(results);
    refs.moviesContainer.innerHTML = elements;
}

