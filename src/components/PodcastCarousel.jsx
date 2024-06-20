import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PodcastCarousel = ({ podcasts }) => {
  const carouselRef = useRef(null);
  const [randomPodcasts, setRandomPodcasts] = useState([]);

  useEffect(() => {
    // Shuffle podcasts and select 7
    const shuffledPodcasts = podcasts.sort(() => 0.5 - Math.random());
    setRandomPodcasts(shuffledPodcasts.slice(0, 7));
  }, [podcasts]);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="pl-[85px] ml-7 pr-[64px] mt-8 text-[#e60000]">
      <h2 className="text-2xl font-bold mb-4">Featured Podcasts</h2>
      <div className="flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-2 z-10 bg-gray-200 p-2 rounded-full">
          &lt;
        </button>
        <div ref={carouselRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {randomPodcasts.map((podcast) => (
            <div key={podcast.id} className="min-w-[300px] border border-[#e60000] rounded-lg p-4 flex-shrink-0 flex h-48 w-full">
              <Link to={`/podcast/${podcast.id}`} className="w-1/3">
                <img src={podcast.image} alt="podcast image" className="h-full w-full object-cover mb-2 rounded-lg" />
              </Link>
              <div className="w-2/3 ml-4 overflow-hidden">
                <h3 className="text-xl font-bold">{podcast.title}</h3>
                <p className="text-sm overflow-y-auto max-h-36 scrollbar-hide">{podcast.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 mr-2 z-10 bg-gray-200 p-2 rounded-full">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PodcastCarousel;