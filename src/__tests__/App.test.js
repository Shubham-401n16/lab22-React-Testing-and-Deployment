import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.js';

describe('Snapshot test for app', () => {
  it('matches the snapshot', () => {
    const currentHTML = renderer.create(<App />).toJSON();
    expect(currentHTML).toMatchSnapshot();
  });
});