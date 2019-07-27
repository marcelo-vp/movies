import React, { Component, Fragment } from 'react';
import {
    Card, CardHeader, CardMedia, CardActions,
    CardContent, Collapse, IconButton, Typography
} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore'

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
            media: {
                height: 0,
                paddingTop: '80%',
                backgroundPosition: 'center 20%'
            },
            expandButton: {
                marginLeft: 'auto'
            }
        };
        return (
            <Fragment>
                <Card>
                    <CardHeader
                        title={this.props.title}
                        subheader={this.props.year}
                    />
                    <CardMedia
                        image={this.props.image}
                        style={styles.media}
                    />
                    <CardActions disableSpacing>
                        <IconButton
                            onClick={this.handleExpandContent}
                            aria-expanded={this.state.expanded}
                            aria-label="show more"
                            style={styles.expandButton}
                        >
                            <ExpandMore/>
                        </IconButton>
                    </CardActions>
                    <Collapse
                        in={this.state.expanded}
                        timeout="auto"
                        unmountOnExit
                    >
                        <CardContent>
                            <Typography
                                variant="body2"
                                component="p"
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

export default MovieCard;
