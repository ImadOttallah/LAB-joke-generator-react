import { useState } from 'react';
import getJoke from '../api/jokeData';

function RenderJoke() {
  const [value, setValue] = useState();
  const [punchline, setPunchline] = useState();

  const handleClick = () => {
    getJoke().then((taco) => setValue(taco.setup));
  };
  const deliveryClick = () => {
    getJoke().then((taco) => setPunchline(taco.delivery));
  };
  return (
    <>
      <h1>{value}</h1>
      <h2>{punchline}</h2>
      <button type="button" onClick={handleClick}>
        Get a Joke!
      </button>
      <button type="button" onClick={deliveryClick}>
        Punchline!
      </button>
    </>
  );
}
export default RenderJoke;
