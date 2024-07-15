import React from 'react';

const WhatClientsSay = () => {
  return (
    <div className="p-4 sm:p-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-32">
      <h1 className="font-bold text-black text-2xl sm:text-3xl mt-4 ml-60 sm:mt-0">
          What Our Clients <br /> Say
        </h1>
        <div className="text-center sm:text-left">
          <p className="text-[#08150A] mt-10 sm:mt-20">
            “Excepteur sint occaecat cupidatat non proident <br /> sunt iculpa qui officia deserunt mollit anim est. <br /> 
            laborum sed perspiciatis unde omnis natus error sit <br /> voluptatem accusantium dolore mque laudantium <br /> 
            totam rem aperiam.”
          </p>
          <p className="text-[#08150A] font-semibold mt-6 sm:mt-10">John Doe</p>
          <p className="text-xs text-gray-400">Director of MNC</p>
        </div>
        
      </div>
    </div>
  );
};

export default WhatClientsSay;
