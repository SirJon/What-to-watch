import renderer from 'react-test-renderer';
import React from "react";
import VideoPlayer from './VideoPlayer';

describe(`Films`, () => {
  it(`Render`, () => {
    const tree = renderer
      .create(
        <VideoPlayer
        />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
