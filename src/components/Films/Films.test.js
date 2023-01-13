import renderer from 'react-test-renderer';
import React from "react";
import Films from './Films';

const films = [
  {
    name: `1`,
    img: `2`,
    video: `3`
  },
  {
    name: `1`,
    img: `2`,
    video: `3`
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
