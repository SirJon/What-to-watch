import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import VideoPlayer from "./VideoPlayer";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Test e2e`, () => {
  const app = shallow(<VideoPlayer/>);
  // const filmsBlock = app.find(`.small-movie-card`);
  // expect(filmsBlock).toHaveLength(films.length);
});
