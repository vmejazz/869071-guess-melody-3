import React from 'react';

const WelcomeScreen = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorCount} = props;

  return (
    <React.Fragment>
      <h1>
        Welcome!
      </h1>
      <p>
        Your can make mistakes only {errorCount} tymes<br />
        Are you ready?
      </p>
    </React.Fragment>
  );
};

export default WelcomeScreen;
