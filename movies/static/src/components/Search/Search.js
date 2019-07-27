import React, { Component } from 'react';
import {
    Button, Card, CardActions, CardContent,
    IconButton, TextField, Typography
} from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite'
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
                movieData,
                showResults: true,
                movieName: '',
                addedToFavorites: false
            });
        }
    };
    handleAddFavorite = async () => {
        const response = await Api.add('/favorites', this.state.movieData);

        if (JSON.parse(response)['added']) {
            this.setState({ addedToFavorites: true })
        }
    };
    render() {
        const styles = {
            sectionWrapper: {
                paddingBottom: 20
            },
            pageTitle: {
                padding: '24px 0 36px'
            },
            searchForm: {
                display: 'block',
                margin: '0 auto',
                width: '50%',
                padding: '18px 0 24px',
            },
            searchInput: {
                width: 'calc(100% - 114px)'
            },
            searchButton: {
                position: 'relative',
                top: 10,
                marginLeft: 24
            },
            searchResults: {
                padding: '40px 0'
            },
            card: {
                display: 'block',
                margin: '0 auto',
                width: '90%'
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
                padding: '6px 16px',
                justifyContent: 'flex-end'
            },
            errorImg: {
                width: 80
            }
        };

        return (
            <div style={styles.sectionWrapper}>
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
                        <Card style={styles.card}>
                            <CardContent style={styles.cardContent}>
                                <div style={styles.cardMain}>
                                    <Typography
                                        variant="h5"
                                        color="secondary"
                                        style={styles.movieTitle}
                                    >
                                        {this.state.movieData.Title}
                                    </Typography>
                                    <img
                                        src={this.state.movieData.Poster}
                                        style={styles.movieImg}
                                    />
                                </div>
                                <div style={styles.cardPlot}>
                                    <Typography
                                        variant="body1"
                                        color="secondary"
                                    >
                                        {this.state.movieData.Plot}
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions style={styles.cardActions}>
                                <IconButton
                                    color="primary"
                                    aria-label="Add to favorites"
                                    onClick={this.handleAddFavorite}
                                >
                                    <Favorite/>
                                </IconButton>
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
