import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Demo from './screens/Demo';
import './styles/generics.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './styles/ionic-theme.css';

/** Material UI theming
 *  Documentation for changing color palette with ThemeProvider https://material-ui.com/customization/palette/.
 *  Note the default MUI font is Roboto.
 */
import { ThemeProvider } from '@material-ui/styles';
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

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
        <IonApp>
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <IonRouterOutlet id="main">
                <Route path="/">
                  <Demo />
                </Route>
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
      </ThemeProvider>
  );
};
export default App;
