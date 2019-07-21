import React from 'react';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Theme from '../theme';
import Search from './Search';
import Favorites from './Favorites';

export default function App() {
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
