import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

const MAX_ERROR = 5;

it(`Should render <WelcomeScreen /> screen`, () => {
  const tree = renderer
    .create(
        <WelcomeScreen
          maxError={MAX_ERROR}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
