import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Buy from './buy/Buy';
import Tokenomics from './tokenomics/Tokenomics';
import Faq from './faq/Faq';
import Footer from './footer/Footer';

const Index = () => {
    return (
        <>
          <Navbar/>  
          <Home/>
          <About/>
          <Buy/>
          <Tokenomics/>
          <Faq/>
          <Footer/>
        </>
    );
};

export default Index;