import { useState } from 'react';
import getJoke from '../api/jokeData';

function RenderJoke() {
  const [value, setValue] = useState({});
  const [text, btnText] = useState('Get Joke');

  const handleClick = () => {
    if (text === 'Get Joke' || text === 'Get another joke') {
      getJoke()
        .then(setValue)
        .then(() => {
          btnText('Get punchline');
        });
    } else if (text === 'Get punchline') {
      btnText('Get another joke');
    }
  };
  return (
    <>
      <h1>{ text === 'Get Joke' ? 'Joke Time' : ''}</h1>
      <h1>{ text === 'Get Joke' ? '' : value.setup}</h1>
      <h2>{ text === 'Get another joke' ? value.delivery : ''}</h2>
      <button type="button" onClick={handleClick}>{text}
      </button>
    </>
  );
}
export default RenderJoke;
