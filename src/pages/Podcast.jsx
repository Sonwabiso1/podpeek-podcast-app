import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';

const Podcast = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPodcast(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPodcast();
  }, [id]);

  if (error) {
    return <div>Data fetching failed: {error}</div>;
  }

  if (!podcast) {
    return <div><LoadingScreen/> </div>;
  }

  return (
    <div className="p-4">
      <img src={podcast.image} alt="podcast image" className="h-auto w-auto mb-2" />
      <h2 className="text-2xl font-bold mb-4">{podcast.title}</h2>
      <p>{podcast.description}</p>
      <h3 className="text-xl font-bold mt-4">Seasons</h3>
      <ul className="list-disc ml-6">
        {podcast.seasons.map((season, index) => (
          <li key={index} className="mb-2">
            Season {index + 1}: {season.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Podcast;
