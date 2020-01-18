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
  for (let i = 0; i < movies.length; i++) {
    showMovie(movies[i]);
  }
}
function showMovie(movie) {
  console.log(movie.title);
}
