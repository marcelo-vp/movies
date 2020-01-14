import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import MovieCard from './MovieCard';
import Api from '../libs/Api';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }
    loadFavorites = async () => {
        const response = await Api.list('/favorites');
        const movies = JSON.parse(response)['favorites'];
        this.setState({ movies });
    };
    removeFavorite = async index => {
        const movies = [...this.state.movies];
        const response = await Api.delete('/favorites', movies[index]['Title']);

        if (JSON.parse(response)['deleted']) {
            movies.splice(index, 1);
            this.setState({ movies });
        }
    };
    render() {
        const styles = {
            section: {
                padding: '20px 0'
            },
            loadButton: {
                margin: '0 auto 40px'
            },
            favoritesList: {
                listStyleType: 'none',
                textAlign: 'center',
                display: 'flex',
                margin: '0 auto',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                justifyContent: 'center',
                paddingTop: 40
            },
            favoritesListItem: {
                width: '30%',
                margin: '0 5% 10%'
            }
        };
        return (
            <section style={styles.section}>
                <Button
                    color='primary'
                    onClick={this.loadFavorites}
                    style={styles.loadButton}
                >
                    Load favorite movies
                </Button>
                <ul style={styles.favoritesList}>
                    {this.state.movies.map((movie, index) => (
                        <li
                            key={`movie-${index}`}
                            style={styles.favoritesListItem}
                        >
                            <MovieCard
                                title={movie.Title}
                                image={movie.Poster}
                                plot={movie.Plot}
                                year={movie.Year}
                                removeFavorite={() => {
                                    this.removeFavorite(index);
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default Favorites;
