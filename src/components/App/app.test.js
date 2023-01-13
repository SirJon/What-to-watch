import renderer from 'react-test-renderer';
import App from "./App";
import React from "react";

const films = [
  {
    name: `1`,
    img: `2`,
    video: `3`,
  },
  {
    name: `1`,
    img: `2`,
    video: `3`,
  },
];

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(
        <App
          films={films}
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
