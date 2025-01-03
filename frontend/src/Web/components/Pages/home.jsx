
import React  ,{useEffect}from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Correct CSS import
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import { Scrollbar} from 'swiper';  // Correct import for Swiper modules
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import MySwiperbanner from './banner-slider';
import { CarouselComponent , OnlineAccessPortal, Testimonials, VlogCarousel} from './home-page-sliders';
import { MySwiperbanner, MySwiperComponent, DoubleRowSwiper2} from './banner-slider';



function Dashboard(){

  //magnific popup starts
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
  //magnific popup ends

    return(
        <>

        <section className="pspace pt0">
          <div className="w-container">
          <MySwiperbanner />
          </div>
        </section>


<section className="pspace pt0">
<div className="w-container">

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
    <img src="images/cimages/hospital-bed.svg" alt="Hospital Bed" />
</div>
<div>
<p className="fbold count plus" data-count="43">43</p>
<p>Departments</p>
</div>
</div>

<div className="statistics">
<div className="stat-img"><img src="images/cimages/hospital-bed.svg" alt="Hospital Bed" /></div>
<div>
<p className="fbold count plus" data-count="600">600</p>
<p>Patient Beds</p>
</div>
</div>

<div className="statistics">
<div className="stat-img"><img src="images/cimages/hospital-bed.svg" alt="Hospital Bed" /></div>
<div>
<p className="fbold count plus" data-count="70">70</p>
<p>Years of Experience</p>
</div>
</div>

<div className="statistics">
<div className="stat-img"><img src="images/cimages/hospital-bed.svg" alt="Hospital Bed" /></div>
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
<img src="images/cimages/state-of-art.jpg" alt="GKNMH Centre" />
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


<section className="pspace pt0">
    <div className="w-container">
      <div className="w-box  spec">
        <div className="ctop">
            <p>Explore Our Specialities</p>
            <div className="ctopa">
                <h2 className="ch2 mb-0">Personalized expert care designed to meet your unique health needs.</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">See All Specialities</Link></div>
            </div>
        </div>

        <DoubleRowSwiper2 />

      </div>
    </div>
</section>

<section className="pspace pt0 w-box">
    <div className="w-container">
      <div className="ctop">
            <div className="ctopa">
                <div>
                  <h2 className="ch2 mb2">Consult Tops Doctor Online <br />for any Health Concern</h2>
                 <p className="para mb-0">Being one of the pioneers in the healthcare industry at coimbatore, our multispeciality <br />hospitals enables you to take treatment for your health complications.</p>
                </div>
                <div className="w-text-rt"><Link to="#" className="bbtn">View All Doctors</Link></div>
            </div>
      </div>
      <CarouselComponent/>
      </div>
   </section>

    {/* center of excellence */}
    <section className="pspace pt0">
        <div className="w-container">

        <div className="w-box">
        <div className="ctop">
            <p>Center Of Excellence</p>
            <div className="ctopa">
                <h2 className="ch2 mb-0">Expert care tailored to your unique procedural needs.</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">See All Procedures</Link></div>
            </div>
        </div>
        </div>

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
                <img src="images/cimages/cancer.png" alt=""/>
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
                    <img src="images/cimages/lungs.png" alt=""/>
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
                        <img src="images/cimages/skin.png" alt=""/>
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
                            <img src="images/cimages/robotic-arm.png" alt=""/>
                        </div>
                        </div>

        </div>
        </div>
    </section>



    <section className="pspace pt0 w-box">
    <div className="w-container allied w-box spec">
    <div className="ctop">
            <p>Allied Services</p>
            <div className="ctopa">
                <h2 className="ch2">Transformative Treatments and Advanced Surgical Care</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">All Allied Services</Link></div>
            </div>
        </div>

        <MySwiperComponent/>

    </div>
    </section>


    <section className="pspace pt0">
    <div className="w-container">
      <div className="ctop w-box">
            <div className="ctopa">
                <h2 className="ch2">News &amp; Events</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">View All News &amp; Events</Link></div>
            </div>
      </div>

<div className="news-row">
  <div className="upcoming-news">
<div className="upnews-col">
  <h3 className="ch3 mb-4">Upcoming Events</h3>
  <ul className="upnews-tabs mb-5">
    <li><Link to="#" className="active">CME</Link></li>
    <li><Link to="#">OPD</Link></li>
    <li><Link to="#">Webinar</Link></li>
  </ul>
  <div className="upnews-content">
  <div className="upnews-column">
    <div className="upnews-month">
      <p className="upnumber">10</p>
      <p className="upmonth mb-0">DEC</p>
    </div>
    <div>
      <h4 className="ch4">CME program Hosted in Karur</h4>
      <Link to="#" className="news-btn">View Details</Link>
    </div>
  </div>

  <div className="upnews-column">
    <div className="upnews-month">
      <p className="upnumber">21</p>
      <p className="upmonth mb-0">NOV</p>
    </div>
    <div>
      <h4 className="ch4">Medical Thoracoscopy programme at GKNM hospital</h4>
      <Link to="#" className="news-btn">View Details</Link>
    </div>
  </div>

  <div className="upnews-column">
    <div className="upnews-month">
      <p className="upnumber">26</p>
      <p className="upmonth mb-0">JAN</p>
    </div>
    <div>
      <h4 className="ch4">Medical Oncology in Tamilnadu, led by Dr.Shantanu Singh,</h4>
      <Link to="#" className="news-btn">View Details</Link>
    </div>
  </div>
  </div>
</div>
  </div>
  <div className="latest-news">
    <div className="today-news">
      <div className="event-col">
        <div className="event-img"><img src="images/cimages/ca-prostate3.webp" alt="" /></div>
        <div className="event-content">
          <p className="event-date">October 19, 2024</p>
          <h2 className="ch3 mb-3">State-of-the-art diagnostic and imaging services</h2>
          <p>The CME Program on CA Prostate was a roaring success. Thank you so much for patiently attending the event and learning more from the experts. From power-packed speeches to exciting round table discussions – the event was fun-filled and informative. Thank You for making this event a great success.</p>
        </div>
      </div>
    </div>
    <div className="">
    <div className="old-news">

       <div className="oldnews-column">
        <div className="oldnews-img"><img src="images/cimages/ca-prostate3.webp" alt="" /></div>
        <div className="event-cnt">
          <p className="event-date mt-0">October 19, 2024</p>
          <h2 className="ch4 mb-2">State-of-the-art diagnostic and imaging services</h2>
        </div>
       </div>

       <div className="oldnews-column">
        <div className="oldnews-img"><img src="images/cimages/ca-prostate3.webp" alt="" /></div>
        <div className="event-cnt">
          <p className="event-date mt-0">October 19, 2024</p>
          <h2 className="ch4 mb-2">State-of-the-art diagnostic and imaging services</h2>
        </div>
       </div>

       <div className="oldnews-column">
        <div className="oldnews-img"><img src="images/cimages/ca-prostate3.webp" alt="" /></div>
        <div className="event-cnt">
          <p className="event-date mt-0">October 19, 2024</p>
          <h2 className="ch4 mb-2">State-of-the-art diagnostic and imaging services</h2>
        </div>
       </div>




    </div>
    </div>
  </div>
</div>


    </div>
    </section>

    <section className="pspace pt0">
		    <div className="w-container">
        <div className="ctop w-box">
            <div className="ctopa">
                <h2 className="ch2">Doctor Vlogs</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">View All Stories</Link></div>
            </div>
      </div>

      <div className="w-vlog">
            <div className="w-vlog1">
                <div className="w-vlog1a w-pb"><div className="w-yprnt"> <Link to="home" className="w-streched-link"></Link> <img src="images/cimages/v1.png" alt="" /><div className="w-ycntnt">
                    <h4> Kidney Transplant, Nephrology/Urology</h4>
                    <p>Mr.Radhakrishnan</p></div> </div>
                    <div className="w-pba"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="white" d="M7 6v12l10-6z"></path>
                 </svg>
              </div>

             </div>
                <div className="w-vlog1b w-pb"><div className="w-yprnt"> <Link to="home" className="w-streched-link"></Link><img src="images/cimages/v1.png" alt="" /><div className="w-ycntnt">
                    <h4> Kidney Transplant, Nephrology/Urology</h4>
                    <p>Mr.Radhakrishnan</p></div> </div>
                    <div className="w-pba"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="white" d="M7 6v12l10-6z"></path>
                     </svg>
                 </div>

            </div>
        </div>
            <div className="w-vlog2">
                <div className="w-vlog2a">
                    <div className="w-vlog1400 w-pb"><div className="w-yprnt"> <Link to="home" className="w-streched-link"></Link><img src="images/cimages/v1.png" alt="" /><div className="w-ycntnt">
                        <h4> Kidney Transplant, Nephrology/Urology</h4>
                        <p>Mr.Radhakrishnan</p></div> </div>
                    <div className="w-pba"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="white" d="M7 6v12l10-6z"></path>
                 </svg>
                </div>

                </div>
                    <div className="w-vlog2a1 w-pb"><div className="w-yprnt"> <Link to="home" className="w-streched-link"></Link><img src="images/cimages/v1.png" alt="" /><div className="w-ycntnt">
                        <h4> Kidney Transplant, Nephrology/Urology</h4>
                        <p>Mr.Radhakrishnan</p></div> </div>
                        <div className="w-pba"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="white" d="M7 6v12l10-6z"></path>
                         </svg>
                            </div>
                    </div>
                    <div className="w-vlog2a2 w-pb"><div className="w-yprnt"> <Link to="home" className="w-streched-link"></Link><img src="images/cimages/v1.png" alt="" /><div className="w-ycntnt">
                        <h4> Kidney Transplant, Nephrology/Urology</h4>
                        <p>Mr.Radhakrishnan</p></div> </div>
                    <div className="w-pba"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="white" d="M7 6v12l10-6z"></path>
                 </svg>
                    </div>

                </div>
                    </div>
                <div className="w-vlog2b">
                    <div className="w-vlog1400 w-pb"><div className="w-yprnt"> <Link to="home" className="w-streched-link"></Link><img src="images/cimages/v1.png" alt="" />
                        <div className="w-ycntnt">
                        <h4> Kidney Transplant, Nephrology/Urology</h4>
                        <p>Mr.Radhakrishnan</p></div> </div>
                        <div className="w-pba"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="white" d="M7 6v12l10-6z"></path>
                         </svg>
                            </div>
                    </div>
                    <div className="w-vlog2b1 w-pb"><div className="w-yprnt"> <Link to="home" className="w-streched-link"></Link><img src="images/cimages/v1.png" alt="" />
                        <div className="w-ycntnt">
                        <h4> Kidney Transplant, Nephrology/Urology</h4>
                        <p>Mr.Radhakrishnan</p></div> </div>
                        <div className="w-pba"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="white" d="M7 6v12l10-6z"></path>
                         </svg>
                            </div>

                    </div>
                    <div className="w-vlog2b2 w-pb"><div className="w-yprnt"> <Link to="home" className="w-streched-link"></Link><img src="images/cimages/v1.png" alt="" />
                        <div className="w-ycntnt">
                        <h4> Kidney Transplant, Nephrology/Urology</h4>
                        <p>Mr.Radhakrishnan</p></div> </div>
                        <div className="w-pba"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="white" d="M7 6v12l10-6z"></path>
                         </svg>
                            </div>

                    </div>
                </div>
            </div>


            <VlogCarousel />

            </div>

		    </div>
		 </section>

    <section className="pspace pt0">
		    <div className="w-container">
        <div className="ctop w-box">
            <div className="ctopa">
                <h2 className="ch2">Testimonials</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">View All</Link></div>
            </div>
      </div>
      <Testimonials />
		    </div>
		 </section>



<section className="pspace pt0">
  <div className="w-container">
<OnlineAccessPortal />
  </div>
</section>


        </>
    )
}
export default Dashboard;

