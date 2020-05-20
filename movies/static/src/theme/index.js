import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const palette = {
    primary: { main: '#E65100' },
    secondary: { main: '#212121' }
};
const themeName = 'Trinidad Mine Shaft Eagle';
const theme = createMuiTheme({ palette, themeName });

export default responsiveFontSizes(theme);
