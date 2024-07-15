import React from 'react';
import Map from '../assets/Map.png'; 

const RequestQuote = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={Map} alt="Map" className="w-3/4 sm:w-2/4" />
      <h5 className="text-xs text-[#FF6D04] font-medium text-center mt-4 ">We have clients all over the world</h5>
      <h1 className="font-bold text-2xl sm:text-3xl text-center mt-5">Request a Quote Today!</h1>
    </div>
  );
};

export default RequestQuote;

