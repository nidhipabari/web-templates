import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F9F9F9]'>
            <div className='grid grid-cols-4  font-ubuntu  mt-40'>
        
        <div className='ml-52 py-20'>
            <h1 className='font-bold'>Main Navigation</h1>
            <p className=' mt-4 text-[#858585]'>Homepage</p>
            <p className=' text-[#858585]'>Our Portfolio</p>
            <p className=' text-[#858585]'>About Us</p>
            <p className=' text-[#858585]'>Get In Touch</p>
            
        </div>
        <div className='ml-32 py-20'>
            <h1 className='font-bold'>Brand</h1>
            <p className=' mt-4 text-[#858585]'>Brand Experience</p>
            <p className=' text-[#858585]'>Platform & Positioning</p>
            <p className=' text-[#858585]'>Trends & Insights</p>
            <p className=' text-[#858585]'>Marketing Strategy</p>
            
        </div>
        <div className='ml-20 py-20'>
            <h1 className='font-bold '>Experience</h1>
            <p className='mt-4 text-[#858585]'>Web Design</p>
            <p className=' text-[#858585]'>Mobile App Design</p>
            <p className=' text-[#858585]'>UI/UX Design</p>
            <p className=' text-[#858585]'>Dashboard & Tool</p>
            
        </div>
        <div className=' py-20'>
            <h1 className='font-bold '>Strategy</h1>
            <p className='mt-4 text-[#858585]'>Logo & Identity</p>
            <p className=' text-[#858585]'>Content Management</p>
            <p className=' text-[#858585]'>System & guides</p>
            <p className=' text-[#858585]'>Communications</p>
            
        </div>

    </div>
    <div className='grid grid-cols-2'>
        <div></div>
        <p className='text-xs text-[#858585] ml-72 pb-5'>Copyright © 2019. All rights reserved.</p>
    </div>
    
    </div>
    

  )
}

export default Footer;