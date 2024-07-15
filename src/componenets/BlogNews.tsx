import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogNews = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate('/blogdetails');
  };

  return (
    <div>
      <div>
        <h1 className='font-bold text-4xl text-center mt-20'>Blog News</h1>
        <p className='text-sm text-[#abc] text-center mt-5'>Vestibulum posuere, turpis tempus tempus ornare, erat lorem rhoncus est</p>
      </div>
      <div className='grid grid-cols-3'>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-60' onClick={handleBoxClick}></div>
          <h3 className='font-bold ml-60 mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] ml-60 text-xs mt-6'>12 September 2020</p>
        </div>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-28' onClick={handleBoxClick}></div>
          <h3 className='font-bold ml-28 mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] ml-28 text-xs mt-6'>12 September 2020</p>
        </div>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20' onClick={handleBoxClick}></div>
          <h3 className='font-bold mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] text-sm mt-6'>12 September 2020</p>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-60' onClick={handleBoxClick}></div>
          <h3 className='font-bold ml-60 mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] ml-60 text-xs mt-6'>12 September 2020</p>
        </div>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-28' onClick={handleBoxClick}></div>
          <h3 className='font-bold ml-28 mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] ml-28 text-xs mt-6'>12 September 2020</p>
        </div>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20' onClick={handleBoxClick}></div>
          <h3 className='font-bold mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] text-sm mt-6'>12 September 2020</p>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-60' onClick={handleBoxClick}></div>
          <h3 className='font-bold ml-60 mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] ml-60 text-xs mt-6'>12 September 2020</p>
        </div>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-28' onClick={handleBoxClick}></div>
          <h3 className='font-bold ml-28 mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] ml-28 text-xs mt-6'>12 September 2020</p>
        </div>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20' onClick={handleBoxClick}></div>
          <h3 className='font-bold mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] text-sm mt-6'>12 September 2020</p>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-60' onClick={handleBoxClick}></div>
          <h3 className='font-bold ml-60 mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] ml-60 text-xs mt-6'>12 September 2020</p>
        </div>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-28' onClick={handleBoxClick}></div>
          <h3 className='font-bold ml-28 mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] ml-28 text-xs mt-6'>12 September 2020</p>
        </div>
        <div>
          <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20' onClick={handleBoxClick}></div>
          <h3 className='font-bold mt-4'>Integer rhoncus, orci vel <br />ultricies fermentum</h3>
          <p className='text-[#5b5b5b] text-sm mt-6'>12 September 2020</p>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
