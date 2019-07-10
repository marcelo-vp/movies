import React, { Component, Fragment } from "react";
import makeRequest from '../requests';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false,
            showError: false,
        };
    }
    handleMovieName = e => {
        this.setState({ movieName: e.target.value });
    };
    handleSearch = e => {
        e.preventDefault();
        this.setState({ showResults: false });

        if (!this.state.movieName) {
            this.setState({ placeholder: 'Enter a movie name!' });
            return;
        }

        if (this.state.placeholder) {
            this.setState({ placeholder: '' });
        }

        makeRequest.post(
            '/omdb',
            { "movie_name": this.state.movieName },
            this.handleSearchResult
        );
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
                movieName: ''
            });
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
                        <button id="add-to-favorites">Add to favorites</button>
                        <p style={{display: 'none'}}>Sucessfully added to favorites!</p>
                    </section>
                )}
                {this.state.showError && (
                    <section className="error-section">
                        <h2>{this.state.errorMsg}</h2>
                        <img
                            style={{ width: '80px' }}
                            src="../static/src/img/not-found.svg"
                            alt=""
                        />
                    </section>
                )}
            </Fragment>
        );
    }
}

export default Search;
