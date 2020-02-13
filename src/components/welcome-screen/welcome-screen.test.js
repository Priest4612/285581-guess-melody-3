import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

describe(`Render WelcomeScreen`, () => {
  it(`WelcomeScreen errors Count = 5`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorsCount={5}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
