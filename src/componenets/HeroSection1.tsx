import React from 'react';

const HeroSection1 = () => {
  return (
    <section className="py-28 flex justify-center mr-96">
      <div className="max-w-4xl text-left">
        <div>
          <h2 className="text-5xl font-bold mb-4">We Are Creative</h2>
          <h2 className="text-5xl font-bold mb-4">Digital Agency</h2>
          
          <h6 className="mb-10 mt-10 font-ubuntu text-[#969697]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent <br></br> tempus, est id placerat feugiat, risus arcu porta tortor, nec convallis <br></br> purus magna vitae justo. Suspendisse et venenatis ligula.</h6>
          <div className="flex justify-start space-x-4 mb-6">
            <button className="bg-[#FF6D04] text-white px-7 py-5 rounded-full">GET EARLY ACCESS</button>
            <p className="m-3 font-open-sans">Watch Video</p>
            <button className="border-[#FF6D04] border px-8 py-4 rounded-full"></button> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
