import RenderJoke from '../components/Jokes';

// eslint-disable-next-line react/prop-types
function Home({ text }) {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>{text === 'Get Joke' ? 'Joke Time' : ''}</h1>
      <>
        <RenderJoke />
      </>
    </div>
  );
}

export default Home;
