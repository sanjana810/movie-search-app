async function searchMovie() {

  const movieName = document.getElementById("searchInput").value;
  const container = document.getElementById("movieContainer");

  const apiKey = "give your apikey";   // keep your real key ,get it from browser and verrify

  const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  container.innerHTML = "";

  if (data.Response === "False") {
    container.innerHTML = `<p style="color:red; font-size:20px;">Movie not found ❌</p>`;
    return;
  }

  data.Search.forEach(movie => {

    container.innerHTML += `
      <div class="movie">
        <h3>${movie.Title}</h3>
        <img src="${movie.Poster}" width="200">
        <p><b>Year:</b> ${movie.Year}</p>
      </div>
    `;

  });
}
