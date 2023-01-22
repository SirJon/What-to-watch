import React from 'react';
import Main from '../Main/Main.jsx';

const App = (props) => {
  const { promoMovie, films } = props;
  return (
    <Main
      promoMovie={promoMovie}
      films={films}
    />
  );
}

export default App;