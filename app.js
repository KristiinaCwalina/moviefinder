const apiKey = "3ddca7ee7a434ea70bc38f8560648498";
let searchBox = document.getElementById("searchbox");
searchBox.addEventListener("keyup", onSearch);
function onSearch(event) {
  if (event.keyCode == 13) {
    console.log(searchBox.value);
  }
}
