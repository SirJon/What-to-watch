import renderer from 'react-test-renderer';
import React from "react";
import Films from './Films';

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

describe(`Films`, () => {
  it(`Render`, () => {
    const tree = renderer
      .create(
        <Films
          films={films}
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
