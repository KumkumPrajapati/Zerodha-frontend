import React from 'react';

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return ( 
        <>
        <Hero />
        <LeftSection imageUrl="images/kite.png"
        productName="Kite"
          productDescription={" Our ultra-flash flagship trading platefrom with streaming market data, advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your Android and iOS devices." }
          tryDemo=""
         learnMore=""
          googlePlay=""
           appStore=""
           />
        <RightSection imageUrl="images/console.png"
            productName="Console"
            productDescription={" The central dashboard for your Zerodha account. Gain insights intoo your trades and investment with in-depth reports and visualisation." }
            learnMore="" />

        <LeftSection imageUrl="images/coin.png"
        productName="Coin"
          productDescription={" Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." }
          tryDemo=""
         learnMore=""
          googlePlay=""
           appStore=""
           />
        <RightSection  imageUrl="images/kiteconnect.png"
            productName="Kite Connect API"
            productDescription={" Build poweful trading plateforms and experiences with our super simple HTTP/JSON APIs. If yor are a startup, build your investment app and showcase it to our clientbase." }
            learnMore=""/>

        <LeftSection imageUrl="images/varsity.png"
        productName="Varsity mobile"
          productDescription={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrrations. Content is broken down into bite-size cards to help you learn on the go. " }
          tryDemo=""
         learnMore=""
          googlePlay=""
           appStore=""
           />
        <p className='text-center mt-5 mb-5'>Want to know about our technology stack? Check out the StockTrade.tech blog.</p>
        <Universe />
        </>
     );
}

export default ProductPage;