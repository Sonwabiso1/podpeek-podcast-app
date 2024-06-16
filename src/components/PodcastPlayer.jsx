import React from 'react';

const PodcastPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center">
        <div className="flex-grow">
          <h3 className="text-lg">Now Playing: Podcast Title</h3>
        </div>
        <div>
          <button className="mr-2">Play</button>
          <button>Pause</button>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;
