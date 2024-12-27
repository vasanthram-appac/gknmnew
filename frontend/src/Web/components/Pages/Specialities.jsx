import React from 'react';


function Specialities(){
   return(
      <>
      <div  className='conatainer'>
        <div className="w-banner-container">
          <div className="w-rdiv">
            <img  src="images/cimages/bnr1.png"/>
          </div>

        <div  className='w-l-div'>
        <div className="w-feature-container">
      <div className="w-feature-card">
        <span className="w-icon w-star-icon"></span> 
        <div>
          <h4 className="w-title">Asia’s Largest Integrated</h4>
          <p className="w-subtitle">Out-Patient Centre</p>
        </div>
      </div>
      <div className="w-feature-card">
        <span className="w-icon w-thumb-icon">👍</span>
        <div>
          <h4 className="w-title">Excellence in</h4>
          <p className="w-subtitle">Quality Healthcare</p>
        </div>
      </div>
    </div>
    <div className="w-hero-container">
      <h1 className="w-hero-title">
        Care That <span className="w-highlight">Heals</span>
      </h1>
      <p className="w-hero-subtitle">Expert medical care tailored to your needs.</p>
      <button className="w-hero-button">Explore Our Services</button>
    </div>
        </div>

        </div>

       </div>
      </>
   )
}

export default  Specialities;