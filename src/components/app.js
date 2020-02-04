import React from 'react';
import WelcomeScreen from './welcome-screen';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {maxError} = props;

  return (
    <WelcomeScreen maxError={maxError} />
  );
};

export default App;
