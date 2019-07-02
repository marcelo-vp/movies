import makeRequest from './requests';

const handleAddFavorite = () => {
    document.getElementById('add-to-favorites').onclick = e => {
        const path = '/favorites';
        const payload = {
            "title": document.querySelector('.movie-title').textContent,
            "image": document.querySelector('.movie-image').getAttribute('src'),
            "plot": document.querySelector('.movie-plot').textContent
        };
        makeRequest.post(path, payload, successCallback);
    }
};

const successCallback = response => {
    const jsonResponse = JSON.parse(response);
    if (jsonResponse["added"]) {
        document.querySelector('.added-to-favorites').style.display = 'block';
    }
};

const handleLoadFavorites = () => {
    // make GET request to mongoDB
}

export default handleAddFavorite;
