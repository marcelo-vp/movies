import { css } from 'glamor';
import React, { Component, Fragment } from 'react';
import { func, string } from 'prop-types';
import {
    Card,
    CardHeader,
    CardActions,
    CardContent,
    Collapse,
    IconButton,
    Typography
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CardImage from './CardImage';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }
    handleExpandContent = () => {
        const expanded = !this.state.expanded;
        this.setState({ expanded });
    };
    render() {
        const styles = {
            expandButton: css({
                marginLeft: 'auto'
            }),
            cardContent: css({
                padding: 20
            }),
            cardActions: css({
                justifyContent: 'flex-end'
            }),
            plot: css({
                textAlign: 'justify'
            })
        };
        return (
            <Fragment>
                <Card>
                    <CardHeader
                        title={this.props.title}
                        subheader={this.props.year}
                    />
                    <CardImage image={this.props.image} />
                    <CardActions disableSpacing {...styles.cardActions}>
                        <IconButton
                            aria-label='Remove from favorites'
                            color='secondary'
                            onClick={this.props.removeFavorite}
                        >
                            <FavoriteBorder />
                        </IconButton>
                        <IconButton
                            aria-expanded={this.state.expanded}
                            aria-label='Show more'
                            color='secondary'
                            onClick={this.handleExpandContent}
                            {...styles.expandButton}
                        >
                            <ExpandMore />
                        </IconButton>
                    </CardActions>
                    <Collapse
                        in={this.state.expanded}
                        timeout='auto'
                        unmountOnExit
                    >
                        <CardContent {...styles.cardContent}>
                            <Typography
                                variant='body2'
                                component='p'
                                {...styles.plot}
                            >
                                {this.props.plot}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Fragment>
        );
    }
}

MovieCard.propTypes = {
    title: string,
    year: string,
    image: string,
    plot: string,
    removeFavorite: func
};

export default MovieCard;
