const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI3MDQ4NTU2NzkxN2JhNzYyMDVlNTI1ZDc5ZjFiMSIsInN1YiI6IjY1NjM2N2VkN2RmZGE2NTkyZjUzZjllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xEcMcVjTLWvvQAV452sHTX2IFXunxesqsLCOSw2BeQs"
  }
}

const popular = document.getElementById("popular")

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
)
  .then(response => response.json())
  .then(response => {
    for (let i = 0; i < response.results.length; i++) {
      popular.innerHTML +=
        `<div class='col-sm'><img src=` +
        `https://image.tmdb.org/t/p/w500` +
        response.results[i].poster_path +
        ` height='300px'></img><h1>` +
        response.results[i].title +
        `</h1><p>` +
        response.results[i].overview +
        `<br/>Full release date: ` +
        response.results[i].release_date +
        `</p></div>`
    }
  })
  .catch(err => console.error(err))

const searchPreview = document.getElementById("searchPreview")
const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("input", function (evt) {
  fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      this.value +
      "&include_adult=false&language=en-US&page=1",
    options
  )
    .then(response => response.json())
    .then(response => {
      for (let i = 0; i < response.results.length; i++) {
        searchPreview.innerHTML +=
          `<div class='col-sm'><img src=` +
          `https://image.tmdb.org/t/p/w500` +
          response.results[i].poster_path +
          ` height='300px'></img><h1>` +
          response.results[i].title +
          `</h1><p>` +
          response.results[i].overview +
          `<br/>Full release date: ` +
          response.results[i].release_date +
          `</p></div>`
      }
    })
    .catch(err => console.error(err))
})
