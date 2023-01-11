import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./components/App.jsx";
import films from './mocks/films';

const root = createRoot(document.getElementById(`root`));
root.render(
    <App
      films={films}
    />
);
