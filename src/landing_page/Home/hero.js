import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
      <div className="container p-5 mb-5">
            <div className="row text-center">
               <img src='images/homeHero.png' alt="Hero Image" className='mb-5' />
                   <h1 className='mt-'> Invest in everthing</h1>
                   <p>Online Plateform to invert in stocks, derivatives, mutual finds & more</p>
                   <Link to={'/signup'}>
                   <button  className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin: "0 auto"}}> Sign Up </button></Link>
            </div>
      </div>

     );
}

export default Hero;