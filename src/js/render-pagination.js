import getRefs from './get-refs';

const refs = getRefs();

export default function onRenderPagination(totalPages, pageNumber) {
    let paginationItem = '';
    let activePage;
    let backPage = pageNumber - 1;
    let nextPage = pageNumber + 1;

    if (pageNumber > 1) { //если значение страницы больше 1, добавьте новый li, который является предыдущей кнопкой (onclick="onPagesSwitcher(totalPages, ${pageNumber - 1})")
        paginationItem += `<li class="pagination-item pagination-back"><span class="pagination-arrow-back">&#129120</span></li>`;
    }

    if (pageNumber > 3) { //если значение страницы больше 2, добавьте новый тег li (onclick="onPagesSwitcher(totalPages, 1)")
        paginationItem += `<li class="mobile-hidden pagination-item pagination-numb "><span>1</span></li>`;
        if (pageNumber > 4) { //если значение страницы больше 3, добавьте новый тег ...
            paginationItem += `<li class="mobile-hidden pagination-item pagination-dots"><span><sup>...</sup></span></li>`;
        }
    }
    //сколько страниц или li показывают до текущего li
    if (pageNumber === totalPages) {
        backPage = backPage - 2;
    } else if (pageNumber === totalPages - 1) {
        backPage = backPage - 1;
    }

    //сколько страниц или li показывают после текущего li
    if (pageNumber === 1) {
        nextPage = nextPage + 2;
    } else if (pageNumber === 2) {
        nextPage = nextPage + 1;
    }

    for (let pageLength = backPage - 1; pageLength <= nextPage + 1; pageLength += 1) {
        if (pageLength > totalPages) {
            continue;
        }

        if (pageLength <= 0) {
            pageLength = 1;
        }

        if (pageNumber === pageLength) { //если значение страницы равно pageLenght, то проверка активной строки в переменной activeLi
            activePage = 'pagination-active';
        } else { // иначе оставьте пустым для переменной activeLi
            activePage = '';
        }
        paginationItem += `<li class="pagination-item pagination-numb ${activePage}"><span>${pageLength}</span></li>`; //onclick="onPagesSwitcher(totalPages, ${pageLength})"
    }

    if (pageNumber < totalPages-2) { //если значение страницы меньше totalpages на 1, то показать последний li или страницу, которая является 176 новым тегом li
       
        if (pageNumber < totalPages-3) {//если значение страницы меньше totalpages на 2, то показать последний (...) предпоследний
             paginationItem += `<li class="mobile-hidden pagination-item pagination-dots"><span><sup>...</sup></span></li>`;        
        }
        paginationItem += `<li class="mobile-hidden pagination-item pagination-numb"><span>${totalPages}</span></li>`; //(onclick="onPagesSwitcher(totalPages, ${totalPages}))
    }

    if (pageNumber < totalPages) {//(onclick="onPagesSwitcher(totalPages, ${pageNumber + 1})")если значение страницы меньше, чем значение totalPages, тогда добавьте новый li, который будет следующей кнопкой
        paginationItem += `<li class="pagination-item pagination-next"><span class="pagination-arrow-next">&#129122</span></li>`;
    }

    refs.paginationEl.innerHTML = paginationItem;
}