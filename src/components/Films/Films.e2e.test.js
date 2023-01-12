import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Films from "./Films";

configure({
  adapter: new Adapter(),
});

const films = [
  {
    name: `name`,
    img: `img/d.jpg`,
    video: `video/2.mp4`,
  },
  {
    name: `name`,
    img: `img/d.jpg`,
    video: `video/2.mp4`,
  },
];

describe(`Films`, () => {
  it(`Test e2e`, () => {
    const filmsApp = shallow(
      <Films
        films={films}
      />);
  });
})
