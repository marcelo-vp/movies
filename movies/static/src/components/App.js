import React, { Fragment } from 'react';
import Search from './Search';

export default function App() {
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
    }
    return (
        <Fragment>
            <Search/>
            <section className="favorites-section">
                <button id="get-favorites">Load favorite movies!</button>
                <ul className="favorites-list" style={styles.favoritesList}></ul>
            </section>
        </Fragment>
    );
};
