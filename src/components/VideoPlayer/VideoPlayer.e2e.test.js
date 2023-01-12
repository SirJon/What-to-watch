import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import VideoPlayer from "./VideoPlayer";

const data = {
  key: `0`,
  name: `1`,
  img: `2`,
  video: `3`,
  onMouse: () => console.log(`4`)
};

configure({
  adapter: new Adapter(),
});

it(`Test e2e`, () => {
  const wrapper = shallow(<VideoPlayer
    key={data.key}
    name={data.name}
    img={data.img}
    video={data.video}
    onMouse={data.onMouse} />);
  const video = wrapper.find(`video`);
  console.log(video.debug());
});
