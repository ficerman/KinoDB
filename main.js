const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI3MDQ4NTU2NzkxN2JhNzYyMDVlNTI1ZDc5ZjFiMSIsInN1YiI6IjY1NjM2N2VkN2RmZGE2NTkyZjUzZjllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xEcMcVjTLWvvQAV452sHTX2IFXunxesqsLCOSw2BeQs"
  }
}

fetch("https://api.themoviedb.org/3/authentication", options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))
