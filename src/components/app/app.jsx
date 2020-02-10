import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {maxError, buttonStartHandler} = props;

  return (
    <WelcomeScreen
      maxError={maxError}
      buttonStartHandler={buttonStartHandler} />
  );
};

export default App;
