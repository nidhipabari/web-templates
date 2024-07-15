import React from 'react';

const UpdateNews = () => {
  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="text-[#232323] font-bold text-3xl sm:text-4xl">Our Update News</h1>
        <p className="text-[#abc] mt-3">
          Vestibulum posuere, turpis tempus tempus ornare, erat lorem rhoncus est
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-[#D8D8D8] h-60 w-60 rounded-md"></div>
            <h3 className="font-bold mt-4 text-center">
              Integer rhoncus, orci vel <br /> ultricies fermentum
            </h3>
            <p className="text-[#5b5b5b] text-xs mt-6">12 September 2020</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateNews;
