export default function addToLockalS(filmUser) {
  const btnWatchedEl = document.querySelector('.btn-watched-js');
  const btnQueueEl = document.querySelector('.btn-queue-js');

  // btnWatchedEl.innerText.toLowerCase()==='add to watched';

// if(!localStorage.watchedFilm){

  btnWatchedEl.addEventListener('click', () => {
   
   btnWatchedEl.innerText = 'remove from watched'
   if (!localStorage.watchedFilm) {
    const films = [];

    films.push(filmUser);
    localStorage.setItem(`watchedFilm`, JSON.stringify(films));
} else {
    const filmsStr = localStorage.getItem('watchedFilm');

      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        console.log('есть такой!!!');
        return;
  }   else {
          const filmsArr = JSON.parse(filmsStr);
  
          filmsArr.push(filmUser);
          localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
  }
}
} 
// else{  
//     btnWatchedEl.innerText = 'add to watched'
//     const filmsStr = localStorage.getItem('watchedFilm');
//     const filmsArr = JSON.parse(filmsStr);
//     for (let i = filmsArr; i < filmsArr.length; i++) {
//       if(!film[i].id===filmUser.id){return}
//       else{
//         filmsArr.splice(i,1)
//         localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
//       }
      
//     }
// }
  );
  // else{
  //   btnWatchedEl.addEventListener('click', () => {
  //   const filmsStr = localStorage.getItem('watchedFilm');
  //   const filmsArr = JSON.parse(filmsStr);
  
  //   for (let i = 0; i <= filmsArr.length; i++) {
  //     // console.log(filmsArr[i].id);
  //     if(!(filmsArr.length>0 && filmsArr[i].id===filmUser.id)){
  //       filmsArr.push(filmUser);
  //       localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
  //     }
  //     else{
  //       filmsArr.splice(i,1)
  //       localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
  //     }
      
  //   }
  // })}

  btnQueueEl.addEventListener('click', () => {
    btnQueueEl.innerText = 'remove from Queue'
    if (!localStorage.queueFilm) {
      const films = [];

      films.push(filmUser);
      localStorage.setItem(`queueFilm`, JSON.stringify(films));
    } else {
      const filmsStr = localStorage.getItem('queueFilm');

      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        console.log('есть такой!!!');
        return;
      } else {
            const filmsArr = JSON.parse(filmsStr);
     
            filmsArr.push(filmUser);
            localStorage.setItem(`queueFilm`, JSON.stringify(filmsArr));
      }
    }
  });
}
