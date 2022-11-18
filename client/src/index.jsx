import React from 'react';
// import ReactDOM from 'react-dom';//для старой версии
import {createRoot} from 'react-dom/client'

import App from './App';
import {ThemeProvider, createTheme} from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: '#77bd1b'
        },
        secondary: {
            main: '#ffffff'
        }
    }
})

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
// Вмонтирование в root старой версии
// ReactDOM.render(
//     <React.StrictMode>
//         <ThemeProvider theme={theme}>
//             <App />
//         </ThemeProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
