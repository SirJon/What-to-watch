import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Films from "./Films";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Test e2e`, () => {
  const app = shallow(
      <Films
        films={films}
      />);
  const filmsBlock = app.find(`.small-movie-card`)
});
