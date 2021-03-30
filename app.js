const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", () => {
    movieLists[i].style.transform = `translateX(${
      movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
    }px)`;
  });
  console.log(movieLists[i].querySelectorAll("img").length);
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

logo.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.reload();

  // const searchTerm = search.value;

  // if (searchTerm && searchTerm !== "") {
  //   getMovies(SEARCH_API + searchTerm);

  //   search.value = "";
  // } else {
  window.location.reload();
});
