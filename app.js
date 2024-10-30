const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", releaseYear: 2010, rented: false, image: "https://via.placeholder.com/150x225?text=Inception" },
    { id: 2, title: "The Dark Knight", genre: "Action", releaseYear: 2008, rented: false, image: "https://via.placeholder.com/150x225?text=The+Dark+Knight" },
    { id: 3, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994, rented: false, image: "https://via.placeholder.com/150x225?text=The+Shawshank+Redemption" },
    { id: 4, title: "Pulp Fiction", genre: "Drama", releaseYear: 1994, rented: false, image: "https://via.placeholder.com/150x225?text=Pulp+Fiction" },
    { id: 5, title: "Forrest Gump", genre: "Drama", releaseYear: 1994, rented: false, image: "https://via.placeholder.com/150x225?text=Forrest+Gump" },
    { id: 6, title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014, rented: false, image: "https://via.placeholder.com/150x225?text=Interstellar" },
    { id: 7, title: "The Godfather", genre: "Drama", releaseYear: 1972, rented: false, image: "https://via.placeholder.com/150x225?text=The+Godfather" },
    { id: 8, title: "The Matrix", genre: "Sci-Fi", releaseYear: 1999, rented: false, image: "https://via.placeholder.com/150x225?text=The+Matrix" },
    { id: 9, title: "Jurassic Park", genre: "Adventure", releaseYear: 1993, rented: false, image: "https://via.placeholder.com/150x225?text=Jurassic+Park" },
    { id: 10, title: "Toy Story", genre: "Animation", releaseYear: 1995, rented: false, image: "https://via.placeholder.com/150x225?text=Toy+Story" },
];

// Display movies on the page
function displayMovies(moviesToDisplay) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";

    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "bg-white p-4 rounded shadow";
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title} poster" class="w-full h-64 object-cover mb-4 rounded">
            <h2 class="font-bold text-xl">${movie.title}</h2>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Year:</strong> ${movie.releaseYear}</p>
            <button class="bg-green-500 text-white font-semibold py-1 px-2 rounded mt-2" onclick="rentMovie(${movie.id})">${movie.rented ? "Return" : "Rent"}</button>
        `;
        movieList.appendChild(movieCard);
    });
}

// Filter movies by genre or search
function filterMovies() {
    const genreSelect = document.getElementById("genre-select").value;
    const searchInput = document.getElementById("search-input").value.toLowerCase();

    const filteredMovies = movies.filter(movie => {
        const matchesGenre = genreSelect === "all" || movie.genre === genreSelect;
        const matchesSearch = movie.title.toLowerCase().includes(searchInput) || 
                              movie.genre.toLowerCase().includes(searchInput) ||
                              movie.releaseYear.toString().includes(searchInput);
        return matchesGenre && matchesSearch;
    });

    displayMovies(filteredMovies);
}

// Rent or return a movie
function rentMovie(id) {
    const movie = movies.find(m => m.id === id);
    if (movie) {
        movie.rented = !movie.rented;
        alert(`${movie.rented ? "Rented" : "Returned"}: ${movie.title}`);
        displayMovies(movies); // Refresh the list to show the updated button
    }
}

// Initial display of all movies
displayMovies(movies);
