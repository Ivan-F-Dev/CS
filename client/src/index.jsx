import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider, createTheme} from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: '#77bd1b'
        }
        // secondary {
        //     main:
        // }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);