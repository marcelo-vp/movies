import makeRequest from './requests';

const PATH = '/favorites';

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
