import React, { Component, Fragment } from 'react';
import { favorites } from '../controllers/Api';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }
    loadFavorites = async () => {
        const response = await favorites.list();
        const movies = JSON.parse(response)['favorites'];
        this.setState({ movies });
    }
    render() {
        const styles = {
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
            <Fragment>
                <section>
                    <button onClick={this.loadFavorites}>
                        Load favorite movies!
                    </button>
                    <ul style={styles.favoritesList}>
                        {this.state.movies.map((movie, index) => (
                            <li
                                key={`movie-${index}`}
                                style={styles.favoritesListItem}
                            >
                                <h2>{movie.title}</h2>
                                <img src={movie.image}/>
                                <p>{movie.plot}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </Fragment>
        );
    }
}

export default Favorites;
