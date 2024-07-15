import React from 'react'

const UpdateNews = () => {
  return (
    <div>
        <div className='text-center'>
            <h1 className='text-[#232323] font-bold text-4xl'>Our Update News</h1>
            <p className='text-[#abc] mt-3'>Vestibulum posuere, turpis tempus tempus ornare, erat lorem rhoncus est</p>
        </div>
        <div className='grid grid-cols-3'>
            <div>
                <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-60 '></div>
                <h3 className='font-bold ml-60 mt-4'>Integer rhoncus, orci vel <br></br>ultricies fermentum</h3>
                <p className='text-[#5b5b5b] ml-60 text-xs mt-6'>12 September 2020</p>
            </div>
            <div>
                <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20 ml-28 '></div>
                <h3 className='font-bold ml-28 mt-4'>Integer rhoncus, orci vel <br></br>ultricies fermentum</h3>
                <p className='text-[#5b5b5b] ml-28 text-xs mt-6'>12 September 2020</p>
            </div>
            <div>
                <div className='bg-[#D8D8D8] h-60 w-60 rounded-md mt-20  '></div>
                <h3 className='font-bold mt-4 '>Integer rhoncus, orci vel <br></br>ultricies fermentum</h3>
                <p className='text-[#5b5b5b]  text-sm mt-6'>12 September 2020</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default UpdateNews