const DATE_URL =
  "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=0a72d27e6039e7ceb32a6566997453f5&page=1";

const IMGT_PATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// const main = document.getElementById("main");
const dates = document.getElementById("dates");
// const form = document.getElementById("form");
// const search = document.getElementById("search");

// Get initial movies
// getMovies(API_URL);

// async function getMovies(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   showMovies(data.results);
// }

// Get initial dates
getMoviesDates(DATE_URL);

async function getMoviesDates(url) {
  const res = await fetch(url);
  const data = await res.json();

  //   console.log(data.results);

  showMoviesDates(data.results);
}

// Show Movies
// function showMovies(movies) {
//   main.innerHTML = "";

//   movies.forEach((movie) => {
//     const { title, poster_path, vote_average, overview } = movie;

//     const movieEl = document.createElement("div");
//     movieEl.classList.add("movie");

//     movieEl.innerHTML = `
//     <div class="movie-list-item">
//     <img class="movie-list-item-img" src="${
//       IMG_PATH + poster_path
//     }" alt="${title}">
//     <div class="movie-info">
//     <h3>${title}</h3>
//     <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//     </div>
//     <div class="overview">
//           <h3>Overview</h3>
//           ${overview}
//         </div>
//     `;
//     main.appendChild(movieEl);
//   });
// }

// Show Dates
function showMoviesDates(movies) {
  dates.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <div class="movie-list-item">
      <img class="movie-list-item-img" src="${
        IMGT_PATH + poster_path
      }" alt="${title}">
      <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
            <h3>Overview</h3>
            ${overview}
          </div>
      `;
    dates.appendChild(movieEl);
  });
}

/*<div class="movie-list-item">
                            <img class="movie-list-item-img" src="img/1.jpeg" alt="">
                            <span class="movie-list-item-title">Her</span>
                            <p class="movie-list-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                                hic fugit similique accusantium.</p>
                            <button class="movie-list-item-button">Watch</button>
                        </div>*/

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const searchTerm = search.value;

//   if (searchTerm && searchTerm !== "") {
//     getMovies(SEARCH_API + searchTerm);

//     search.value = "";
//   } else {
//     window.location.reload();
//   }
// });
