// admin.js

// Function to display movies in the admin panel
function displayMoviesInAdmin() {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = ''; // Clear the list first
    
    movies.forEach((movie, index) => {
        const movieCard = document.createElement("div");
        movieCard.className = "bg-white rounded-lg shadow-md p-4";
        
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="w-full h-64 object-cover rounded-lg mb-4">
            <h3 class="text-lg font-bold">${movie.title}</h3>
            <p class="text-sm text-gray-600">${movie.genre} | ${movie.releaseYear}</p>
            <p class="text-sm text-gray-600">Rating: ${movie.rating}</p>
            <button class="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600" onclick="deleteMovie(${index})">Delete</button>
        `;
        
        movieList.appendChild(movieCard);
    });
}

// Function to add a new movie
function addMovie(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const releaseYear = document.getElementById('releaseYear').value;
    const rating = document.getElementById('rating').value;
    const image = document.getElementById('image').value;
    
    // Add the new movie to the movie array
    movies.push({
        id: movies.length + 1,
        title,
        genre,
        releaseYear,
        rating,
        image
    });
    
    // Reset the form
    document.getElementById('add-movie-form').reset();
    
    // Update the movie list
    displayMoviesInAdmin();
}

// Function to delete a movie
function deleteMovie(index) {
    movies.splice(index, 1); // Remove the movie from the array
    displayMoviesInAdmin(); // Refresh the movie list
}

// Initialize the movie display when the page loads
window.onload = function() {
    displayMoviesInAdmin();
    document.getElementById('add-movie-form').addEventListener('submit', addMovie);
};
