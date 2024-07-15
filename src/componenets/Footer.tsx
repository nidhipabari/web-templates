import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 px-4 sm:px-32 py-10 sm:py-20">
        <div className="text-center sm:text-left">
          <h1 className="font-bold">Main Navigation</h1>
          <p className="mt-4 text-[#858585]">Homepage</p>
          <p className="text-[#858585]">Our Portfolio</p>
          <p className="text-[#858585]">About Us</p>
          <p className="text-[#858585]">Get In Touch</p>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="font-bold">Brand</h1>
          <p className="mt-4 text-[#858585]">Brand Experience</p>
          <p className="text-[#858585]">Platform & Positioning</p>
          <p className="text-[#858585]">Trends & Insights</p>
          <p className="text-[#858585]">Marketing Strategy</p>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="font-bold">Experience</h1>
          <p className="mt-4 text-[#858585]">Web Design</p>
          <p className="text-[#858585]">Mobile App Design</p>
          <p className="text-[#858585]">UI/UX Design</p>
          <p className="text-[#858585]">Dashboard & Tool</p>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="font-bold">Strategy</h1>
          <p className="mt-4 text-[#858585]">Logo & Identity</p>
          <p className="text-[#858585]">Content Management</p>
          <p className="text-[#858585]">System & Guides</p>
          <p className="text-[#858585]">Communications</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center sm:text-left py-5">
        <div></div>
        <p className="text-xs text-[#858585] sm:ml-72">Copyright © 2019. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
