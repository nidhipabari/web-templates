import React from 'react';

const Branding = () => {
  return (
    <div className="px-4 sm:px-40 text-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h1 className="font-semibold text-xl mb-4">Branding</h1>
          <p className="text-sm text-[#969697]">
            Etiam maximus, justo ut <br />pellentesque egestas, erat sapien <br /> 
            mollis massa, nec porta nisl <br /> quam eu arcu. Donec sit amet <br />
            congue lectus
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">Idea & Concept</h1>
          <p className="text-sm text-[#969697]">
            Etiam maximus, justo ut <br />pellentesque egestas, erat sapien <br /> 
            mollis massa, nec porta nisl <br /> quam eu arcu. Donec sit amet <br />
            congue lectus
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">Development</h1>
          <p className="text-sm text-[#969697]">
            Etiam maximus, justo ut <br />pellentesque egestas, erat sapien <br /> 
            mollis massa, nec porta nisl <br /> quam eu arcu. Donec sit amet <br />
            congue lectus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Branding;
