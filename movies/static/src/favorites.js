import makeRequest from './requests';

const PATH = '/favorites';

const handleAddFavorite = () => {
    document.getElementById('add-to-favorites').onclick = e => {
        const payload = {
            "title": document.querySelector('.movie-title').textContent,
            "image": document.querySelector('.movie-image').getAttribute('src'),
            "plot": document.querySelector('.movie-plot').textContent
        };
        makeRequest.post(PATH, payload, handleSuccessResponse);
    }

    const handleSuccessResponse = response => {
        const jsonResponse = JSON.parse(response);
        if (jsonResponse["added"]) {
            document.querySelector('.added-to-favorites').style.display = 'block';
        }
    };
};

const handleGetFavorites = () => {
    document.getElementById('get-favorites').onclick = e => {
        makeRequest.get(PATH, handleFavoritesList);
    }

    const handleFavoritesList = response => {
        const favoritesList = document.querySelector('.favorites-list');
        const favorites = JSON.parse(response)["favorites"];

        favorites.forEach(favorite => {
            const listItem = document.createElement('li');
            const title = document.createElement('h2');
            title.textContent = favorite.title;
            const image = document.createElement('img');
            image.setAttribute('src', favorite.image);
            const plot = document.createElement('p');
            plot.textContent = favorite.plot;

            listItem.appendChild(title);
            listItem.appendChild(image);
            listItem.appendChild(plot);
            favoritesList.appendChild(listItem);
        });
    }
}

export { handleAddFavorite, handleGetFavorites };
