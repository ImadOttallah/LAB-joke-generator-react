// import getJoke from '../api/jokeData';
// import { useState } from 'react';

function renderJoke({ joke }) {
  // const [value, setValue] = useState(0);
  console.warn(joke);
  const handleClick = () => {
  //   getJoke().then(response);
  };
  return (
    <>
      <h1>Joke</h1>
      <h2>Punchline</h2>
      <button type="button" onClick={handleClick}>
        Get a Joke!
      </button>
    </>
  );
}
export default renderJoke;
