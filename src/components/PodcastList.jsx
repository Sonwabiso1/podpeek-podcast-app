import React from 'react';

const PodcastList = () => {
  // Example podcasts
  const podcasts = [
    { id: 1, title: 'Podcast 1', description: 'Description of Podcast 1' },
    { id: 2, title: 'Podcast 2', description: 'Description of Podcast 2' },
    // Add more podcasts here
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Podcasts</h2>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id} className="mb-4">
            <h3 className="text-xl font-bold">{podcast.title}</h3>
            <p>{podcast.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
