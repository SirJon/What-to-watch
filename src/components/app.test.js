import renderer from 'react-test-renderer';
import App from "./App";
import React from "react";

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

it(`render`, () => {
  const tree = renderer
    .create(
        <App
          films={films}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
