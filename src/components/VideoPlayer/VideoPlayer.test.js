import renderer from 'react-test-renderer';
import React from "react";
import VideoPlayer from './VideoPlayer';

const data = {
  key: `0`,
  name: `1`,
  img: `2`,
  video: `3`,
  onMouse: () => console.log(`4`)
};

describe(`Films`, () => {
  it(`Render`, () => {
    const tree = renderer
      .create(
        <VideoPlayer
          key={data.key}
          name={data.name}
          img={data.img}
          video={data.video}
          onMouse={data.onMouse}
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
