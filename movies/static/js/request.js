// Handles form requests and server responses

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    submitButton.onclick = e => {
        e.preventDefault();
        const path = document.getElementById('movie-search-form').getAttribute('action');
        const movieNameInput = document.getElementById('movie-name');
        const movieName = movieNameInput.value;
        if (!movieName) {
            movieNameInput.setAttribute('placeholder', 'Enter a movie name');
            return;
        }
        if (movieNameInput.getAttribute('placeholder')) {
            movieNameInput.setAttribute('placeholder', '');
        }
        const payload = { "movie_name": movieName };
        makePostRequest(path, payload);
    }
});

const makePostRequest = (path, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            successCallback(xhr.responseText);
        }
    }
    xhr.open('POST', path);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
}

const successCallback = response => {
    const movieData = JSON.parse(response);
    document.querySelector('.movie-image').setAttribute('src', movieData['Poster']);
    document.querySelector('.movie-plot').textContent = movieData['Plot'];
    document.querySelector('.movie-section').style.display = 'block';
    document.getElementById('movie-name').value = '';
}
