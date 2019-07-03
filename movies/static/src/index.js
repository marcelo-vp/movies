import handleMovieSearch from './omdb'
import { handleAddFavorite, handleGetFavorites } from './favorites'

document.addEventListener('DOMContentLoaded', () => {
    handleMovieSearch();
    handleGetFavorites();
    handleAddFavorite();
});
