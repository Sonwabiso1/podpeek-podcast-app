import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (podcastId) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== podcastId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="pl-[85px] ml-7 pr-[64px] mt-8 text-[#e60000]">
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((podcast) => (
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
              onClick={() => removeFavorite(podcast.id)}
              className="mt-2 px-4 py-2 bg-[#e60000] text-white rounded"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
