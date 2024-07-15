import React from 'react';

const OurTeam = () => {
  return (
    <div className="text-center mt-10 sm:mt-20 mb-20">
      <h1 className="font-bold text-3xl sm:text-4xl">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 sm:mt-20">
        <div className="bg-[#D8D8D8] h-48 sm:h-60 w-48 sm:w-60 rounded-md mx-auto"></div>
        <div className="bg-[#D8D8D8] h-48 sm:h-60 w-48 sm:w-60 rounded-md mx-auto"></div>
        <div className="bg-[#D8D8D8] h-48 sm:h-60 w-48 sm:w-60 rounded-md mx-auto"></div>
      </div>
    </div>
  );
};

export default OurTeam;
