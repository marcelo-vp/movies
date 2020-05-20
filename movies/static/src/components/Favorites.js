import { css } from 'glamor';
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
        const response = await Api.delete('/favorites', movies[index]['title']);

        if (JSON.parse(response)['deleted']) {
            movies.splice(index, 1);
            this.setState({ movies });
        }
    };
    render() {
        const styles = {
            section: css({
                padding: '20px 0'
            }),
            loadButton: css({
                margin: '0 auto 40px'
            }),
            favoritesList: css({
                listStyleType: 'none',
                textAlign: 'center',
                display: 'block',
                margin: '0 auto',
                padding: '40px 0 0',
                '@media(min-width: 768px)': {
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }
            }),
            favoritesListItem: css({
                display: 'block',
                width: '95%',
                margin: '0 auto 20%',
                ':first-child': {
                    marginTop: '5%'
                },
                ':last-child': {
                    marginBottom: '10%'
                },
                '@media(min-width: 768px)': {
                    width: '40%',
                    margin: '5%',
                    ':first-child': {
                        marginTop: '5%'
                    }
                },
                '@media(min-width: 1024px)': {
                    width: '30%'
                }
            })
        };
        return (
            <section {...styles.section}>
                <Button
                    color='primary'
                    onClick={this.loadFavorites}
                    {...styles.loadButton}
                >
                    Load favorite movies
                </Button>
                <ul {...styles.favoritesList}>
                    {this.state.movies.map((movie, index) => (
                        <li
                            key={`movie-${index}`}
                            {...styles.favoritesListItem}
                        >
                            <MovieCard
                                title={movie.title}
                                image={movie.poster}
                                plot={movie.plot}
                                year={movie.year}
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
