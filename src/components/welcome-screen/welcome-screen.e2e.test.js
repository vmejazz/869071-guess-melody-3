import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";


Enzyme.configure({
  adapter: new Adapter()
});

const maxError = 3;

it(`Should button be pressed`, () => {
  const buttonStartHandler = jest.fn();

  const tree = shallow(
      <WelcomeScreen
        maxError={maxError}
        buttonStartHandler={buttonStartHandler} />
  );

  const buttonPlay = tree.find(`.welcome__button`);

  buttonPlay.props().onClick();

  expect(buttonStartHandler.mock.calls.length).toBe(1);
});
