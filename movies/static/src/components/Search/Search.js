import { css } from 'glamor';
import React, { Component } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    TextField,
    Typography
} from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import Api from '../../libs/Api';
import NotFoundImg from './img/not-found.svg';

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

        const result = await Api.get('/search', this.state.movieName);
        this.handleSearchResult(result);
    };
    handleSearchResult = result => {
        const movieData = JSON.parse(result);

        if (movieData['has_error']) {
            this.setState({
                errorMsg: movieData['error'],
                showError: true
            });
        } else {
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
            this.setState({ addedToFavorites: true });
        }
    };
    render() {
        const styles = {
            sectionWrapper: css({
                paddingBottom: 20
            }),
            pageTitle: css({
                padding: '24px 0 36px'
            }),
            searchForm: css({
                display: 'block',
                margin: '0 auto',
                width: '100%',
                padding: '18px 0 24px',
                '@media(min-width: 1024px)': {
                    width: '50%'
                }
            }),
            searchInput: css({
                display: 'block',
                margin: '0 auto',
                width: '90%',
                '@media(min-width: 768px)': {
                    display: 'inline-block',
                    margin: 0,
                    width: 'calc(100% - 114px)'
                }
            }),
            searchButton: css({
                top: 24,
                '@media(min-width: 768px)': {
                    top: 10,
                    display: 'inline-block',
                    marginLeft: 24
                }
            }),
            searchResults: css({
                padding: '40px 0'
            }),
            card: css({
                display: 'block',
                margin: '0 auto',
                width: '100%',
                '@media(min-width: 1024px)': {
                    width: '90%'
                }
            }),
            cardContent: css({
                display: 'block',
                '@media(min-width: 768px)': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }
            }),
            cardMain: css({
                display: 'block',
                width: '100%',
                padding: '20px 0',
                textAlign: 'center',
                '@media(min-width: 768px)': {
                    display: 'inline-block',
                    width: '40%'
                }
            }),
            cardPlot: css({
                display: 'block',
                width: '100%',
                paddingTop: 20,
                textAlign: 'justify',
                '@media(min-width: 768px)': {
                    display: 'inline-block',
                    width: '60%',
                    padding: 20
                }
            }),
            movieTitle: css({
                textTransform: 'uppercase'
            }),
            movieImg: css({
                display: 'block',
                margin: '24px auto 0',
                maxWidth: '100%'
            }),
            cardActions: css({
                padding: '6px 16px',
                justifyContent: 'flex-end'
            }),
            errorSection: css({
                padding: '42px 0px 28px'
            }),
            errorMsg: css({
                paddingBottom: 20
            }),
            errorImg: css({
                width: 80
            })
        };

        return (
            <div {...styles.sectionWrapper}>
                <section>
                    <Typography
                        variant='h2'
                        align='center'
                        color='primary'
                        {...styles.pageTitle}
                    >
                        Search in IMDB
                    </Typography>
                    <form {...styles.searchForm}>
                        <TextField
                            label='Enter a movie name'
                            helperText={this.state.helperText}
                            value={this.state.movieName}
                            onChange={this.handleMovieName}
                            {...styles.searchInput}
                        />
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                            onClick={this.handleSearch}
                            {...styles.searchButton}
                        >
                            Search
                        </Button>
                    </form>
                </section>
                {this.state.showResults && (
                    <section {...styles.searchResults}>
                        <Card {...styles.card}>
                            <CardContent {...styles.cardContent}>
                                <div {...styles.cardMain}>
                                    <Typography
                                        variant='h5'
                                        color='secondary'
                                        {...styles.movieTitle}
                                    >
                                        {this.state.movieData.Title}
                                    </Typography>
                                    <img
                                        src={this.state.movieData.Poster}
                                        {...styles.movieImg}
                                    />
                                </div>
                                <div {...styles.cardPlot}>
                                    <Typography
                                        variant='body1'
                                        color='secondary'
                                    >
                                        {this.state.movieData.Plot}
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions {...styles.cardActions}>
                                <IconButton
                                    aria-label='Add to favorites'
                                    color='primary'
                                    onClick={this.handleAddFavorite}
                                >
                                    <Favorite />
                                </IconButton>
                            </CardActions>
                            {this.state.addedToFavorites && (
                                <Typography variant='h6' color='primary'>
                                    Sucessfully added to favorites!
                                </Typography>
                            )}
                        </Card>
                    </section>
                )}
                {this.state.showError && (
                    <section {...styles.errorSection}>
                        <Typography
                            variant='h5'
                            color='secondary'
                            {...styles.errorMsg}
                        >
                            {this.state.errorMsg}
                        </Typography>
                        <img src={NotFoundImg} {...styles.errorImg} />
                    </section>
                )}
            </div>
        );
    }
}

export default Search;
