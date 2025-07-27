import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center '>    
                <h1>The StockTrade Universe</h1>
                <p>Extend your trading and investment experience even further with our partner plateforms</p>
               

               <div className='col-4 p-3 mt-5'>
                <img src= "images/smallcaseLogo.png" style={{width:"50%"}}></img>
                <p className='text-small text-muted'>Thematic investment platform</p>
               </div>
               <div className='col-4 p-3 mt-5'>
                <img src= "images/streakLogo.png" style={{width:"45%"}}></img>
                <p className='text-small text-muted'>Alog & Strategy platform</p>
               </div>
            
               <div className='col-4 p-3 mt-5'>
                 <img src="images/sensibullLogo.svg"style={{width:"45%"}} ></img>
                 <br></br> 
                  <p className='text-small text-muted'> Options trading platfrom</p>
               </div>
               <div className='col-4 p-3 mt-5 mb-3'>
                   <img src= "images/zerodhaFundhouse.png" style={{width:"45%"}}></img>
                   <br></br> 
                  <p className='text-small text-muted'>Asset management</p>
               </div>
               <div className='col-4 p-3 mt-5 mb-3'>
                  <img src= "images/goldenpiLogo.png"style={{width:"45%"}} ></img>
                 <p className='text-small text-muted'>Bonds trading platfrom</p>
               </div>
               <div className='col-4 p-3 mt-5 mb-3'>
                 <img src= "images/dittoLogo.png" style={{width:"40%"}}></img>
                 <p className='text-small text-muted'>Insurance</p>
               </div>
               <button  className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin: "0 auto"}}> Sign Up </button>
            </div>
       </div>
     );
}

export default Universe;