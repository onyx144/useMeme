import React from 'react';
import logo from './logo.svg';
import './App.css';
import useMeme from './hook/useMeme';
function App() {
  const { meme, loading, error } = useMeme();

  if (loading) {
    return <p>Loading meme...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Random meme:</h1>
      {meme && <img src={meme} alt="Random meme" style={{ maxWidth: '100%' }} />}
      <button onClick={() => window.location.reload()}>Loading another meme</button>
    </div>
  );
}

export default App;
