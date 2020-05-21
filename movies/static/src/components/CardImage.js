import React, { Fragment } from 'react';
import { object, string } from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { CardMedia } from '@material-ui/core';

const styles = {
    root: {
        height: 0,
        paddingTop: '80%',
        backgroundPosition: 'center 5%'
    }
};

function CardImage(props) {
    const { classes, image } = props;

    return (
        <Fragment>
            <CardMedia className={classes.root} image={image} />
        </Fragment>
    );
}

CardImage.propTypes = {
    classes: object.isRequired,
    image: string
};

export default withStyles(styles)(CardImage);
