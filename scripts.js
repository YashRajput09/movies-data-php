document.addEventListener('DOMContentLoaded', function() {
    fetchMovies();

    document.getElementById('movieForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addMovie();
    });
});

function fetchMovies() {
    fetch('get_movies.php')
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';
            data.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.className = 'movie-item';
                movieItem.innerHTML = `<strong>${movie.title}</strong><br>${movie.director}<br>${movie.genre}<br>${movie.release_year}`;
                movieList.appendChild(movieItem);
            });
        });
}

function addMovie() {
    const formData = new FormData(document.getElementById('movieForm'));

    fetch('add_movie.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        fetchMovies();
        document.getElementById('movieForm').reset();
    });
}
