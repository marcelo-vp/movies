import React from 'react';
import ReactDOM from 'react-dom';

import handleMovieSearch from './omdb';
import { handleAddFavorite, handleGetFavorites } from './favorites';

function Greetings(props) {
    return <p>{props.userName}</p>;
}

ReactDOM.render(<Greetings userName="Marcelo Pinto"/>, document.querySelector('.greetings'));

document.addEventListener('DOMContentLoaded', () => {
    handleMovieSearch();
    handleGetFavorites();
    handleAddFavorite();
});
