import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PodcastCarousel from '../components/PodcastCarousel';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [favorites, setFavorites] = useState([]);
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

        // Load favorites from localStorage
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  const toggleFavorite = (podcast) => {
    let updatedFavorites;
    if (favorites.some(fav => fav.id === podcast.id)) {
      updatedFavorites = favorites.filter(fav => fav.id !== podcast.id);
    } else {
      updatedFavorites = [...favorites, podcast];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (error) {
    return <div>Data fetching failed: {error}</div>;
  }

  // Sort podcasts alphabetically for the main list
  const sortedPodcasts = [...podcasts].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <PodcastCarousel podcasts={podcasts} />
      <div className="pl-[85px] ml-7 pr-[64px] mt-8 text-[#e60000]">
        <h2 className="text-2xl font-bold mb-4">All Podcasts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedPodcasts.map((podcast) => (
            <div key={podcast.id} className="border border-[#e60000] rounded-lg p-4 flex flex-col justify-between">
              <div>
                <Link to={`/podcast/${podcast.id}`} className="">
                  <img src={podcast.image} alt="podcast image" className="h-auto w-auto mb-2" />
                </Link>
                <h3 className="text-xl font-bold">{podcast.title}</h3>
                <p className="text-sm">Seasons: {podcast.seasons}</p>
                <p className="text-sm">Genre: {podcast.genres}</p>
                <p className="text-sm">Updated: {new Date(podcast.updated).toLocaleDateString()}</p>
              </div>
              <button
                onClick={() => toggleFavorite(podcast)}
                className="mt-2 px-4 py-2 bg-[#e60000] text-white rounded"
              >
                {favorites.some(fav => fav.id === podcast.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastList;
