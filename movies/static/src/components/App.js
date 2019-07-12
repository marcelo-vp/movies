import React, { Fragment } from 'react';
import Search from './Search';
import Favorites from './Favorites';

export default function App() {
    return (
        <Fragment>
            <Search/>
            <Favorites/>
        </Fragment>
    );
};
