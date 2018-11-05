const search_input = document.getElementById("search-input")
const results_container = document.getElementById("results")

search_input.addEventListener("keyup", function (){
  results_container.innerHTML = "<img id='loading' src='loading.gif'/>"
  // console.log("keyup")
  // console.log(this.value)
  get_data(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.value}&type=video&key=${gkey}`)
    .then(function(data){
      data = JSON.parse(data)
      results_container.innerHTML = ""
      if (data.items.length > 0){
        for(const video of data.items){
          // console.log(video)
          results_container.innerHTML += `<a href = "https://www.youtube.com/watch?v=${video.id.videoId}">
          <h1>${video.snippet.title}</h1>
          <p>${video.snippet.description}</p>
        </a>`
        }
      }
      else {
        results_container.innerHTML = `<p> Nenhum resultado encontrado</p>`
      }
    })
    .catch(function(error){ //disable internet connetion to check if catch is working
      results_container.innerHTML = `<p>${error}</p>`
    })
})
