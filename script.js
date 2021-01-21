fetch(`http://www.omdbapi.com/?s=hunger+game&apikey=47cbfb0d`)

function search(event) {
    event.preventDefault()
    
    const search = document.searchform.searchbar.value
    const filmSearch = search.toLowerCase().split(" ").join("+");
    fetch(`http://www.omdbapi.com/?s=${filmSearch}&apikey=47cbfb0d`)

.then((response) => response.json() )
  .then((films) => {
    document.querySelector(".movies").innerHTML = ""
  films.Search.forEach(element => {
     showFilms(element.Title, element.Poster, element.Year);
  });
  })
}

function showFilms(title, poster, year, id) {
    const selector =  document.querySelector(".movies")
    selector.innerHTML += `
        <div>
            <p>${title}</p>
            <p>${year}</p>
            <img src='${poster}' alt='' />
            <button class="btn btn-primary" onclick="showMore('${id}')">Read more</button>
        </div>
    `;
}
const showMore = async function (id) {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=836add35`)
    const object = await response.json();
    try {
      modal(object.Title, object.Plot, object.Poster, object.Released);
    } catch (error) {
      console.error("error : ", error)
    }
  }