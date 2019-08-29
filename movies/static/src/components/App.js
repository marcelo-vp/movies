import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Theme from '../theme';
import Search from './Search';
import Favorites from './Favorites';

const App = () => {
    const styles = {
        container: {
            boxSizing: 'border-box',
            padding: '20px 0',
            minHeight: '100vh',
            textAlign: 'center'
        },
    }

    return (
        <ThemeProvider theme={Theme}>
            <Container style={styles.container}>
                <Search/>
                <Favorites/>
            </Container>
        </ThemeProvider>
    );
};

export default hot(App);
