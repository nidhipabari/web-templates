import React from 'react'

const Info = () => {
  return (
    <div className='grid grid-cols-2 bg-white'>
        <div className='bg-gray-400 h-96 w-96 rounded-md m-20 '>

        </div>

        <div className='ml-20 mt-20'>
            <h1 className='text-4xl font-bold mt-14'>Nullam Fermentum <br></br>Tempus Semper</h1>
            <p className='mt-5 text-sm font-ubuntu text-[#969697]'>Excepteur sint occaecat cupidatat non proident sunt iculpa qui <br></br>officia deserunt mollit anim est. laborum sed perspiciatis unde <br></br> omnis natus error sit voluptatem accusantium dolore mque <br></br> laudantium totam rem aperiam.</p>
            <p className='mt-5 text-sm font-ubuntu text-[#969697]'>Dicta sunt explicabo. nemo enim ipsam voluptatem quia magni <br></br> voluptassit aspernatur aut odit aut fugit sed quia consequuntur <br></br> magni dolores eos.</p>
            <button className="bg-[#FF6D04] text-white px-7 py-5 rounded-full">GET EARLY ACCESS</button>
        </div>
    </div>
  )
}

export default Info;