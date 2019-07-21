import React, { Component } from 'react';
import {
    Card, CardActions, CardContent, Button,
    TextField, Typography
} from '@material-ui/core';
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
            this.setState({ helperText: 'Fill in a name!' });
            return;
        }

        if (this.state.helperText) {
            this.setState({ helperText: '' });
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
        const styles = {
            container: {
                textAlign: 'center',
            },
            pageTitle: {
                margin: '24px auto 35px'
            },
            searchForm: {
                padding: '18px 0',
                width: '50%',
                margin: '0 auto'
            },
            label: {
                padding: '0 20px'
            },
            searchInput: {
                width: 'calc(100% - 114px)'
            },
            searchButton: {
                marginLeft: 24,
                position: 'relative',
                top: 10
            },
            searchResults: {
                display: 'block',
                width: '90%',
                maxWidth: 1200,
                margin: '0 auto',
                padding: '40px 0'
            },
            cardContent: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start'
            },
            cardMain: {
                display: 'inline-block',
                width: '40%',
                padding: '20px 0',
                textAlign: 'center'
            },
            cardPlot: {
                display: 'inline-block',
                width: '60%',
                padding: 20,
                textAlign: 'justify'
            },
            movieTitle: {
                textTransform: 'uppercase'
            },
            movieImg: {
                display: 'block',
                margin: '24px auto 0',
                maxWidth: '100%'
            },
            cardActions: {
                justifyContent: 'flex-end'
            },
            errorImg: {
                width: 80
            }
        };

        return (
            <div style={styles.container}>
                <section>
                    <Typography
                        variant="h2"
                        align="center"
                        color="primary"
                        style={styles.pageTitle}
                    >
                        Search for a movie:
                    </Typography>
                    <form style={styles.searchForm}>
                        <TextField
                            label="Enter a movie name"
                            helperText={this.state.helperText}
                            value={this.state.movieName}
                            onChange={this.handleMovieName}
                            style={styles.searchInput}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={this.handleSearch}
                            style={styles.searchButton}
                        >
                            Search
                        </Button>
                    </form>
                </section>
                {this.state.showResults && (
                    <section style={styles.searchResults}>
                        <Card>
                            <CardContent style={styles.cardContent}>
                                <div style={styles.cardMain}>
                                    <Typography
                                        variant="h5"
                                        color="secondary"
                                        style={styles.movieTitle}
                                    >
                                        {this.state.movieTitle}
                                    </Typography>
                                    <img src={this.state.movieImg} style={styles.movieImg}/>
                                </div>
                                <div style={styles.cardPlot}>
                                    <Typography
                                        variant="body1"
                                        color="secondary"
                                    >
                                        {this.state.moviePlot}
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions style={styles.cardActions}>
                                <Button
                                    color="primary"
                                    onClick={this.handleAddFavorite}
                                >
                                    Add to favorites
                                </Button>
                            </CardActions>
                            {this.state.addedToFavorites && (
                                <Typography
                                    variant="h6"
                                    color="primary"
                                >
                                    Sucessfully added to favorites!
                                </Typography>
                            )}
                        </Card>
                    </section>
                )}
                {this.state.showError && (
                    <section>
                        <h2>{this.state.errorMsg}</h2>
                        <img
                            style={styles.errorImg}
                            src="./img/not-found.svg"
                            alt=""
                        />
                    </section>
                )}
            </div>
        );
    }
}

export default Search;
