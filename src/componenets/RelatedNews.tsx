import React from 'react';

const RelatedNews = () => {
  return (
    <div className='mb-20'>
      <div className="text-center sm:text-left sm:ml-60 mt-10 sm:mt-20 ">
        <h1 className="text-2xl sm:text-2xl font-bold text-[#232323]">Related News</h1>
        <p className="text-[#abc] mt-3">Vestibulum posuere, turpis tempus tempus</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 sm:mt-20">
        <div className="text-center sm:text-left">
          <div className="bg-[#D8D8D8] h-48 sm:h-60 w-48 sm:w-60 rounded-md mx-auto sm:ml-60"></div>
          <h3 className="font-bold mt-4 sm:ml-60">Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className="text-[#5b5b5b] text-xs mt-6 sm:ml-60">12 September 2020</p>
        </div>
        <div className="text-center sm:text-left">
          <div className="bg-[#D8D8D8] h-48 sm:h-60 w-48 sm:w-60 rounded-md mx-auto sm:ml-28"></div>
          <h3 className="font-bold mt-4 sm:ml-28">Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className="text-[#5b5b5b] text-xs mt-6 sm:ml-28">12 September 2020</p>
        </div>
        <div className="text-center sm:text-left">
          <div className="bg-[#D8D8D8] h-48 sm:h-60 w-48 sm:w-60 rounded-md mx-auto"></div>
          <h3 className="font-bold mt-4">Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className="text-[#5b5b5b] text-xs mt-6">12 September 2020</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
