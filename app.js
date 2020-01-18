const apiKey = "3ddca7ee7a434ea70bc38f8560648498";
const baseUrl = "https://api.themoviedb.org/3";
let searchBox = document.getElementById("searchbox");
searchBox.addEventListener("keyup", onSearch);
function onSearch(event) {
  if (event.keyCode == 13) {
    fetchMovies(searchBox.value);
  }
}
function fetchMovies(query) {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((responseBody) => showMovies(responseBody.results));
}
function showMovies(movies) {
  const result = document.getElementsByClassName("result")[0];
  result.classList.remove("hidden");
  result.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let movie = getMovieElement(movies[i]);
    result.append(movie);
  }
}
function getMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";
  movieElement.innerHTML = `
        <img class="movie-poster" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
        <div class="movie-content">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-overview">
            ${movie.overview}
          </div>
          </div>
   `;
  return movieElement;
}
