import React from "react";
import shoes from '../Components/shoes.png'


function Hero (){
    return(
        <main className="hero">
            <div className="hero_content">
        <div className="heading">
       <h1>YOUR FEET DESERVE THE BEST</h1>
       <p>
        YOU FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND  WE’RE HERE TO HELP YOU WITH
        OUR
        SHOES.
       </p>
       <div className="hero-btn">
        <button>Shop now</button>
        <button className="btn-2">Category</button>
    </div>
    <div className="buy">
        <p>Also available on</p>
        <div className=" logos">
            <img className="img1" src="./Amazon-logo-meaning.jpg" alt="amazon logo"/>
            <img className="img2" src="./flipkart-Emblem.png" alt="flipkart logo"/>
        </div>
    </div>
    </div>
    </div>

    <div className="hero-image" >
     <img src={shoes} alt="shoes img"/>
    </div>
    
        </main>
    )
}
export default Hero;