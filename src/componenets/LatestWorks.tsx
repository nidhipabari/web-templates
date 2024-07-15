import React, { useState } from 'react';

const LatestWorks = () => {
  const [activeItem, setActiveItem] = useState('All');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="p-6 w-full relative font-ubuntu mt-6">
      <div className="container flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl sm:text-5xl text-black font-bold mb-6 sm:ml-60">Latest Works</h1>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-col sm:flex-row justify-center sm:space-x-20 font-medium">
            {['All', 'Logo', 'Branding', 'UI/UX', 'Web Design'].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  activeItem === item ? 'border-b-2 border-[#F58634]' : ''
                } mb-4 sm:mb-0`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-[#D8D8D8] h-60 w-60 rounded-md mt-10 sm:mt-20"></div>
        ))}
      </div>
    </div>
  );
};

export default LatestWorks;
