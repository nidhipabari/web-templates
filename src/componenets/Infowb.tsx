import React from 'react';

const Infowb = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-10 sm:p-20">
      <div className="bg-gray-400 h-48 sm:h-96 w-full sm:w-96 rounded-md mx-auto sm:mx-0 mt-10 sm:mt-20"></div>
      <div className="mt-10 sm:mt-20 sm:ml-20">
        <h1 className="text-3xl sm:text-4xl font-bold mt-4 sm:mt-14">Nullam Fermentum <br />Tempus Semper</h1>
        <p className="mt-5 text-sm font-ubuntu text-[#969697]">
          Excepteur sint occaecat cupidatat non proident sunt iculpa qui <br className="hidden sm:block" /> 
          officia deserunt mollit anim est. laborum sed perspiciatis unde <br className="hidden sm:block" />
          omnis natus error sit voluptatem accusantium dolore mque <br className="hidden sm:block" /> 
          laudantium totam rem aperiam.
        </p>
        <p className="mt-5 text-sm font-ubuntu text-[#969697]">
          Dicta sunt explicabo. nemo enim ipsam voluptatem quia magni <br className="hidden sm:block" />
          voluptassit aspernatur aut odit aut fugit sed quia consequuntur <br className="hidden sm:block" />
          magni dolores eos.
        </p>
      </div>
    </div>
  );
};

export default Infowb;
