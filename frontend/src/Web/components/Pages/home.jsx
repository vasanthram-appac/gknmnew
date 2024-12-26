
import React from 'react';
import stateOf from '../../assets/state-of-art.jpg';
import hospitalBed from '../../assets/hospital-bed.svg';


function Dashboard(){
    return(
        <>
<section className="pspace">
<div className="container">
<div className="grid2">
<div class="about-col">

<div>
<h2 className="ch2 mb2">State-of-the-art diagnostic and imaging services</h2>
<p className="mb2">GKNM Multispeciality Hospital in Coimbatore was established in 1952 by the Kuppuswamy Naidu Charitable Trust to care for Women and Children. Since then this institution has grown to encompass the entire spectrum of multi specialties of healthcare under one roof. Being the most renowned, trusted and the best hospital in Coimbatore, we take utmost care in treating the people with the most advanced technologies that help people to recover quickly.</p>
<div className="btn-fl mt40"><div><a href="#" className="cbtn">Read More</a></div><div><a href="#" className="bbtn">Locate Us</a></div></div>
</div>

<div className="statistics-row">
<div className="statistics">
<div className="stat-img">
    <img src={hospitalBed} alt="Hospital Bed" />
</div>
<div>
<p className="fbold count plus" data-count="43">43</p>
<p>Departments</p>
</div>
</div>

<div className="statistics">
<div className="stat-img"><img src={hospitalBed} alt="Hospital Bed" /></div>
<div>
<p className="fbold count plus" data-count="600">600</p>
<p>Patient Beds</p>
</div>
</div>

<div className="statistics">
<div className="stat-img"><img src={hospitalBed} alt="Hospital Bed" /></div>
<div>
<p className="fbold count plus" data-count="70">70</p>
<p>Years of Experience</p>
</div>
</div>

<div className="statistics">
<div className="stat-img"><img src={hospitalBed} alt="Hospital Bed" /></div>
<div>
<p className="fbold count plus" data-count="43">20</p>
<p>Departments</p>
</div>
</div>

</div>
</div>

<div>

<a class="vlink popup-youtube playBut stretched-link" href="https://www.youtube.com/watch?v=dOM6qiqJJ3M">
<img src={stateOf} alt="GKNMH Centre" />
                           <div class="button is-play">
                           <div class="button-icon">
                           <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M7 6v12l10-6z"></path></svg>
                           </div>
						   </div>
					 </a>
</div>

</div>
</div>
</section>

        </>
    )
}
export default Dashboard;

