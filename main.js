const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI3MDQ4NTU2NzkxN2JhNzYyMDVlNTI1ZDc5ZjFiMSIsInN1YiI6IjY1NjM2N2VkN2RmZGE2NTkyZjUzZjllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xEcMcVjTLWvvQAV452sHTX2IFXunxesqsLCOSw2BeQs"
  }
}

const popularMovies = {}

const popular1 = document.getElementById("popular1")
const popular2 = document.getElementById("popular2")
const popular3 = document.getElementById("popular3")
const popular1Text = document.getElementById("popular1Text")
const popular2Text = document.getElementById("popular2Text")
const popular3Text = document.getElementById("popular3Text")

let popularURL1
let popularURL2
let popularURL3

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
)
  .then(response => response.json())
  .then(response => {
    popular1.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + response.results[0].poster_path
    )
    popular1Text.innerHTML =
      response.results[0].title +
      " (" +
      response.results[0].release_date.substring(0, 4) +
      ")"
    popular2.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + response.results[1].poster_path
    )
    popular2Text.innerHTML =
      response.results[1].title +
      " (" +
      response.results[1].release_date.substring(0, 4) +
      ")"
    popular4.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + response.results[3].poster_path
    )
    popular4Text.innerHTML =
      response.results[3].title +
      " (" +
      response.results[3].release_date.substring(0, 4) +
      ")"
    popular3.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + response.results[2].poster_path
    )
    popular3Text.innerHTML =
      response.results[2].title +
      " (" +
      response.results[2].release_date.substring(0, 4) +
      ")"
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
      searchPreview.innerHTML = `<div class="row">
<div class="col-sm">
    <img src="" id="result1" height="200px"></img>
    <p id="result1Text"></p>
</div>
<div class="col-sm">

    <img src="" id="result2" height="200px"></img>
    <p id="result2Text"></p>
</div>
<div class="col-sm">

    <img src="" id="result3" height="200px"></img>
    <p id="result3Text"></p>
</div>
<div class="col-sm">

    <img src="" id="result4" height="200px"></img>
    <p id="result4Text"></p>
</div>
</div>`
      result1.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + response.results[0].poster_path
      )
      result1Text.innerHTML =
        response.results[0].title +
        " (" +
        response.results[0].release_date.substring(0, 4) +
        ")"
      result2.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + response.results[1].poster_path
      )
      result2Text.innerHTML =
        response.results[1].title +
        " (" +
        response.results[1].release_date.substring(0, 4) +
        ")"
      result4.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + response.results[3].poster_path
      )
      result4Text.innerHTML =
        response.results[3].title +
        " (" +
        response.results[3].release_date.substring(0, 4) +
        ")"
      result3.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + response.results[2].poster_path
      )
      result3Text.innerHTML =
        response.results[2].title +
        " (" +
        response.results[2].release_date.substring(0, 4) +
        ")"
    })
    .then(response => console.log(response))
    .catch(err => console.error(err))
})
