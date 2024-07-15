import React from 'react';

const HeroSection1 = () => {
  return (
    <section className="py-12 flex justify-center px-4 sm:py-28">
      <div className="max-w-4xl text-center sm:text-left">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">We Are Creative</h2>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Digital Agency</h2>
          <h6 className="mb-10 mt-10 font-ubuntu text-[#969697]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
            tempus, est id placerat feugiat, risus arcu porta tortor, nec convallis 
            purus magna vitae justo. Suspendisse et venenatis ligula.
          </h6>
          <div className="flex flex-col sm:flex-row justify-start space-x-0 sm:space-x-4 mb-6">
            <button className="bg-[#FF6D04] text-white px-7 py-5 rounded-full mb-4 sm:mb-0">GET EARLY ACCESS</button>
            <p className="m-3 font-open-sans">Watch Video</p>
            {/* <button className="border-[#FF6D04] border px-8 py-4 rounded-full"></button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;

