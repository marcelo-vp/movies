import React, { Component, Fragment } from 'react';
import Api from '../../libs/Api';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            showResults: false,
            showError: false,
            addedToFavorites: false
        };
    }
    handleMovieName = e => {
        this.setState({ movieName: e.target.value });
    };
    handleSearch = async e => {
        e.preventDefault();
        this.setState({ showResults: false });

        if (!this.state.movieName) {
            this.setState({ placeholder: 'Enter a movie name!' });
            return;
        }

        if (this.state.placeholder) {
            this.setState({ placeholder: '' });
        }

        const result = await Api.get(
            '/search',
            this.state.movieName
        );
        this.handleSearchResult(result);
    };
    handleSearchResult = result => {
        const movieData = JSON.parse(result);

        if (movieData['has_error']) {
            this.setState({
                errorMsg: movieData['error'],
                showError: true
            });
        }
        else {
            this.setState({
                showError: false,
                movieTitle: movieData['Title'],
                movieImg: movieData['Poster'],
                moviePlot: movieData['Plot'],
                showResults: true,
                movieName: '',
                addedToFavorites: false
            });
        }
    };
    handleAddFavorite = async () => {
        const newFavorite = {
            'title': this.state.movieTitle,
            'image': this.state.movieImg,
            'plot': this.state.moviePlot
        };
        const response = await Api.add('/favorites', newFavorite);

        if (JSON.parse(response)['added']) {
            this.setState({ addedToFavorites: true })
        }
    };
    render() {
        return (
            <Fragment>
                <section>
                    <h2>Search for a movie in OMDB:</h2>
                    <form>
                        <label htmlFor="movie-name">Enter the movie name:</label>
                        <input
                            type="text"
                            name="movie-name"
                            placeholder={this.state.placeholder}
                            value={this.state.movieName}
                            onChange={this.handleMovieName}
                        />
                        <input type="submit" value="Search" onClick={this.handleSearch}/>
                    </form>
                </section>
                {this.state.showResults && (
                    <section>
                        <h2>{this.state.movieTitle}</h2>
                        <div><img src={this.state.movieImg}/></div>
                        <p>{this.state.moviePlot}</p>
                        <button onClick={this.handleAddFavorite}>
                            Add to favorites
                        </button>
                        {this.state.addedToFavorites && (
                            <p>Sucessfully added to favorites!</p>
                        )}
                    </section>
                )}
                {this.state.showError && (
                    <section>
                        <h2>{this.state.errorMsg}</h2>
                        <img
                            style={{ width: '80px' }}
                            src="./img/not-found.svg"
                            alt=""
                        />
                    </section>
                )}
            </Fragment>
        );
    }
}

export default Search;
