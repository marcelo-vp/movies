import handleMovieSearch from './omdb'
import handleAddFavorite from './favorites'

document.addEventListener('DOMContentLoaded', () => {
    handleMovieSearch();
    handleAddFavorite();
});
