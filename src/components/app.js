import React from 'react';
import WelcomeScreen from './welcome-screen';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorCount} = props;

  return (
    <WelcomeScreen errorCount={errorCount} />
  );
};

export default App;
