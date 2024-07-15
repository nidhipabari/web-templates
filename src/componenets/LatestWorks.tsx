import React, { useState } from 'react';

const LatestWorks = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className="  p-6 w-full relative font-ubuntu mt-6">
      <div className="container flex justify-between items-center">
        <h1 className="text-5xl text-black font-bold ml-60">Latest Works</h1>
        <nav>
          <ul className="flex space-x-20 mr-40 font-medium">
            {['All', 'Logo', 'Branding', 'UI/UX', 'Web Design'].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  activeItem === item ? 'border-b-2 border-[#F58634]' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        
      </div>
      <div>
        <div className='grid grid-cols-3'>
            <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-60 '></div>
            <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-28 '></div>
            <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20  '></div>
        </div>
        <div className='grid grid-cols-3'>
            <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-60 '></div>
            <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-28 '></div>
            <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 '></div>
        </div>
      </div>
      
    </header>
  );
};

export default LatestWorks;