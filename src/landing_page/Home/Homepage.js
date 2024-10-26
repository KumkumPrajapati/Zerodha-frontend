import React from 'react';
import Hero from './hero';
import Awards from './Awards';
import Stats from './stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';


function Homepage() {
    return (
          <>
          
          <Hero />
          <Awards />
          <Stats />
         <Pricing />
         <Education />
         <OpenAccount />
         
          </>
    );
}

export default Homepage;