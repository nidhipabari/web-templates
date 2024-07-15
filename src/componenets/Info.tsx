import React from 'react';

const Info = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
      
      {/* <div className="bg-gray-400 h-96 sm:h-0 w-full sm:w-1/2 rounded-md m-20 sm:m-0 flex items-center justify-center">
        
      </div> */}

      
      <div className="flex flex-col justify-center items-center sm:items-start ml-4 sm:ml-20 mt-10 sm:mt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mt-14">Nullam Fermentum <br />Tempus Semper</h1>
        <p className="mt-5 text-sm font-ubuntu text-[#969697] text-center sm:text-left">
          Excepteur sint occaecat cupidatat non proident sunt iculpa qui <br />officia deserunt mollit anim est. laborum sed perspiciatis unde <br /> omnis natus error sit voluptatem accusantium dolore mque <br /> laudantium totam rem aperiam.
        </p>
        <p className="mt-5 text-sm font-ubuntu text-[#969697] text-center sm:text-left">
          Dicta sunt explicabo. nemo enim ipsam voluptatem quia magni <br /> voluptassit aspernatur aut odit aut fugit sed quia consequuntur <br /> magni dolores eos.
        </p>
        <button className="bg-[#FF6D04] text-white px-7 py-5 rounded-full mt-8">GET EARLY ACCESS</button>
      </div>
    </div>
  );
};

export default Info;

