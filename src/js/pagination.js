import onRenderPagination from './render-pagination';
import FilmApiService from './class-api-service';
import getRefs from './get-refs';
import { createCardMarkup } from './render-card-movie'
// import { fetchGenresArray } from './fetch-popular';
import { renderCardByQuery } from './fetch-by-query';
import { loader, loaderStyles } from "./spinner"
const refs = getRefs();
const filmApiService = new FilmApiService();

refs.searchForm.addEventListener('submit', onSearchImage);
refs.paginationEl.addEventListener('click', onClickPagination);
refs.searchForm.addEventListener('submit', onClickPagination);

// ренедерит популярные фильмы на страницу и по пагинации
function onFetchPopularPagination(isRenderPaginationNeeded = false) {
    loader.showLoading(loaderStyles);
    return filmApiService.fetchPopularMovie()
        .then(data => {
            const { total_pages, results } = data;
            if (isRenderPaginationNeeded) onRenderPagination(total_pages, filmApiService.page)
            createCardMarkup(results)
            loader.hideLoading();
            onfetchGenresArray()
                .then((genresArray) => {
                    const { genres } = genresArray;
                    console.log(genres)
                    results.map(movie => ({ 
                        ...movie,
                        genres: genres.filter((genre) => movie.genre_ids.includes(genre.id)).map(({ name }) => name).join(', '),
                        releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : 'n/a'
                        
                    }));
                    
                })
        })
}
onFetchPopularPagination(true)

// функция поиска в импуте
function onSearchImage(event) {
 event.preventDefault();

    filmApiService.query = event.currentTarget.elements.query.value.trim();

    filmApiService.resetPage();

    onFetchByQueryPagination();   
}

// ренедерит по искомому слову на страницу и по пагинации
function onFetchByQueryPagination() {
    loader.showLoading(loaderStyles);
    return filmApiService.fetchByQuery()
        .then(data => {
        const { total_pages, results } = data;
        console.log(data)
        onRenderPagination(total_pages, filmApiService.page)
        renderCardByQuery(results)
        loader.hideLoading();
        onfetchGenresArray()
            .then((genresArray) => {
                const { genres } = genresArray;
                console.log(genres)
                results.map(movie => ({ 
                    ...movie,
                    genres: genres.filter((genre) => movie.genre_ids.includes(genre.id)).map(({ name }) => name).join(', '),
                    releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : 'n/a'
                        
                }));
                    
            })
        // .catch(error => {
        // console.log(error);
        // })
        // .finally(() => form.reset());
    })
    
}

function onfetchGenresArray() {
    return filmApiService.fetchGenres()
        .then(data=> {
           return data;
        });
}
onfetchGenresArray()

//рендер новых страниц из запроса или популярных
function onClickPagination(event) {
    if (event.target === event.currentTarget) return;

    if (Number(event.target.textContent)) {
        filmApiService.page = Number(event.target.textContent)
    }
    const arrow = event.target.classList.value;
    if (arrow.includes('pagination-arrow-next') || arrow.includes('pagination-next')) {
        filmApiService.page+=1
    }
    if (arrow.includes('pagination-arrow-back') || arrow.includes('pagination-back')) {
        filmApiService.page-=1
    }
    
    onFetchPopularPagination(true)
    // onFetchByQueryPagination()
    
}


