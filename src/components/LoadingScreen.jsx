import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="flex flex-col items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-red-200 h-32 w-32 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Logging in...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
