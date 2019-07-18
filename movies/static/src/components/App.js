import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Theme from '../theme';
import Search from './Search';
import Favorites from './Favorites';

export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Search/>
            <Favorites/>
        </ThemeProvider>
    );
};
