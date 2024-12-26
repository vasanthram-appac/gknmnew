
import React  ,{useEffect}from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';


import stateOf from '../../../../public/images/cimages/state-of-art.jpg';
import hospitalBed from '../../../../public/images/cimages/hospital-bed.svg';
import cancer from '../../../../public/images/cimages/cancer.png';
import lungs from '../../../../public/images/cimages/lungs.png';
import skin from '../../../../public/images/cimages/skin.png';
import roboticArm from '../../../../public/images/cimages/robotic-arm.png';




function Dashboard(){

    useEffect(() => {
        // Initialize Magnific Popup after the component is mounted
        $('.popup-youtube').magnificPopup({
          type: 'iframe',
          fixedContentPos: true,
        });

        // Clean up to prevent memory leaks
        return () => {
          $('.popup-youtube').off('click.magnificPopup');
        };
      }, []);
    return(
        <>
<section className="pspace">
<div className="container">
<div className="grid2">
<div className="about-col">

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
<div className='h100'>
<Link className="vlink popup-youtube playBut stretched-link" to="https://www.youtube.com/watch?v=dOM6qiqJJ3M">
<img src={stateOf} alt="GKNMH Centre" />
                           <div className="button is-play">
                           <div className="button-icon">
                           <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M7 6v12l10-6z"></path></svg>
                           </div>
						   </div>
					 </Link>
                     </div>
</div>

</div>
</div>
</section>
<section className="pspace pb0 w-box">
    <div className="container">
    <div class="ctop">
            <p>Center Of Excellence</p>
            <div class="ctopa">
                <h2 className="ch2">Expert care tailored to your unique procedural needs.</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">See All Procedures</Link></div>
            </div>
        </div>
    </div>
    </section>
    <section className="pspace pt0">
        <div className="container">
        <div className="w-cdown">
            <div className="cd1">
            <div className="cd1a">
                <div className="cd1at">
                <h3>Advanced Cancer Care</h3>
                <p>Advanced therapies for fighting cancer.</p>
            </div>
            <div className="cd1ab cbutton">
            <div className="mb2"><Link to="#" className="button">CAR T-cell Therapy</Link></div>
            <div className="mb2"><Link to="#" className="button">Bone Marrow Transplant</Link></div>
            <div className="mb2"><Link to="#" className="button">Proton Therapy</Link></div>
            </div>
            </div>

            <div className="cd1b">
                <img src={cancer} alt=""/>
            </div>
            </div>

            <div className="cd2 cd1">
                <div className="cd1a">
                    <div className="cd1at">
                    <h3>Heart and Lung Care</h3>
                    <p>Specialized procedures for <br /> cardiovascular and respiratory health.</p>
                </div>
                <div className="cd1ab cbutton">
               <div className="mb2"><Link to="#" className="button">Aortic Valve Surgery</Link></div>
               <div className="mb2"><Link to="#" className="button">Thoracic Surgery</Link></div>
               <div className="mb2"><Link to="#" className="button">Lung Transplant</Link></div>
                </div>
                </div>

                <div className="cd1b">
                    <img src={lungs} alt=""/>
                </div>
                </div>
                <div className="cd3 cd1">
                    <div className="cd1a">
                        <div className="cd1at">
                        <h3>Cosmetic and Reconstructive Procedures</h3>
                        <p>Enhancing appearance and restoring <br />
                            function.</p>
                    </div>
                    <div className="cd1ab cbutton">
                    <div className="mb2"><Link to="#" className="button">Hand Microsurgery</Link></div>
                    <div className="mb2"><Link to="#" className="button">Cosmetic And Plastic Surgery</Link></div>
                    <div className="mb2"><Link to="#" className="button">Oral & Maxillofacial Surgery</Link></div>
                    </div>
                    </div>

                    <div className="cd1b">
                        <img src={skin} alt=""/>
                    </div>
                    </div>
                    <div className="cd4 cd1">
                        <div className="cd1a">
                            <div className="cd1at">
                            <h3>Advanced Diagnostic and Surgical Technology</h3>
                            <p>Specialized procedures for <br />
                                cardiovascular and respiratory health.</p>
                        </div>
                        <div className="cd1ab cbutton">
                        <div className="mb2"><Link to="#" className="button">Da Vinci Robotic Surgery</Link></div>
                        <div className="mb2"><Link to="#" className="button">G Scan - Open Standing MRI Scan</Link></div>
                        </div>
                        </div>

                        <div className="cd1b">

                            <img src={roboticArm} alt=""/>
                        </div>
                        </div>

        </div>
        </div>
    </section>
        </>
    )
}
export default Dashboard;

