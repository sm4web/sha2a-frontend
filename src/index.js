import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';
import theme from "./theme";
import {ThemeProvider} from "@mui/material";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Provider store={store}>
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
</Provider>);