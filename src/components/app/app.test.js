import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';

describe(`Render App`, () => {
  it(`App errors Count = 5`, () => {
    const tree = renderer
      .create(<App
        errorsCount={5}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
