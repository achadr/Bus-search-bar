import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// pick utils
import MomentUtils from '@date-io/moment';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  });
ReactDOM.render(<MuiThemeProvider theme={theme}><MuiPickersUtilsProvider utils={MomentUtils}><App /></MuiPickersUtilsProvider></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
