
import React  ,{useEffect}from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar} from 'swiper';  // Correct import for Swiper modules
import 'swiper/swiper-bundle.css'; // Correct CSS import

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



import stateOf from '../../../../public/images/cimages/state-of-art.jpg';
import hospitalBed from '../../../../public/images/cimages/hospital-bed.svg';
import cancer from '../../../../public/images/cimages/cancer.png';
import lungs from '../../../../public/images/cimages/lungs.png';
import skin from '../../../../public/images/cimages/skin.png';
import roboticArm from '../../../../public/images/cimages/robotic-arm.png';




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

  //services starts
      const MySwiperComponent = () => {
        return (
          <div>
            <Swiper
//  modules={[Scrollbar]}
              spaceBetween={25}
              slidesPerView={4} // Adjust this value based on your layout
              scrollbar={{ draggable: false }} // Enable scrollbar
              loop={true} // Enable looping
              autoplay={{
                  delay: 3000, // Delay between slides in milliseconds
                       disableOnInteraction: false, // Keep autoplay running even after user interaction
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
                580: { slidesPerView: 2, spaceBetween: 15 }, // Medium screens
                992: { slidesPerView: 3, spaceBetween: 20 }, // Tablets
                1500: { slidesPerView: 4, spaceBetween: 25 }, // Desktops
              }}
            >


              {/* Slide 2 */}
              <SwiperSlide>
                <div className="item">
                  <div className="alimg">
                    <img src="images/cimages/all-allied-services.png" alt="Allied Services" loading="lazy" />
                  </div>

                  <div className="allied-content">
                    <h2 className="htwo">
                      Advanced Roboticsssss <br />
                      <span>System</span>
                    </h2>
                    <div className="right-arrow-circle"></div>
                  </div>

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="item">
                  <div className="alimg">
                    <img src="images/cimages/all-allied-services.png" alt="Allied Services" loading="lazy" />
                  </div>

                  <div className="allied-content">
                    <h2 className="htwo"> Home Healthcare <br /> <span>Services</span>
                    </h2>
                    <div className="right-arrow-circle"></div>
                  </div>

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="item">
                  <div className="alimg">
                    <img src="images/cimages/all-allied-services.png" alt="Allied Services" loading="lazy" />
                  </div>

                  <div className="allied-content">
                    <h2 className="htwo">
                      Diabetic Foot <br />
                      <span>Clinic</span>
                    </h2>
                    <div className="right-arrow-circle"></div>
                  </div>

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>

               {/* Slide 5 */}
               <SwiperSlide>
                <div className="item">
                  <div className="alimg">
                    <img src="images/cimages/all-allied-services.png" alt="Allied Services" loading="lazy" />
                  </div>

                  <div className="allied-content">
                    <h2 className="htwo">
                      Heart Failure <br />
                      <span>Clinic</span>
                    </h2>
                    <div className="right-arrow-circle"></div>
                  </div>

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>

               {/* Slide 6 */}
               <SwiperSlide>
                <div className="item">
                  <div className="alimg">
                    <img src="images/cimages/all-allied-services.png" alt="Allied Services" loading="lazy" />
                  </div>

                  <div className="allied-content">
                    <h2 className="htwo">
                      Advanced Robotic <br />
                      <span>System</span>
                    </h2>
                    <div className="right-arrow-circle"></div>
                  </div>

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>

            </Swiper>

            {/* Optional: Add Scrollbar if required */}
            {/* <div className="swiper-scrollbar"></div> */}
          </div>
        );
      };

    //   export default MySwiperComponent;

    MySwiperComponent ();
//services starts



//Doctors starts
    const CarouselComponent = () => {
      const options = {
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
          0: { items: 1 },
          450: { items: 2 },
          700: { items: 3 },
          980: { items: 4 },
          1200: { items: 5 },
          1680: { items: 6 },
        },
      };
      return (
        <div>
          {/* Carousel Section */}
          <OwlCarousel className="owl-theme" {...options}>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <img src="images/cimages/jenny-andersen.jpg" alt="Jenny Andersen" />
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      );
    }
      CarouselComponent ();

//services ends





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
    <div className="ctop">
            <p>Center Of Excellence</p>
            <div className="ctopa">
                <h2 className="ch2">Expert care tailored to your unique procedural needs.</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">See All Procedures</Link></div>
            </div>
        </div>
    </div>
    </section>

    {/* center of excellence */}
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



    <section className="pspace pt0 w-box">
    <div className="container">
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

  <section className="pspace pt0 w-box">
    <div className="container">
      <div className="ctop">
            <div className="ctopa">
                <div>
                  <h2 className="ch2 mb2">Consult Tops Doctor Online <br />for any Health Concern</h2>
                 <p className="para">Being one of the pioneers in the healthcare industry at coimbatore, our multispeciality <br />hospitals enables you to take treatment for your health complications.</p>
                </div>
                <div className="w-text-rt"><Link to="#" className="bbtn">View All Doctors</Link></div>
            </div>
      </div>
      <CarouselComponent/>
      </div>
   </section>

        </>
    )
}
export default Dashboard;

