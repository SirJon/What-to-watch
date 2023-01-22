import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App/App.jsx";
import { films, Movie } from "./mocks/films.js";

const root = createRoot(document.getElementById(`root`));
root.render(
  <App
    promoMovie={Movie}
    films={films}
  />
);
