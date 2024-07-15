import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogNews = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate('/blogdetails');
  };

  return (
    <div className="p-4 sm:p-10">
      <div className="text-center">
        <h1 className="font-bold text-2xl sm:text-4xl mt-10 sm:mt-20">Blog News</h1>
        <p className="text-sm text-[#abc] mt-2 sm:mt-5">
          Vestibulum posuere, turpis tempus tempus ornare, erat lorem rhoncus est
        </p>
      </div>
      <div className='flex justify-center'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 sm:mt-20 ">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="text-center sm:text-left">
            <div
              className="bg-[#D8D8D8] h-40 sm:h-60 w-40 sm:w-60 rounded-md mx-auto sm:ml-0 cursor-pointer"
              onClick={handleBoxClick}
            ></div>
            <h3 className="font-bold mt-4 sm:ml-0">
              Integer rhoncus, orci vel <br /> ultricies fermentum
            </h3>
            <p className="text-[#5b5b5b] text-xs mt-2 sm:mt-6 sm:ml-0">12 September 2020</p>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default BlogNews;

