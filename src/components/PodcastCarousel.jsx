import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const PodcastCarousel = ({ podcasts }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="pl-[85px] ml-7 pr-[64px] mt-8 text-[#e60000]">
      <h2 className="text-2xl font-bold mb-4">Featured Podcasts</h2>
      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-2 z-10 bg-gray-200 p-2 rounded-full">
          &lt;
        </button>
        <div ref={carouselRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="min-w-[300px] border border-[#e60000] rounded-lg p-4 flex-shrink-0 flex h-48 w-full">
              <Link to={`/podcast/${podcast.id}`} className="w-full">
                <img src={podcast.image} alt="podcast image" className="h-40 w-40 object-cover mb-2" />
              </Link>
              <div className="ml-4">
                <h3 className="text-xl font-bold">{podcast.title}</h3>
                <p className="text-sm">{podcast.description}</p>
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
