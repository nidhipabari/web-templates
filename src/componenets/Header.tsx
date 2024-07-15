import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Close the menu when an item is clicked
    if (item === 'Home') {
      navigate('/');
    } else {
      navigate(`/${item.replace(' ', '').toLowerCase()}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-6 w-full relative font-ubuntu mt-6">
      <div className="container flex justify-between items-center">
        <h1 className="text-4xl text-[#FF6D04] font-bold ml-60">Rovks.</h1>
        <nav>
          <ul className="hidden md:flex space-x-20 mr-40 font-medium">
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
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4 font-medium">
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
        </div>
      )}
    </header>
  );
};

export default Header;

