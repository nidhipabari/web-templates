import React from 'react';
import Map from '../assets/Map.png'; 

const RequestQuote = () => {
  return (
    <div>
      <div className='flex items-center justify-center h-screen'>
        <img src={Map} alt="Map" className='w-2/4 ' />
      </div>
      <h5 className='text-xs text-[#FF6D04] font-medium text-center'>We have clients all over the world</h5>
      <h1 className='font-bold text-3xl text-center mt-5'>Request a Quote Today!</h1>
    </div>
  );
};

export default RequestQuote;
