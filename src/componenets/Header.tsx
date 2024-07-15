import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item === 'Home') {
      navigate('/');
    } else {
      navigate(`/${item.replace(' ', '').toLowerCase()}`);
    }
  };

  return (
    <header className="p-6 w-full relative font-ubuntu mt-6">
      <div className="container flex justify-between items-center">
        <h1 className="text-4xl text-[#FF6D04] font-bold ml-60">Rovks.</h1>
        <nav>
          <ul className="flex space-x-20 mr-40 font-medium">
            {['Home', 'About us', 'Services', 'Blog', 'Contact us'].map((item) => (
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
    </header>
  );
};

export default Header;

