import React from "react";
import App from "./components/App";
import {createRoot} from 'react-dom/client';

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    name: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    img: `img/macbeth.jpg`,
  },
  {
    name: `Aviator`,
    img: `img/aviator.jpg`,
  },
];

const root = createRoot(document.getElementById(`root`));
root.render(
    <App
      films={films}
    />
);
