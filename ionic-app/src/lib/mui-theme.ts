/** Material UI theming
 *  Documentation for changing color palette with ThemeProvider https://material-ui.com/customization/palette/.
 *  Note the default MUI font is Roboto.
 */
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fb8500',
        },
        secondary: {
            main: '#ffb703',
        },
        error: {
            main: '#eb445a',
        },
        warning: {
            main: '#ffc409',
        },
        info: {
            main: '#219ebc',
        },
        success: {
            main: '#2dd36f',
        }
    },
});
export default theme;