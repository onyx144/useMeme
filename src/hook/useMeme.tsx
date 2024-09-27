import { useState, useEffect } from 'react';

function useMeme() {
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = env.apiKey; 
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${env.apiKey}&tag=meme&rating=g`;

    const fetchMeme = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setMeme(data.data.images.original.url); 
        setLoading(false);
      } catch (err) {
        setError('Failed to load meme');
        setLoading(false);
      }
    };

    fetchMeme();
  }, []);

  return { meme, loading, error };
}

export default useMeme;
