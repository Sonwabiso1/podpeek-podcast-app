import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PodcastCarousel from '../components/PodcastCarousel';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://podcast-api.netlify.app/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPodcasts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>Data fetching failed: {error}</div>;
  }

  return (
    <div>
      <PodcastCarousel podcasts={podcasts} />
      <div className="pl-[85px] ml-7 pr-[64px] mt-8 text-[#e60000]">
        <h2 className="text-2xl font-bold mb-4">All Podcasts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="border border-[#e60000] rounded-lg p-4">
              <Link to={`/podcast/${podcast.id}`} className="">
                <img src={podcast.image} alt="podcast image" className="h-auto w-auto mb-2" />
              </Link>
              <h3 className="text-xl font-bold">{podcast.title}</h3>
              <p className="text-sm">Seasons: {podcast.seasons}</p>
              <p className="text-sm">Genre: {podcast.genres}</p>
              <p className="text-sm">Updated: {new Date(podcast.updated).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastList;

{/* <ul>
  {podcasts.map((podcast) => (
    <li key={podcast.id} className="mb-4">
      <h3 className="text-xl font-bold">{podcast.title}</h3>
      <p>{podcast.description}</p>
    </li>
  ))}
</ul> */}