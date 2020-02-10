import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const MAX_ERROR = 5;

it(`<App /> should render page`, () => {
  const tree = renderer
    .create(
        <App
          maxError={MAX_ERROR}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
