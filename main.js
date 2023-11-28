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
      addMovie(popular, response.results[i].id)
    }
  })
  .catch(err => console.error(err))

function addMovie(parent, movieID) {
  fetch(
    "https://api.themoviedb.org/3/movie/" +
      movieID +
      "?language=en-US&append_to_response=credits,images",
    options
  )
    .then(response => response.json())
    .then(response => {
      console.log(response)

      let newMovie = document.createElement("div")
      newMovie.setAttribute("class", "col-sm")
      newMovie.innerHTML +=
        `<br><img src=` +
        `https://image.tmdb.org/t/p/w500` +
        response.poster_path +
        ` height='300px'></img><h1>` +
        response.title +
        " (" +
        response.release_date.substring(0, 4) +
        ")" +
        `</h1>`

      let details1 = document.createElement("div")
      details1.setAttribute("class", "row")
      let details2 = document.createElement("div")
      details2.setAttribute("class", "col")
      let details3 = document.createElement("div")
      details3.setAttribute("class", "collapse multi-collapse")
      details3.setAttribute("id", "details" + response.id + "Div")
      let details4 = document.createElement("div")
      details4.setAttribute("class", "card card-body")

      details3.append(details4)
      details2.append(details3)
      details1.append(details2)

      let gallery1 = document.createElement("div")
      gallery1.setAttribute("class", "row")
      let gallery2 = document.createElement("div")
      gallery2.setAttribute("class", "col")
      let gallery3 = document.createElement("div")
      gallery3.setAttribute("class", "collapse multi-collapse")
      gallery3.setAttribute("id", "gallery" + response.id)
      let gallery4 = document.createElement("div")
      gallery4.setAttribute("class", "card card-body")

      gallery3.append(gallery4)
      gallery2.append(gallery3)
      gallery1.append(gallery2)

      newMovie.innerHTML +=
        `<p>
        <a class="btn btn-primary" data-toggle="collapse" href="#details` +
        response.id +
        `Div" role="button" aria-expanded="false" aria-controls="detailsDiv">Toggle details</a>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#gallery` +
        response.id +
        `" aria-expanded="false" aria-controls="gallery">Toggle gallery</button>
      </p>`

      details4.innerHTML +=
        response.overview +
        `Full release date: ` +
        response.release_date +
        `<br/>Director: `

      for (i = 0; i < 5; i++) {
        if (response.credits.crew[i].job == "Director")
          details4.innerHTML += response.credits.crew[i].name
      }

      details4.innerHTML += `<br/>Genres: `

      for (i = 0; i < response.genres.length; i++) {
        details4.innerHTML += response.genres[i].name + ", "
      }

      details4.innerHTML += `<br/>Partial cast: `

      for (let j = 0; j < 5; j++) {
        details4.innerHTML += response.credits.cast[j].name + ", "
      }

      details4.innerHTML +=
        `<br/>Rating / Votes: ` +
        response.vote_average +
        " / " +
        response.vote_count

      details4.innerHTML +=
        "<br><a href='https://www.themoviedb.org/movie/" +
        response.id +
        "'>See in TMDB</a>"

      for (i = 0; i < response.images.posters.length; i++) {
        gallery4.innerHTML +=
          `<img src='https://image.tmdb.org/t/p/w500` +
          response.images.posters[i].file_path +
          `'/>`
      }

      gallery4.innerHTML +=
        `<img src='https://image.tmdb.org/t/p/w500` +
        response.backdrop_path +
        `'/>`

      newMovie.append(details1)
      newMovie.append(gallery1)

      parent.append(newMovie)
    })

    .catch(err => console.error(err))
}

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
      searchPreview.innerHTML = ""
      for (let i = 0; i < response.results.length; i++) {
        addMovie(searchPreview, response.results[i].id)
      }
    })
    .catch(err => console.error(err))
})
