import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {persistor, store} from './app/store';
import App from './App';
import theme from "./theme";
import {ThemeProvider} from "@mui/material";
import {PersistGate} from "redux-persist/integration/react";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </PersistGate>
</Provider>
);