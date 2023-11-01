import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-64">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <button
              className="text-white text-2xl p-2 bg-gray-900 bg-opacity-50 rounded-full"
              onClick={prevItem}
            >
              &lt;
            </button>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out transform"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-64 p-4 border border-gray-300 rounded shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
            <button
              className="text-white text-2xl p-2 bg-gray-900 bg-opacity-50 rounded-full"
              onClick={nextItem}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carosol1 = () => {
  const items = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
    },
  ];

  return ( 
    <div className="App">
      <Carousel items={items} />
    </div>
  );
};

export default Carosol1;
