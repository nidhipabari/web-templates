import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import HeroSection1 from './componenets/HeroSection1';
import Branding from './componenets/Branding';
import Info from './componenets/Info';
import Ideanconcept from './componenets/Ideanconcept';
import LatestWorks from './componenets/LatestWorks';
import WhatClientsSay from './componenets/WhatClientsSay';
import UpdateNews from './componenets/UpdateNews';
import Infowb from './componenets/Infowb';
import BelowInfowb from './componenets/BelowInfowb';
import OurTeam from './componenets/OurTeam';
import BlogNews from './componenets/BlogNews';
import RequestQuote from './componenets/RequestQuote';
import GetInTouch from './componenets/GetInTouch';
import BlogDeets from './componenets/BlogDeets';
import RelatedNews from './componenets/RelatedNews';

const Home = () => (
  <div>
    <HeroSection1 />
    <Branding />
    <Info />
    <Ideanconcept />
    <LatestWorks />
    <WhatClientsSay />
    <UpdateNews />
  </div>
);

const AboutUs = () => (
  <div>
    <Infowb/>
    <BelowInfowb/>
    <Branding />
    <OurTeam/>
    
  </div>
);

const Services = () => <div>
  <Infowb/>
  <Ideanconcept/>
  <WhatClientsSay/>
</div>;
const Blog = () => <div><BlogNews/></div>;
const ContactUs = () => <div><RequestQuote/>
<GetInTouch/></div>;
const BlogDetails=()=> <div><BlogDeets/>
<RelatedNews/></div>

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blogdetails" element={<BlogDetails/>}/>
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
