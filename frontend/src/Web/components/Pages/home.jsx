
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
              // scrollbar={{ draggable: true }} // Enable scrollbar
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
                      Advanced Robotics <br />
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
                    <img src="images/cimages/lactation-education.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="allied-content">
                    <h2 className="htwo">Lactation Education</h2>
                    <div className="right-arrow-circle"></div>
                  </div>
                  <div className="overlay"></div>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="item">
                  <div className="alimg">
                    <img src="images/cimages/dietetics.jpg" alt="" loading="lazy" />
                  </div>

                  <div className="allied-content">
                    <h2 className="htwo">Dietetics</h2>
                    <div className="right-arrow-circle"></div>
                  </div>

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>

               {/* Slide 5 */}
               <SwiperSlide>
                <div className="item">
                  <div className="alimg">
                    <img src="images/cimages/master-health-checkup.jpg" alt="" loading="lazy" />
                  </div>

                  <div className="allied-content">
                    <h2 className="htwo">Master Health <br /><span>Checkup</span></h2>
                    <div className="right-arrow-circle"></div>
                  </div>

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <div className="alimg">
                    <img src="images/cimages/lactation-education.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="allied-content">
                    <h2 className="htwo">Lactation Education</h2>
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
//services ends



//Doctors starts
    const CarouselComponent = () => {
      const options = {
        margin: 20,
        duration: 2000,
        speed: 1000,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        dots: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
       },
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
          <OwlCarousel className="owl-theme doc-slider" {...options}>
            <div className="w-photo">
              <div className="docimg"><img src="images/cimages/jenny-andersen.jpg" alt="" /></div>
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
            <div className="docimg"><img src="images/cimages/vignesh-anandhan.jpg" alt="" /></div>
              <div className="doc-cnt">
              <h3>Vignesh Anandhan</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
            <div className="docimg"><img src="images/cimages/jenny-andersen1.jpg" alt="" /></div>
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
            <div className="docimg"><img src="images/cimages/arun-kumar.jpg" alt="" /></div>
              <div className="doc-cnt">
              <h3>Arun Kumar</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
            <div className="docimg"><img src="images/cimages/kavyarasy.jpg" alt="" /></div>
              <div className="doc-cnt">
              <h3>Kavyarasy</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
            <div className="docimg"><img src="images/cimages/santni.jpg" alt="" /></div>
              <div className="doc-cnt">
              <h3>Santni</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
              <div className="docimg"><img src="images/cimages/jenny-andersen.jpg" alt="" /></div>
              <div className="doc-cnt">
              <h3>Jenny Andersen</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
            <div className="docimg"><img src="images/cimages/vignesh-anandhan.jpg" alt="" /></div>
              <div className="doc-cnt">
              <h3>Vignesh Anandhan</h3>
              <p>MBBS, DA, DNB, IDCCM</p>
              </div>
            </div>
            <div className="w-photo">
            <div className="docimg"><img src="images/cimages/jenny-andersen1.jpg" alt="" /></div>
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

//doctors ends

//portal starts
const OnlineAccessPortal = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    duration: 2000,
    speed: 1000,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1150: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <OwlCarousel className="owl-theme" {...options}>
        <div className=" online-access-portal">
          <div className="web-portal portal-column">
            <div>
              <img
                src="images/cimages/web-portal-icon.webp"
                alt=""
                className="icon-img"
              />
            </div>
            <div className="rep-sub">
              <h2 className="ch3">Web Portal -In Patients</h2>
              <p className="bpara mb-0">
                Et purus duis sollicitudin dignissim habitant, Egestas nulla
                quis venenatis cras sed e
              </p>
            </div>
          </div>
        </div>
        <div className=" online-access-portal">
          <div className="lab-reports portal-column">
            <div>
              <img
                src="images/cimages/lab-reports-icon.webp"
                alt=""
                className="icon-img"
              />
            </div>
            <div className="rep-sub">
              <h2 className="ch3">Lab Report</h2>
              <p className="bpara mb-0">
                Et purus duis sollicitudin dignissim habitant, Egestas nulla
                quis venenatis cras sed e
              </p>
            </div>
          </div>
        </div>
        <div className=" online-access-portal">
          <div className="ol-payment portal-column">
            <div>
              <img
                src="images/cimages/online-payment-icon.webp"
                alt=""
                className="icon-img"
              />
            </div>
            <div className="rep-sub">
              <h2 className="ch3">Online Payment</h2>
              <p className="bpara mb-0">
                Et purus duis sollicitudin dignissim habitant, Egestas nulla
                quis venenatis cras sed e
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

 OnlineAccessPortal();

//portal ends


//Testimonial starts

const Testimonials = () => {
  const options = {
    loop: true,
    margin: 20,
    duration: 2000,
    speed: 1000,
    slideSpeed : 500,
    smartSpeed: 600,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 2,
        margin: 12,
      },
      1100: {
        items: 3,
      },
      1500: {
        items: 4,
      },
    },
  };

  return (
    <div className="testimonials">
      <OwlCarousel className="owl-theme" {...options}>
        {/* Testimonial 1 */}
        <div className="mm-testi">
          <div className="s-testi">
            <div className="l-testi">
              <div className="i-img">
                <div>
                  <img src="images/cimages/test-images.png" alt="Nalini Bhagu" />
                </div>
                <div>
                  <div>
                    <p className="review-name">Nalini Bhagu</p>
                    <p className="review">1 review</p>
                  </div>
                  <div className="star">
                    <div>
                      <img
                        src="images/cimages/5-star-img.png"
                        alt="Rating"
                        className="star-img"
                      />
                    </div>
                    <div>
                      <p className="min">20 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="images/cimages/g-googlee.png" alt="Google" />
              </div>
            </div>
          </div>
          <div>
            <p className="grey">
              Great Hospital and Dr.Vijayku,ar sir and team doctors and nurse
              team and staff are giving their best. Best paediatric
              cardiothoracic team.
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="mm-testi">
          <div className="s-testi">
            <div className="l-testi">
              <div className="i-img">
                <div>
                  <img src="images/cimages/test-images.png" alt="Nalini Bhagu" />
                </div>
                <div>
                  <div>
                    <p className="review-name">Nalini Bhagu</p>
                    <p className="review">1 review</p>
                  </div>
                  <div className="star">
                    <div>
                      <img
                        src="images/cimages/5-star-img.png"
                        alt="Rating"
                        className="star-img"
                      />
                    </div>
                    <div>
                      <p className="min">20 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="images/cimages/g-googlee.png" alt="Google" />
              </div>
            </div>
          </div>
          <div>
            <p className="grey">
              Great Hospital and Dr.Vijayku,ar sir and team doctors and nurse
              team and staff are giving their best. Best paediatric
              cardiothoracic team.
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="mm-testi">
          <div className="s-testi">
            <div className="l-testi">
              <div className="i-img">
                <div>
                  <img src="images/cimages/test-images.png" alt="Nalini Bhagu" />
                </div>
                <div>
                  <div>
                    <p className="review-name">Nalini Bhagu</p>
                    <p className="review">1 review</p>
                  </div>
                  <div className="star">
                    <div>
                      <img
                        src="images/cimages/5-star-img.png"
                        alt="Rating"
                        className="star-img"
                      />
                    </div>
                    <div>
                      <p className="min">20 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="images/cimages/g-googlee.png" alt="Google" />
              </div>
            </div>
          </div>
          <div>
            <p className="grey">
              Great Hospital and Dr.Vijayku,ar sir and team doctors and nurse
              team and staff are giving their best. Best paediatric
              cardiothoracic team. Great Hospital and Dr.Vijayku,ar sir and team
              doctors and nurse team and staff are giving their best.
            </p>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="mm-testi">
          <div className="s-testi">
            <div className="l-testi">
              <div className="i-img">
                <div>
                  <img src="images/cimages/test-images.png" alt="Nalini Bhagu" />
                </div>
                <div>
                  <div>
                    <p className="review-name">Nalini Bhagu</p>
                    <p className="review">1 review</p>
                  </div>
                  <div className="star">
                    <div>
                      <img
                        src="images/cimages/5-star-img.png"
                        alt="Rating"
                        className="star-img"
                      />
                    </div>
                    <div>
                      <p className="min">20 minutes ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="images/cimages/g-googlee.png" alt="Google" />
              </div>
            </div>
          </div>
          <div>
            <p className="grey">
              Great Hospital and Dr.Vijayku,ar sir and team doctors and nurse
              team and staff are giving their best. Best paediatric
              cardiothoracic team.
            </p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

Testimonials();

//Testimonial ends


//vlog starts
const VlogCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      580: {
        items: 2,
      },
      1150: {
        items: 3,
      },
    },
  };

  return (
    <div className="w-vlog3">
      <OwlCarousel className="owl-theme" {...options}>
        {/* Slide 1 */}
        <div className="w-vlog1a w-pb">
          <div className="w-yprnt">
            <Link to="home" className="w-streched-link"></Link>
            <img src="images/cimages/v1.png" alt="" />
            <div className="w-ycntnt">
              <h4>Kidney Transplant, Nephrology/Urology</h4>
              <p>Mr.Radhakrishnan</p>
            </div>
          </div>
          <div className="w-pba">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path fill="white" d="M7 6v12l10-6z"></path>
            </svg>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="w-vlog1b w-pb">
          <div className="w-yprnt">
            <Link to="home" className="w-streched-link"></Link>
            <img src="images/cimages/v1.png" alt="" />
            <div className="w-ycntnt">
              <h4>Kidney Transplant, Nephrology/Urology</h4>
              <p>Mr.Radhakrishnan</p>
            </div>
          </div>
          <div className="w-pba">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path fill="white" d="M7 6v12l10-6z"></path>
            </svg>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="w-vlog1b w-pb">
          <div className="w-yprnt">
            <Link to="home" className="w-streched-link"></Link>
            <img src="images/cimages/v1.png" alt="" />
            <div className="w-ycntnt">
              <h4>Kidney Transplant, Nephrology/Urology</h4>
              <p>Mr.Radhakrishnan</p>
            </div>
          </div>
          <div className="w-pba">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path fill="white" d="M7 6v12l10-6z"></path>
            </svg>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="w-vlog1b w-pb">
          <div className="w-yprnt">
            <Link to="home" className="w-streched-link"></Link>
            <img src="images/cimages/v1.png" alt="" />
            <div className="w-ycntnt">
              <h4>Kidney Transplant, Nephrology/Urology</h4>
              <p>Mr.Radhakrishnan</p>
            </div>
          </div>
          <div className="w-pba">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path fill="white" d="M7 6v12l10-6z"></path>
            </svg>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

VlogCarousel();

//vlog ends

    return(
        <>
<section className="pspace">
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


<section className="pspace pt0">
    <div className="w-container">
      <div className="w-box">
        <div className="ctop">
            <p>Explore Our Specialities</p>
            <div className="ctopa">
                <h2 className="ch2 mb-0">Personalized expert care designed to meet your unique health needs.</h2>
                <div className="w-text-rt"><Link to="#" className="bbtn">See All Specialities</Link></div>
            </div>
        </div>

        <div class="w-sp">
                <div class="w-spa">
                <svg width="74" height="66" viewBox="0 0 74 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2020)">
<path d="M21.1963 13.6636H20.0552L19.7507 14.7634L15.4679 30.2327H3.5245C2.8556 27.8104 2.45142 25.249 2.45142 22.6272C2.45142 11.4461 11.2209 2.50586 21.8634 2.50586C27.4391 2.50586 32.5257 5.04104 36.0736 8.92931L37.1816 10.1437L38.2897 8.92931C41.834 5.04499 47.0363 2.50586 52.5116 2.50586C63.2876 2.50586 72.0406 11.4511 72.0406 22.6272C72.0406 25.2531 71.6441 27.8072 70.97 30.2327H59.933L55.762 14.7729L55.4627 13.6636H54.3138H50.2882H49.147L48.8426 14.7634L44.5598 30.2327H38.0944H37.5868L37.1835 30.541L35.1707 32.0797L34.7651 32.3897L34.6329 32.8827L33.1517 38.4042L26.6685 14.7669L26.3659 13.6636H25.2219H21.1963Z" stroke="#2B3990" stroke-width="3"/>
<path d="M56.305 36.1571L56.7083 36.4654H57.2159H67.9544C63.4996 44.4708 56.1497 51.2069 49.5953 56.0901C46.0466 58.7339 42.7684 60.8074 40.3791 62.2188C39.185 62.9241 38.2147 63.463 37.5458 63.8241C37.4176 63.8934 37.3005 63.9561 37.195 64.0121C37.0907 63.9564 36.975 63.8942 36.8484 63.8255C36.1827 63.4644 35.217 62.9255 34.0285 62.2203C31.65 60.809 28.3864 58.7356 24.8522 56.0918C18.3249 51.2089 11.0003 44.4724 6.54878 36.4654H18.2942H18.8263L19.2394 36.1301L21.1352 34.5915L21.5069 34.2898L21.6352 33.8285L23.1966 28.2106L29.708 52.0446L30.0098 53.1493H31.155H35.1805H36.3238L36.6269 52.047L40.9111 36.4654H47.2573H47.7649L48.1683 36.1571L50.1811 34.6185L50.5866 34.3085L50.7189 33.8154L52.2096 28.2581L53.7579 33.8285L53.8926 34.313L54.2922 34.6185L56.305 36.1571Z" stroke="#009951" stroke-width="3"/>
</g>
<defs>
<clipPath id="clip0_7864_2020">
<rect width="72.5892" height="65.6333" fill="white" transform="translate(0.951416 0.0703125)"/>
</clipPath>
</defs>
</svg>
                <p>Heart & Circulatory Care</p>
            </div> <div class="w-spa">

            <svg width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2024)">
<path d="M65.3363 46.0184L65.3169 46.2999L65.5479 46.462L66.2212 46.9345C66.3031 47.3885 66.3476 47.853 66.3476 48.3267C66.3476 51.9128 63.9348 54.9777 60.5478 56.0929L60.1987 56.2079L60.2042 56.5754C60.205 56.6221 60.2055 56.6253 60.2059 56.6274C60.2062 56.6289 60.2064 56.6298 60.2064 56.6482C60.2064 59.9616 57.3935 62.6847 53.8771 62.6847C53.506 62.6847 53.1417 62.6523 52.7854 62.5933L52.4716 62.5413L52.2915 62.8036C50.604 65.261 47.694 66.8916 44.3767 66.8916C40.9257 66.8916 37.9146 65.1278 36.2631 62.5038L35.84 61.8315L35.4168 62.5038C33.7655 65.1276 30.7544 66.8915 27.3034 66.8915C23.9861 66.8915 21.076 65.2609 19.3886 62.8034L19.2084 62.5411L18.8945 62.5932C18.5385 62.6523 18.1742 62.6846 17.8029 62.6846C14.2866 62.6846 11.4737 59.9615 11.4737 56.648C11.4737 56.6469 11.4737 56.6455 11.4738 56.6432C11.4738 56.64 11.474 56.6351 11.4743 56.627C11.4747 56.6161 11.4756 56.5948 11.4759 56.5728L11.4796 56.2071L11.1323 56.0928C7.74524 54.9776 5.33243 51.9128 5.33243 48.3266C5.33243 47.8344 5.38049 47.3519 5.46862 46.8813L6.27934 46.0348L6.44993 45.8567L6.41243 45.6129L6.27389 44.7124L6.43403 44.5603L6.11524 44.1988C4.72741 42.6251 3.89319 40.598 3.89319 38.3856C3.89319 35.6941 5.12764 33.2748 7.09393 31.6159L7.36784 31.3848L7.23698 31.0511C6.8855 30.155 6.69223 29.1855 6.69223 28.1721C6.69223 25.6201 7.91157 23.335 9.83558 21.8243L9.95549 21.7302L10.0025 21.5851L10.4454 20.2175L10.549 19.8978L10.292 19.6811L9.60445 19.1015C9.59626 18.9484 9.59204 18.7945 9.59204 18.6397C9.59204 13.6715 13.8064 9.60697 19.0515 9.60697H19.3367L19.4819 9.36136L20.1779 8.18363L20.3283 7.92916L20.1779 7.67474L19.8207 7.07073C20.7668 3.53137 24.1283 0.891602 28.1572 0.891602C31.2198 0.891602 33.8997 2.41914 35.4239 4.70881L35.8401 5.33408L36.2563 4.70881C37.7805 2.41914 40.4604 0.891602 43.523 0.891602C47.54 0.891602 50.8936 3.51577 51.851 7.03929L51.0672 8.08339L50.7397 8.51962L51.2027 8.80799L52.3644 9.53151L52.4858 9.6071H52.6288C57.8739 9.6071 62.0882 13.6716 62.0882 18.6397C62.0882 18.7248 62.0869 18.8097 62.0844 18.8943L61.192 18.989L60.4952 19.0629L60.7918 19.6978L61.7003 21.6427L61.7507 21.7507L61.8445 21.8243C63.7684 23.3351 64.9878 25.6201 64.9878 28.1721C64.9878 29.1855 64.7946 30.155 64.4431 31.0511L64.3122 31.3848L64.5861 31.6159C66.5524 33.2748 67.7869 35.6941 67.7869 38.3856C67.7869 40.5981 66.9527 42.6251 65.5648 44.1988L65.2452 44.5613L65.4251 44.7311L65.3363 46.0184Z" stroke="#009951"/>
<path d="M65.8351 46.0528L65.9401 44.5301C65.94 44.5299 65.94 44.5297 65.9398 44.5296C67.4033 42.8701 68.2869 40.7272 68.2869 38.3856C68.2869 35.5361 66.979 32.9806 64.9086 31.2337C65.2822 30.2811 65.4878 29.2498 65.4878 28.1721C65.4878 25.4554 64.1887 23.0295 62.1533 21.431L61.2448 19.4862L62.5608 19.3466C62.5787 19.1131 62.5882 18.8775 62.5882 18.6397C62.5882 13.3751 58.1292 9.1071 52.6288 9.1071L51.4671 8.38358L52.3948 7.14774C51.4657 3.27836 47.8477 0.391602 43.523 0.391602C42.6845 0.391602 41.8731 0.501 41.1021 0.704225C44.3718 1.56384 46.9065 4.12306 47.6013 7.32793C47.8182 8.32783 48.663 9.08812 49.7101 9.28376C54.2924 10.1397 57.7507 14.0031 57.7507 18.6395C57.7507 19.1609 57.7066 19.6723 57.6223 20.1709C57.4905 20.9495 57.7403 21.7376 58.2937 22.3221C59.7581 23.8686 60.6505 25.9204 60.6505 28.1721C60.6505 28.8008 60.5805 29.4136 60.448 30.0043C60.2738 30.7807 60.515 31.5855 61.0549 32.1883C62.5472 33.8546 63.4495 36.0187 63.4495 38.3856C63.4495 40.2752 62.8741 42.0356 61.8828 43.5168C61.4523 44.16 61.3399 44.9509 61.5822 45.6788C61.8603 46.5138 62.0104 47.4034 62.0104 48.3266C62.0104 51.7874 59.9021 54.7752 56.8482 56.1818C56.261 56.4523 55.7876 56.9081 55.5335 57.4825C54.8652 58.993 53.0449 61.9387 48.7972 62.912C48.2182 63.0447 47.696 63.356 47.3245 63.8013C45.9827 65.4099 44.1089 66.5932 41.9579 67.1074C42.7324 67.2924 43.5423 67.3917 44.3766 67.3917C47.8597 67.3917 50.9235 65.679 52.7035 63.0867C53.085 63.1499 53.4767 63.1849 53.877 63.1849C57.6487 63.1849 60.7062 60.2583 60.7062 56.6483C60.7062 56.6214 60.7045 56.5948 60.7041 56.568C64.2782 55.3911 66.8475 52.1471 66.8475 48.3268C66.8475 47.7499 66.7856 47.1872 66.6737 46.6415L65.8351 46.0528Z" fill="#2B3990"/>
<path d="M47.0479 55.436C46.4816 55.436 46.0225 54.9965 46.0225 54.4545C46.0225 50.309 49.546 46.9365 53.8771 46.9365C54.4434 46.9365 54.9025 47.3759 54.9025 47.918C54.9025 48.46 54.4434 48.8994 53.8771 48.8994C50.6768 48.8994 48.0733 51.3914 48.0733 54.4545C48.0733 54.9965 47.6142 55.436 47.0479 55.436Z" fill="#009951"/>
<path d="M57.4295 19.9707C59.1307 19.9707 60.7918 20.4897 62.1626 21.4382C62.1594 21.4357 62.1564 21.4329 62.1531 21.4303C62.3661 20.7635 62.5052 20.0658 62.5607 19.3459C61.014 18.4771 59.2398 18.0078 57.4295 18.0078C54.191 18.0078 51.1221 19.5082 49.2201 22.0214C48.8878 22.4603 48.9903 23.074 49.4489 23.392C49.9075 23.7101 50.5487 23.6119 50.8809 23.173C52.3984 21.1677 54.8465 19.9707 57.4295 19.9707Z" fill="#009951"/>
<path d="M57.9058 35.9979C56.3925 35.9979 54.9175 35.4912 53.7527 34.5711C52.4864 33.5709 51.6753 32.1732 51.4453 30.6445C53.7243 30.3285 55.808 29.1397 57.1774 27.3301C57.5096 26.8912 57.4072 26.2775 56.9485 25.9595C56.49 25.6414 55.8489 25.7395 55.5165 26.1786C54.2901 27.799 52.3117 28.7664 50.2244 28.7664C48.7111 28.7664 47.2361 28.2598 46.0713 27.3397C44.5608 26.1466 43.6946 24.3887 43.6946 22.5166C43.6946 21.9746 43.2355 21.5352 42.6692 21.5352C42.1029 21.5352 41.6438 21.9746 41.6438 22.5166C41.6438 24.9766 42.7817 27.2864 44.7659 28.8537C46.0798 29.8916 47.6937 30.5278 49.3815 30.688C49.5939 32.4677 50.4062 34.1234 51.7 35.4186C50.6127 35.8106 49.6375 36.4692 48.8762 37.3521C47.8828 38.5043 47.3357 39.9628 47.3357 41.4588C47.3357 42.0008 47.7948 42.4402 48.3611 42.4402C48.9274 42.4402 49.3865 42.0008 49.3865 41.4588C49.3865 40.4176 49.7669 39.403 50.4579 38.6016C51.3007 37.6242 52.5185 37.0391 53.8301 36.9729C55.0748 37.6152 56.4768 37.9608 57.9055 37.9608C58.4718 37.9608 58.9309 37.5213 58.9309 36.9793C58.9309 36.4373 58.4721 35.9979 57.9058 35.9979Z" fill="#009951"/>
<path d="M52.6287 9.10669C52.6287 9.10616 52.6287 9.10564 52.6287 9.10499C52.6287 9.10485 52.6286 9.10459 52.6287 9.10459C52.6286 8.43171 52.5462 7.77768 52.3952 7.14864C52.3952 7.14812 52.3951 7.14785 52.3949 7.14746C48.4635 7.22611 44.8713 9.30847 42.9799 12.6239C42.7086 13.0997 42.8915 13.6959 43.3885 13.9557C43.8856 14.2156 44.5085 14.0403 44.7799 13.5647C46.3484 10.8148 49.3547 9.10656 52.6255 9.10656C52.6266 9.10656 52.6276 9.10669 52.6287 9.10669Z" fill="#009951"/>
<path d="M65.9401 44.5303C64.3 46.397 61.8439 47.5862 59.1022 47.5862C58.5359 47.5862 58.0768 48.0257 58.0768 48.5677C58.0768 49.1097 58.5359 49.5491 59.1022 49.5491C62.0355 49.5491 64.7017 48.4409 66.6739 46.6416C66.5218 45.9001 66.2749 45.1914 65.9401 44.5303Z" fill="#009951"/>
<path d="M24.6323 55.436C25.1986 55.436 25.6577 54.9965 25.6577 54.4545C25.6577 50.309 22.1342 46.9365 17.8031 46.9365C17.2368 46.9365 16.7777 47.3759 16.7777 47.918C16.7777 48.46 17.2368 48.8994 17.8031 48.8994C21.0034 48.8994 23.6069 51.3914 23.6069 54.4545C23.6069 54.9965 24.066 55.436 24.6323 55.436Z" fill="#009951"/>
<path d="M14.2507 19.9717C12.5495 19.9717 10.8884 20.4907 9.51763 21.4391C9.52078 21.4367 9.52378 21.4339 9.52707 21.4313C9.31406 20.7644 9.17501 20.0668 9.11951 19.3468C10.6662 18.4781 12.4404 18.0088 14.2507 18.0088C17.4892 18.0088 20.5581 19.5092 22.4601 22.0224C22.7923 22.4613 22.6899 23.075 22.2312 23.393C21.7727 23.7111 21.1315 23.6128 20.7993 23.1739C19.2818 21.1686 16.8337 19.9717 14.2507 19.9717Z" fill="#009951"/>
<path d="M13.7744 35.9979C15.2877 35.9979 16.7626 35.4912 17.9275 34.5711C19.1938 33.5709 20.0049 32.1732 20.2349 30.6445C17.9559 30.3285 15.8722 29.1397 14.5028 27.3301C14.1706 26.8912 14.273 26.2775 14.7317 25.9595C15.1902 25.6414 15.8313 25.7395 16.1637 26.1786C17.39 27.799 19.3685 28.7664 21.4558 28.7664C22.9691 28.7664 24.4441 28.2598 25.6089 27.3397C27.1194 26.1466 27.9856 24.3887 27.9856 22.5166C27.9856 21.9746 28.4447 21.5352 29.011 21.5352C29.5773 21.5352 30.0364 21.9746 30.0364 22.5166C30.0364 24.9766 28.8985 27.2864 26.9143 28.8537C25.6004 29.8916 23.9865 30.5278 22.2987 30.688C22.0863 32.4677 21.274 34.1234 19.9802 35.4186C21.0675 35.8106 22.0427 36.4692 22.804 37.3521C23.7974 38.5043 24.3445 39.9628 24.3445 41.4588C24.3445 42.0008 23.8854 42.4402 23.3191 42.4402C22.7528 42.4402 22.2937 42.0008 22.2937 41.4588C22.2937 40.4176 21.9133 39.403 21.2223 38.6016C20.3795 37.6242 19.1617 37.0391 17.8501 36.9729C16.6054 37.6152 15.2034 37.9608 13.7747 37.9608C13.2084 37.9608 12.7493 37.5213 12.7493 36.9793C12.7493 36.4373 13.2081 35.9979 13.7744 35.9979Z" fill="#009951"/>
<path d="M19.0515 9.10766C19.0515 9.10714 19.0515 9.10662 19.0515 9.10596C19.0515 9.10583 19.0516 9.10557 19.0515 9.10557C19.0516 8.43269 19.134 7.77866 19.285 7.14962C19.285 7.14909 19.2851 7.14883 19.2852 7.14844C23.2167 7.22708 26.8089 9.30945 28.7002 12.6249C28.9716 13.1007 28.7887 13.6969 28.2917 13.9567C27.7946 14.2165 27.1717 14.0413 26.9003 13.5656C25.3318 10.8158 22.3255 9.10753 19.0547 9.10753C19.0536 9.10753 19.0525 9.10766 19.0515 9.10766Z" fill="#009951"/>
<path d="M5.74012 44.5303C7.3802 46.397 9.83635 47.5862 12.578 47.5862C13.1443 47.5862 13.6034 48.0257 13.6034 48.5677C13.6034 49.1097 13.1443 49.5491 12.578 49.5491C9.64467 49.5491 6.97852 48.4409 5.00635 46.6416C5.15838 45.9001 5.40529 45.1914 5.74012 44.5303Z" fill="#009951"/>
<path d="M45.4021 47.2084C45.4021 46.6664 44.943 46.2269 44.3767 46.2269C41.3324 46.2269 38.6178 47.5974 36.8655 49.7257V36.7861C36.8655 34.3497 38.1394 32.0983 40.2734 30.7633C40.7474 30.4668 40.8804 29.8585 40.5706 29.4048C40.2606 28.951 39.6252 28.8238 39.1513 29.1203C38.267 29.6736 37.4996 30.3513 36.8655 31.1199V15.0993C36.8655 12.6629 38.1394 10.4115 40.2734 9.07648C40.7474 8.77995 40.8804 8.17172 40.5706 7.71803C40.2606 7.26421 39.6252 7.13701 39.1513 7.43354C38.267 7.98681 37.4996 8.66453 36.8655 9.43307V3.16504C36.485 3.55565 36.1413 3.97977 35.8401 4.43215C35.5389 3.97964 35.1952 3.55565 34.8147 3.16504V9.43307C34.1808 8.6644 33.4134 7.98681 32.5289 7.43354C32.0549 7.13701 31.4196 7.26434 31.1096 7.71803C30.7998 8.17172 30.9329 8.77995 31.4069 9.07648C33.5408 10.4115 34.8147 12.6629 34.8147 15.0993V31.1197C34.1808 30.3511 33.4134 29.6735 32.5289 29.1202C32.0549 28.8237 31.4196 28.9511 31.1096 29.4047C30.7998 29.8584 30.9329 30.4666 31.4069 30.7632C33.5408 32.0982 34.8147 34.3496 34.8147 36.7859V49.7256C33.0624 47.5973 30.3478 46.2268 27.3035 46.2268C26.7372 46.2268 26.2781 46.6662 26.2781 47.2082C26.2781 47.7503 26.7372 48.1897 27.3035 48.1897C31.4451 48.1897 34.8147 51.4149 34.8147 55.379V64.1163C35.1953 63.698 35.5395 63.2483 35.8401 62.7706C36.1408 63.2483 36.4849 63.698 36.8655 64.1163V55.3791C36.8655 51.415 40.2351 48.1898 44.3767 48.1898C44.943 48.1898 45.4021 47.7504 45.4021 47.2084Z" fill="#009951"/>
</g>
<defs>
<clipPath id="clip0_7864_2024">
<rect width="70" height="67" fill="white" transform="translate(0.840088 0.391602)"/>
</clipPath>
</defs>
</svg>

                <p>Brain & Nervous System</p>
            </div> <div class="w-spa">
            <svg width="91" height="89" viewBox="0 0 91 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2091)">
<path d="M19.521 50.1689L12.4448 54.1245C11.2117 52.9657 9.53876 52.251 7.69746 52.251C3.91625 52.251 0.840088 55.2588 0.840088 58.956C0.840088 62.6532 3.91625 65.661 7.69746 65.661C11.4787 65.661 14.5548 62.6532 14.5548 58.956C14.5548 58.4222 14.4887 57.9035 14.3676 57.4052L21.4403 53.4516L19.521 50.1689ZM7.69746 61.8798C6.04864 61.8798 4.70726 60.5682 4.70726 58.956C4.70726 57.3438 6.04864 56.0323 7.69746 56.0323C9.34628 56.0323 10.6877 57.3438 10.6877 58.956C10.6877 60.5682 9.34628 61.8798 7.69746 61.8798Z" fill="#009951"/>
<path d="M36.0992 67.0015V59.5361H32.232V67.0015C29.3898 67.82 27.3084 70.3926 27.3084 73.4332C27.3084 77.1304 30.3846 80.1382 34.1656 80.1382C37.9468 80.1382 41.023 77.1304 41.023 73.4332C41.023 70.3926 38.9416 67.8198 36.0992 67.0015ZM34.1656 76.3568C32.517 76.3568 31.1756 75.0452 31.1756 73.433C31.1756 71.821 32.517 70.5094 34.1656 70.5094C35.8144 70.5094 37.1558 71.821 37.1558 73.433C37.1558 75.0452 35.8144 76.3568 34.1656 76.3568Z" fill="#009951"/>
<path d="M61.5359 8.64551C57.7547 8.64551 54.6785 11.6533 54.6785 15.3505C54.6785 18.3911 56.7599 20.9637 59.6023 21.7822V28.6338H63.4695V21.7822C66.3118 20.9637 68.3933 18.3911 68.3933 15.3505C68.3933 11.6533 65.3171 8.64551 61.5359 8.64551ZM61.5359 18.2741C59.8871 18.2741 58.5457 16.9625 58.5457 15.3505C58.5457 13.7383 59.8871 12.4267 61.5359 12.4267C63.1847 12.4267 64.5261 13.7383 64.5261 15.3505C64.5261 16.9625 63.1847 18.2741 61.5359 18.2741Z" fill="#009951"/>
<path d="M76.1877 34.722L62.5025 26.9965C61.9041 26.6587 61.1669 26.6587 60.5689 26.9965L47.8507 34.1762L35.1322 26.9965C34.5341 26.6587 33.7968 26.6589 33.1987 26.9965L19.5136 34.722C18.9154 35.0598 18.5468 35.684 18.5468 36.3593V51.8103C18.5468 52.4858 18.9154 53.11 19.5136 53.4476L33.1987 61.1732C33.4978 61.3419 33.8316 61.4265 34.1654 61.4265C34.4993 61.4265 34.8331 61.3421 35.1322 61.1732L48.8175 53.4476C49.4156 53.1098 49.7842 52.4858 49.7842 51.8103V37.4509L61.5357 30.8169L73.2873 37.4509V45.9575H77.1545V36.3593C77.1545 35.6839 76.7861 35.0596 76.1877 34.722ZM45.9173 50.7187L34.1656 57.3527L22.4142 50.7187V37.4509L34.1656 30.8169L45.9173 37.4509V50.7187Z" fill="#2B3990"/>
<path d="M89.8729 57.8989L81.3437 53.084L79.4101 56.3587L87.9393 61.1736C88.2438 61.3455 88.5762 61.4273 88.9042 61.4273C89.5725 61.4273 90.2226 61.0882 90.5806 60.4816C91.1145 59.5772 90.7977 58.421 89.8729 57.8989Z" fill="#2B3990"/>
<path d="M75.2209 59.3288C70.9808 59.3288 67.5312 55.9558 67.5312 51.8098C67.5312 47.6639 70.9808 44.291 75.2209 44.291C79.4611 44.291 82.9108 47.664 82.9108 51.8098C82.911 55.956 79.4613 59.3288 75.2209 59.3288ZM75.2209 48.0724C73.1131 48.0724 71.3984 49.7491 71.3984 51.81C71.3984 53.8709 73.1131 55.5478 75.2209 55.5478C77.3287 55.5478 79.0436 53.8711 79.0436 51.81C79.0438 49.7491 77.3289 48.0724 75.2209 48.0724Z" fill="#009951"/>
</g>
<defs>
<clipPath id="clip0_7864_2091">
<rect width="90" height="88" fill="white" transform="translate(0.840088 0.391602)"/>
</clipPath>
</defs>
</svg>
                <p>Hormonal & Metabolic Health</p>
            </div> <div class="w-spa">

<svg width="85" height="83" viewBox="0 0 85 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2118)">
<path d="M52.3049 45.7555C53.3889 45.478 54.3705 44.9532 55.1801 44.2442C56.1215 43.4199 57.5232 43.4199 58.4645 44.2442C59.6961 45.3228 61.3239 45.9788 63.1088 45.9788C64.8937 45.9788 66.5215 45.3227 67.7533 44.2442C68.6946 43.4199 70.0961 43.4199 71.0377 44.2442C72.2694 45.3228 73.897 45.9788 75.6821 45.9788C77.4333 45.9788 79.0325 45.3462 80.2557 44.3038C75.7118 55.4139 62.0013 70.0784 46.9756 70.0784C31.2792 70.0784 26.2215 64.5452 23.6925 62.5022C22.3386 61.4083 19.81 61.6321 17.7525 62.0762C15.5201 62.5581 13.9654 64.5755 14.1674 66.7987L9.90521 61.9392L18.1491 53.5803L41.4315 51.364L52.3049 45.7555Z" fill="#009951"/>
<path d="M52.3049 45.7558C51.7398 45.9004 51.1474 45.9792 50.5358 45.9792C47.7969 45.9792 45.4292 44.4339 44.2933 42.1885C35.6844 50.9607 15.7169 43.6434 7.73425 53.8197C-1.5553 65.6619 4.46131 76.0751 12.5316 80.8882C13.4116 81.413 14.5536 81.2287 15.2279 80.467L18.5845 76.6755C19.3875 75.7682 19.2297 74.3948 18.2529 73.6675C16.6097 72.4441 14.478 70.2233 14.1669 66.7991C13.2613 59.6524 19.9122 55.0481 30.0837 54.7425C38.7193 54.4832 48.4177 51.8247 52.3049 45.7558Z" fill="#009951"/>
<path d="M40.008 61.9395C42.5224 61.9395 44.5607 59.9497 44.5607 57.4951C44.5607 55.0406 42.5224 53.0508 40.008 53.0508C37.4936 53.0508 35.4552 55.0406 35.4552 57.4951C35.4552 59.9497 37.4936 61.9395 40.008 61.9395Z" fill="#009951"/>
<path d="M59.9711 56.2347C59.9711 53.8835 58.0116 51.9707 55.603 51.9707C53.1945 51.9707 51.235 53.8835 51.235 56.2347C51.235 58.5859 53.1945 60.4987 55.603 60.4987C58.0116 60.4987 59.9711 58.5859 59.9711 56.2347ZM53.6959 56.2347C53.6959 55.2081 54.5514 54.373 55.603 54.373C56.6547 54.373 57.5102 55.2081 57.5102 56.2347C57.5102 57.2613 56.6547 58.0965 55.603 58.0965C54.5514 58.0965 53.6959 57.2614 53.6959 56.2347Z" fill="white"/>
<path d="M68.7075 34.9398C68.7075 32.5886 66.748 30.6758 64.3395 30.6758C61.9309 30.6758 59.9714 32.5886 59.9714 34.9398C59.9714 37.291 61.9309 39.2038 64.3395 39.2038C66.748 39.2038 68.7075 37.291 68.7075 34.9398ZM62.4323 34.9398C62.4323 33.9132 63.2878 33.078 64.3395 33.078C65.3911 33.078 66.2466 33.9132 66.2466 34.9398C66.2466 35.9664 65.3911 36.8015 64.3395 36.8015C63.2878 36.8015 62.4323 35.9665 62.4323 34.9398Z" fill="#2B3990"/>
<path d="M39.997 51.8506C36.8082 51.8506 34.214 54.383 34.214 57.4959C34.214 60.6089 36.8082 63.1414 39.997 63.1414C43.1858 63.1414 45.7801 60.6089 45.7801 57.4959C45.7801 54.3832 43.1859 51.8506 39.997 51.8506ZM39.997 60.7391C38.1651 60.7391 36.6748 59.2841 36.6748 57.4959C36.6748 55.7077 38.1651 54.2528 39.997 54.2528C41.8288 54.2528 43.3193 55.7077 43.3193 57.4959C43.3193 59.2841 41.8288 60.7391 39.997 60.7391Z" fill="white"/>
<path d="M69.7248 12.3816C69.7141 12.3794 69.7033 12.3771 69.6924 12.3752C69.27 12.2969 59.2717 10.5455 52.5131 18.1992C51.9092 18.8831 50.7929 18.6177 50.5879 17.7401C50.4747 17.2556 50.4172 16.7569 50.4172 16.2576V12.2559C50.4172 11.5925 49.8665 11.0548 49.1868 11.0548C48.5071 11.0548 47.9564 11.5925 47.9564 12.2559V16.2576C47.9564 16.9364 48.0346 17.6152 48.1887 18.2745C48.8425 21.0717 52.4598 21.9386 54.3771 19.7677C60.0976 13.2897 68.8572 14.6718 69.2221 14.7333C81.8241 17.4297 83.7583 32.1953 79.2135 43.5781C77.0358 45.2535 73.9269 45.1707 71.8483 43.3506C70.4435 42.1206 68.325 42.1206 66.9209 43.3506C64.7489 45.2525 61.4506 45.2554 59.2752 43.3506C57.871 42.1209 55.7524 42.1206 54.3477 43.3506C51.785 45.5944 47.7531 45.1455 45.7936 42.3344C47.4016 40.4432 48.4835 38.0686 49.0628 35.1771C49.4775 33.1069 48.6259 30.8438 46.6912 29.5305C43.0985 27.0919 41.2768 23.6064 41.2768 19.1704V3.92741C41.2768 3.30234 41.7979 2.79386 42.4382 2.79386H46.7952C47.4355 2.79386 47.9564 3.30234 47.9564 3.92741V6.65061C47.9564 7.31395 48.5071 7.85174 49.1868 7.85174C49.8665 7.85174 50.4172 7.31395 50.4172 6.65061V3.92741C50.4172 1.97773 48.7923 0.391602 46.7952 0.391602H42.4382C40.4408 0.391602 38.816 1.97773 38.816 3.92741V19.1704C38.816 24.3654 41.0534 28.6297 45.2862 31.5028C46.4059 32.263 46.878 33.5654 46.6477 34.716C44.6543 44.668 36.4887 45.466 26.5442 46.2145C19.0183 46.7808 11.2359 47.3665 6.74633 53.0898C2.70594 58.2406 1.09179 63.6927 2.07859 68.8568C3.06686 74.0292 6.63904 78.7881 11.8792 81.9134C13.2769 82.7468 15.0719 82.4682 16.1481 81.2528L19.5047 77.4611C20.8006 75.9969 20.4918 73.8322 18.9884 72.7126C17.4912 71.5981 15.6502 69.6491 15.3819 66.6933C15.2358 65.0846 16.3645 63.6042 18.0072 63.2496C20.3484 62.744 22.1309 62.8092 22.8972 63.4282C23.0965 63.5891 23.3141 63.7744 23.5659 63.989C26.1802 66.2162 31.0462 70.3619 42.911 71.1497C43.5866 71.1948 44.176 70.6945 44.222 70.0328C44.2681 69.3709 43.7559 68.798 43.0778 68.753C32.0399 68.0202 27.5799 64.2204 25.184 62.1792C24.93 61.9628 24.6902 61.7584 24.4661 61.5773C23.0516 60.4346 20.7 60.2079 17.476 60.9039C14.6299 61.5182 12.6758 64.0982 12.9308 66.9054C13.2784 70.7334 15.6054 73.215 17.4961 74.6227C17.9114 74.932 17.9814 75.5082 17.643 75.8903L14.2864 79.682C14.0004 80.005 13.5274 80.0814 13.1624 79.8635C8.51634 77.0925 5.35824 72.9203 4.4976 68.4164C3.63007 63.8763 5.04408 59.2111 8.70024 54.5502C12.5213 49.6792 19.4246 49.1597 26.7334 48.6098C33.1719 48.1251 39.5772 47.6295 44.0269 44.0522C46.934 47.7618 52.4573 48.2328 55.9907 45.1388C56.4662 44.7224 57.1564 44.7224 57.632 45.1388C60.7438 47.8636 65.4583 47.8582 68.5639 45.1388C69.0393 44.7224 69.7295 44.7224 70.2051 45.1388C72.2061 46.8909 74.9726 47.5854 77.6274 46.9463C72.4706 56.5156 61.09 67.8687 48.6412 68.8113C47.9636 68.8626 47.457 69.4404 47.5097 70.1018C47.5597 70.7317 48.0986 71.2101 48.7352 71.2101C48.767 71.2101 48.7993 71.2089 48.8316 71.2065C64.5645 70.0153 78.1834 54.1886 81.9655 43.2218C86.3608 30.4761 83.5746 15.3282 69.7248 12.3816Z" fill="#2B3990"/>
</g>
<defs>
<clipPath id="clip0_7864_2118">
<rect width="84" height="82" fill="white" transform="translate(0.840088 0.391602)"/>
</clipPath>
</defs>
</svg>

                <p>Digestive & Gastrointestinal Health</p>
            </div> <div class="w-spa">

<svg width="98" height="96" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.0764 92.4229C72.913 92.4229 73.592 91.7579 73.592 90.9385V79.6721L83.8104 71.8287C85.0896 70.8312 86.8022 68.8748 87.4721 67.3192L94.6865 50.8931C94.7684 50.709 94.8108 50.5071 94.8108 50.3053V35.9989C94.8108 34.1523 92.6738 32.7896 90.6095 32.5432C88.0511 32.2196 84.8349 33.5823 83.6224 38.3234C82.998 40.7845 82.8586 42.8656 82.7343 44.7003C82.6767 45.5167 83.3072 46.2856 84.1438 46.339C84.9804 46.3954 85.6989 45.8343 85.7504 45.0179C85.8747 43.1832 86.005 41.2446 86.5658 39.0388C86.9477 37.5485 87.7662 35.7168 89.5152 35.4882C90.6853 35.3249 91.6644 35.9395 91.825 36.2185L91.7795 49.9995L84.6834 66.1584C84.2408 67.1945 82.8646 68.7709 81.931 69.5012L71.1398 77.784C70.773 78.0631 70.5608 78.4935 70.5608 78.9507V90.9385C70.5608 91.7579 71.2398 92.4229 72.0764 92.4229Z" fill="#2B3990"/>
<path d="M26.6077 92.4229C25.771 92.4229 25.092 91.7579 25.092 90.9385V79.6721L14.8737 71.8287C13.5945 70.8312 11.8819 68.8748 11.2119 67.3192L3.99757 50.8931C3.91573 50.709 3.87329 50.5071 3.87329 50.3053V35.9989C3.87329 34.1523 6.01032 32.7896 8.0746 32.5432C10.633 32.2196 13.8491 33.5823 15.0616 38.3234C15.6861 40.7845 15.8255 42.8656 15.9498 44.7003C16.0074 45.5167 15.3769 46.2856 14.5403 46.339C13.7036 46.3954 12.9852 45.8343 12.9337 45.0179C12.8094 43.1832 12.6791 41.2446 12.1183 39.0388C11.7364 37.5485 10.9179 35.7168 9.16888 35.4882C7.99882 35.3249 7.01973 35.9395 6.85907 36.2185L6.90454 49.9995L14.0007 66.1584C14.4433 67.1945 15.8194 68.7709 16.7531 69.5012L27.5443 77.784C27.9111 78.0631 28.1233 78.4935 28.1233 78.9507V90.9385C28.1233 91.7579 27.4443 92.4229 26.6077 92.4229Z" fill="#2B3990"/>
<path d="M44.7952 92.4227C43.9585 92.4227 43.2795 91.7577 43.2795 90.9383V74.72C43.2795 68.4649 38.8691 63.0113 32.5519 61.4556C31.7396 61.2567 31.2485 60.4492 31.4516 59.6536C31.6547 58.8609 32.464 58.3681 33.2916 58.5759C40.9546 60.4641 46.3108 67.1022 46.3108 74.72V90.9383C46.3108 91.7577 45.6318 92.4227 44.7952 92.4227Z" fill="#2B3990"/>
<path d="M27.4019 66.9422C27.0139 66.9422 26.6259 66.7968 26.3288 66.5088L13.0307 53.5057C12.7458 53.2266 12.5881 52.8496 12.5881 52.4547C12.5881 52.0629 12.7488 51.6829 13.0307 51.4038C17.1987 47.3218 22.3366 47.6661 27.123 52.3538L33.9584 59.0335C34.5495 59.6124 34.5495 60.5535 33.9584 61.1324C33.3674 61.7143 32.4064 61.7113 31.8154 61.1354L24.9799 54.4557C21.8729 51.4127 18.9659 50.7685 16.3378 52.5438L28.4689 64.4069C29.0599 64.9858 29.0599 65.9269 28.4689 66.5088C28.1779 66.7968 27.7899 66.9422 27.4019 66.9422Z" fill="#2B3990"/>
<path d="M53.8889 92.4227C53.0523 92.4227 52.3733 91.7577 52.3733 90.9383V74.72C52.3733 67.1022 57.7295 60.4641 65.3925 58.5759C66.214 58.3681 67.0264 58.8609 67.2325 59.6536C67.4325 60.4492 66.9415 61.2567 66.1321 61.4556C59.815 63.0113 55.4045 68.4649 55.4045 74.72V90.9383C55.4045 91.7577 54.7255 92.4227 53.8889 92.4227Z" fill="#2B3990"/>
<path d="M71.2822 66.9422C70.8942 66.9422 70.5062 66.7968 70.2092 66.5088C69.6181 65.9269 69.6181 64.9888 70.2092 64.4069L82.3402 52.5438C79.7152 50.7715 76.8052 51.4157 73.6981 54.4557L66.8627 61.1354C66.2716 61.7113 65.3107 61.7143 64.7196 61.1324C64.1285 60.5535 64.1285 59.6124 64.7196 59.0335L71.555 52.3538C76.3414 47.6661 81.4793 47.3218 85.6473 51.4038C85.9323 51.6829 86.0899 52.0599 86.0899 52.4547C86.0899 52.8496 85.9292 53.2266 85.6473 53.5057L72.3492 66.5088C72.0582 66.7968 71.6702 66.9422 71.2822 66.9422Z" fill="#2B3990"/>
<path d="M71.2822 66.9422C70.8942 66.9422 70.5062 66.7968 70.2092 66.5088C69.6181 65.9269 69.6181 64.9888 70.2092 64.4069L82.3402 52.5438C79.7152 50.7715 76.8052 51.4157 73.6981 54.4557L66.8627 61.1354C66.2716 61.7113 65.3107 61.7143 64.7196 61.1324C64.1285 60.5535 64.1285 59.6124 64.7196 59.0335L71.555 52.3538C76.3414 47.6661 81.4793 47.3218 85.6473 51.4038C85.9323 51.6829 86.0899 52.0599 86.0899 52.4547C86.0899 52.8496 85.9292 53.2266 85.6473 53.5057L72.3492 66.5088C72.0582 66.7968 71.6702 66.9422 71.2822 66.9422Z" fill="#2B3990"/>
<path d="M56.0078 37.3495C55.1863 37.3495 54.3648 37.2841 53.5433 37.1506C49.6209 36.5123 46.1835 34.4134 43.8646 31.2368C41.5457 28.0602 40.6302 24.1949 41.2789 20.3534C41.7366 17.6696 44.3314 15.8438 47.0777 16.2951C49.8179 16.7404 51.6791 19.2906 51.2214 21.9743C51.0395 23.0431 51.2457 24.1504 51.7913 25.0856C52.2096 25.798 51.958 26.7035 51.2305 27.1132C50.5121 27.514 49.5815 27.2765 49.1602 26.564C48.2659 25.0381 47.9355 23.236 48.2265 21.4904C48.4084 20.4187 47.6658 19.4004 46.5745 19.2223C45.4772 19.0531 44.4435 19.7685 44.2617 20.8402C43.7433 23.8981 44.4738 26.9766 46.3229 29.509C48.172 32.0413 50.9122 33.7157 54.0344 34.2234C54.8923 34.3599 55.7622 34.4134 56.611 34.3659C57.4628 34.3481 58.163 34.9537 58.2024 35.7701C58.2479 36.5895 57.6052 37.2871 56.7686 37.3316C56.5231 37.3435 56.2654 37.3495 56.0078 37.3495Z" fill="#009951"/>
<path d="M47.1777 57.3916C45.7894 57.3916 44.3132 57.261 42.7369 56.976C38.6387 56.2338 35.2952 53.9241 33.3188 50.4655C31.9578 48.0876 30.8181 44.3677 31.585 38.9171C31.0242 39.1754 30.4755 39.3357 29.9451 39.4604C27.8444 39.9562 24.8313 39.0893 23.0793 37.4921C21.7516 36.2779 21.1726 34.7015 21.4545 33.0538C21.7001 31.6318 22.4154 30.5007 23.5249 29.7793C24.7889 28.9599 26.3076 28.8263 27.3655 28.8887C29.4813 23.4143 33.9463 20.7335 39.0267 22.0041C41.2668 22.5652 43.0886 23.9219 44.292 25.9258C46.4836 29.5685 46.2896 34.5204 45.3772 37.9374C45.168 38.7301 44.3496 39.2021 43.5311 39.0002C42.7188 38.7924 42.2338 37.9819 42.449 37.1893C43.1674 34.4759 43.4008 30.2959 41.6821 27.434C40.8818 26.1069 39.736 25.246 38.2749 24.8808C34.4222 23.9101 31.297 26.1841 29.8632 30.9341C29.6328 31.6882 28.8538 32.1335 28.0596 31.9584C27.5655 31.8485 26.0742 31.6882 25.1951 32.2641C24.9405 32.4334 24.5858 32.748 24.4464 33.5526C24.4039 33.793 24.2766 34.5293 25.1466 35.3249C26.3288 36.4026 28.3658 36.7826 29.2357 36.5777C30.3088 36.3254 31.7365 35.9869 33.2734 32.2434C33.4462 31.7565 33.628 31.2607 33.8281 30.756C34.1221 30.0019 34.9709 29.6101 35.756 29.8891C36.532 30.1623 36.9442 30.9905 36.6835 31.7565C36.4986 32.2879 36.3168 32.7807 36.1288 33.2408C33.8342 39.7573 33.7766 45.1901 35.9651 49.0198C37.4929 51.6916 40.0937 53.4818 43.2917 54.0607C56.7504 56.4891 61.8308 46.2054 64.859 40.0541C65.8866 37.9641 66.508 36.7054 67.3871 36.0909C67.6568 35.9038 68.1903 35.6188 68.9148 35.2448C72.522 33.3893 80.9731 29.0401 81.928 20.8909C82.7313 14.0894 77.7145 7.63538 70.7548 6.50429C67.4568 5.96398 64.1103 6.72101 61.3731 8.63585C58.6389 10.5507 56.8292 13.3948 56.2775 16.6426C56.1987 17.2779 55.7016 18.0052 55.062 18.1299C53.0644 18.5188 51.5579 20.0299 51.2275 21.9744C50.891 23.9546 51.8913 25.9318 53.7192 26.8966C54.4557 27.2855 54.7316 28.1851 54.3345 28.9065C53.9344 29.6279 53.022 29.898 52.2793 29.5121C49.3117 27.9476 47.6839 24.7235 48.2356 21.4876C48.7055 18.7148 50.7273 16.4169 53.41 15.4996C54.2072 11.759 56.3897 8.47257 59.6058 6.22226C62.9978 3.84429 67.1324 2.90616 71.2489 3.57413C79.7758 4.96054 85.9171 12.8812 84.938 21.2293C83.7952 30.9401 74.0073 35.9751 70.3213 37.8721C69.7696 38.1571 69.3574 38.359 69.1482 38.5015C68.8542 38.7687 68.1509 40.1966 67.5841 41.3426C64.9287 46.7398 59.6786 57.3916 47.1777 57.3916Z" fill="#009951"/>
</svg>

                <p>Child Health & Wellness</p>
            </div> <div class="w-spa">
            <svg width="74" height="66" viewBox="0 0 74 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2020)">
<path d="M21.1963 13.6636H20.0552L19.7507 14.7634L15.4679 30.2327H3.5245C2.8556 27.8104 2.45142 25.249 2.45142 22.6272C2.45142 11.4461 11.2209 2.50586 21.8634 2.50586C27.4391 2.50586 32.5257 5.04104 36.0736 8.92931L37.1816 10.1437L38.2897 8.92931C41.834 5.04499 47.0363 2.50586 52.5116 2.50586C63.2876 2.50586 72.0406 11.4511 72.0406 22.6272C72.0406 25.2531 71.6441 27.8072 70.97 30.2327H59.933L55.762 14.7729L55.4627 13.6636H54.3138H50.2882H49.147L48.8426 14.7634L44.5598 30.2327H38.0944H37.5868L37.1835 30.541L35.1707 32.0797L34.7651 32.3897L34.6329 32.8827L33.1517 38.4042L26.6685 14.7669L26.3659 13.6636H25.2219H21.1963Z" stroke="#2B3990" stroke-width="3"/>
<path d="M56.305 36.1571L56.7083 36.4654H57.2159H67.9544C63.4996 44.4708 56.1497 51.2069 49.5953 56.0901C46.0466 58.7339 42.7684 60.8074 40.3791 62.2188C39.185 62.9241 38.2147 63.463 37.5458 63.8241C37.4176 63.8934 37.3005 63.9561 37.195 64.0121C37.0907 63.9564 36.975 63.8942 36.8484 63.8255C36.1827 63.4644 35.217 62.9255 34.0285 62.2203C31.65 60.809 28.3864 58.7356 24.8522 56.0918C18.3249 51.2089 11.0003 44.4724 6.54878 36.4654H18.2942H18.8263L19.2394 36.1301L21.1352 34.5915L21.5069 34.2898L21.6352 33.8285L23.1966 28.2106L29.708 52.0446L30.0098 53.1493H31.155H35.1805H36.3238L36.6269 52.047L40.9111 36.4654H47.2573H47.7649L48.1683 36.1571L50.1811 34.6185L50.5866 34.3085L50.7189 33.8154L52.2096 28.2581L53.7579 33.8285L53.8926 34.313L54.2922 34.6185L56.305 36.1571Z" stroke="#009951" stroke-width="3"/>
</g>
<defs>
<clipPath id="clip0_7864_2020">
<rect width="72.5892" height="65.6333" fill="white" transform="translate(0.951416 0.0703125)"/>
</clipPath>
</defs>
</svg>
                <p>Heart & Circulatory Care</p>
            </div> <div class="w-spa">

<svg width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2024)">
<path d="M65.3363 46.0184L65.3169 46.2999L65.5479 46.462L66.2212 46.9345C66.3031 47.3885 66.3476 47.853 66.3476 48.3267C66.3476 51.9128 63.9348 54.9777 60.5478 56.0929L60.1987 56.2079L60.2042 56.5754C60.205 56.6221 60.2055 56.6253 60.2059 56.6274C60.2062 56.6289 60.2064 56.6298 60.2064 56.6482C60.2064 59.9616 57.3935 62.6847 53.8771 62.6847C53.506 62.6847 53.1417 62.6523 52.7854 62.5933L52.4716 62.5413L52.2915 62.8036C50.604 65.261 47.694 66.8916 44.3767 66.8916C40.9257 66.8916 37.9146 65.1278 36.2631 62.5038L35.84 61.8315L35.4168 62.5038C33.7655 65.1276 30.7544 66.8915 27.3034 66.8915C23.9861 66.8915 21.076 65.2609 19.3886 62.8034L19.2084 62.5411L18.8945 62.5932C18.5385 62.6523 18.1742 62.6846 17.8029 62.6846C14.2866 62.6846 11.4737 59.9615 11.4737 56.648C11.4737 56.6469 11.4737 56.6455 11.4738 56.6432C11.4738 56.64 11.474 56.6351 11.4743 56.627C11.4747 56.6161 11.4756 56.5948 11.4759 56.5728L11.4796 56.2071L11.1323 56.0928C7.74524 54.9776 5.33243 51.9128 5.33243 48.3266C5.33243 47.8344 5.38049 47.3519 5.46862 46.8813L6.27934 46.0348L6.44993 45.8567L6.41243 45.6129L6.27389 44.7124L6.43403 44.5603L6.11524 44.1988C4.72741 42.6251 3.89319 40.598 3.89319 38.3856C3.89319 35.6941 5.12764 33.2748 7.09393 31.6159L7.36784 31.3848L7.23698 31.0511C6.8855 30.155 6.69223 29.1855 6.69223 28.1721C6.69223 25.6201 7.91157 23.335 9.83558 21.8243L9.95549 21.7302L10.0025 21.5851L10.4454 20.2175L10.549 19.8978L10.292 19.6811L9.60445 19.1015C9.59626 18.9484 9.59204 18.7945 9.59204 18.6397C9.59204 13.6715 13.8064 9.60697 19.0515 9.60697H19.3367L19.4819 9.36136L20.1779 8.18363L20.3283 7.92916L20.1779 7.67474L19.8207 7.07073C20.7668 3.53137 24.1283 0.891602 28.1572 0.891602C31.2198 0.891602 33.8997 2.41914 35.4239 4.70881L35.8401 5.33408L36.2563 4.70881C37.7805 2.41914 40.4604 0.891602 43.523 0.891602C47.54 0.891602 50.8936 3.51577 51.851 7.03929L51.0672 8.08339L50.7397 8.51962L51.2027 8.80799L52.3644 9.53151L52.4858 9.6071H52.6288C57.8739 9.6071 62.0882 13.6716 62.0882 18.6397C62.0882 18.7248 62.0869 18.8097 62.0844 18.8943L61.192 18.989L60.4952 19.0629L60.7918 19.6978L61.7003 21.6427L61.7507 21.7507L61.8445 21.8243C63.7684 23.3351 64.9878 25.6201 64.9878 28.1721C64.9878 29.1855 64.7946 30.155 64.4431 31.0511L64.3122 31.3848L64.5861 31.6159C66.5524 33.2748 67.7869 35.6941 67.7869 38.3856C67.7869 40.5981 66.9527 42.6251 65.5648 44.1988L65.2452 44.5613L65.4251 44.7311L65.3363 46.0184Z" stroke="#009951"/>
<path d="M65.8351 46.0528L65.9401 44.5301C65.94 44.5299 65.94 44.5297 65.9398 44.5296C67.4033 42.8701 68.2869 40.7272 68.2869 38.3856C68.2869 35.5361 66.979 32.9806 64.9086 31.2337C65.2822 30.2811 65.4878 29.2498 65.4878 28.1721C65.4878 25.4554 64.1887 23.0295 62.1533 21.431L61.2448 19.4862L62.5608 19.3466C62.5787 19.1131 62.5882 18.8775 62.5882 18.6397C62.5882 13.3751 58.1292 9.1071 52.6288 9.1071L51.4671 8.38358L52.3948 7.14774C51.4657 3.27836 47.8477 0.391602 43.523 0.391602C42.6845 0.391602 41.8731 0.501 41.1021 0.704225C44.3718 1.56384 46.9065 4.12306 47.6013 7.32793C47.8182 8.32783 48.663 9.08812 49.7101 9.28376C54.2924 10.1397 57.7507 14.0031 57.7507 18.6395C57.7507 19.1609 57.7066 19.6723 57.6223 20.1709C57.4905 20.9495 57.7403 21.7376 58.2937 22.3221C59.7581 23.8686 60.6505 25.9204 60.6505 28.1721C60.6505 28.8008 60.5805 29.4136 60.448 30.0043C60.2738 30.7807 60.515 31.5855 61.0549 32.1883C62.5472 33.8546 63.4495 36.0187 63.4495 38.3856C63.4495 40.2752 62.8741 42.0356 61.8828 43.5168C61.4523 44.16 61.3399 44.9509 61.5822 45.6788C61.8603 46.5138 62.0104 47.4034 62.0104 48.3266C62.0104 51.7874 59.9021 54.7752 56.8482 56.1818C56.261 56.4523 55.7876 56.9081 55.5335 57.4825C54.8652 58.993 53.0449 61.9387 48.7972 62.912C48.2182 63.0447 47.696 63.356 47.3245 63.8013C45.9827 65.4099 44.1089 66.5932 41.9579 67.1074C42.7324 67.2924 43.5423 67.3917 44.3766 67.3917C47.8597 67.3917 50.9235 65.679 52.7035 63.0867C53.085 63.1499 53.4767 63.1849 53.877 63.1849C57.6487 63.1849 60.7062 60.2583 60.7062 56.6483C60.7062 56.6214 60.7045 56.5948 60.7041 56.568C64.2782 55.3911 66.8475 52.1471 66.8475 48.3268C66.8475 47.7499 66.7856 47.1872 66.6737 46.6415L65.8351 46.0528Z" fill="#2B3990"/>
<path d="M47.0479 55.436C46.4816 55.436 46.0225 54.9965 46.0225 54.4545C46.0225 50.309 49.546 46.9365 53.8771 46.9365C54.4434 46.9365 54.9025 47.3759 54.9025 47.918C54.9025 48.46 54.4434 48.8994 53.8771 48.8994C50.6768 48.8994 48.0733 51.3914 48.0733 54.4545C48.0733 54.9965 47.6142 55.436 47.0479 55.436Z" fill="#009951"/>
<path d="M57.4295 19.9707C59.1307 19.9707 60.7918 20.4897 62.1626 21.4382C62.1594 21.4357 62.1564 21.4329 62.1531 21.4303C62.3661 20.7635 62.5052 20.0658 62.5607 19.3459C61.014 18.4771 59.2398 18.0078 57.4295 18.0078C54.191 18.0078 51.1221 19.5082 49.2201 22.0214C48.8878 22.4603 48.9903 23.074 49.4489 23.392C49.9075 23.7101 50.5487 23.6119 50.8809 23.173C52.3984 21.1677 54.8465 19.9707 57.4295 19.9707Z" fill="#009951"/>
<path d="M57.9058 35.9979C56.3925 35.9979 54.9175 35.4912 53.7527 34.5711C52.4864 33.5709 51.6753 32.1732 51.4453 30.6445C53.7243 30.3285 55.808 29.1397 57.1774 27.3301C57.5096 26.8912 57.4072 26.2775 56.9485 25.9595C56.49 25.6414 55.8489 25.7395 55.5165 26.1786C54.2901 27.799 52.3117 28.7664 50.2244 28.7664C48.7111 28.7664 47.2361 28.2598 46.0713 27.3397C44.5608 26.1466 43.6946 24.3887 43.6946 22.5166C43.6946 21.9746 43.2355 21.5352 42.6692 21.5352C42.1029 21.5352 41.6438 21.9746 41.6438 22.5166C41.6438 24.9766 42.7817 27.2864 44.7659 28.8537C46.0798 29.8916 47.6937 30.5278 49.3815 30.688C49.5939 32.4677 50.4062 34.1234 51.7 35.4186C50.6127 35.8106 49.6375 36.4692 48.8762 37.3521C47.8828 38.5043 47.3357 39.9628 47.3357 41.4588C47.3357 42.0008 47.7948 42.4402 48.3611 42.4402C48.9274 42.4402 49.3865 42.0008 49.3865 41.4588C49.3865 40.4176 49.7669 39.403 50.4579 38.6016C51.3007 37.6242 52.5185 37.0391 53.8301 36.9729C55.0748 37.6152 56.4768 37.9608 57.9055 37.9608C58.4718 37.9608 58.9309 37.5213 58.9309 36.9793C58.9309 36.4373 58.4721 35.9979 57.9058 35.9979Z" fill="#009951"/>
<path d="M52.6287 9.10669C52.6287 9.10616 52.6287 9.10564 52.6287 9.10499C52.6287 9.10485 52.6286 9.10459 52.6287 9.10459C52.6286 8.43171 52.5462 7.77768 52.3952 7.14864C52.3952 7.14812 52.3951 7.14785 52.3949 7.14746C48.4635 7.22611 44.8713 9.30847 42.9799 12.6239C42.7086 13.0997 42.8915 13.6959 43.3885 13.9557C43.8856 14.2156 44.5085 14.0403 44.7799 13.5647C46.3484 10.8148 49.3547 9.10656 52.6255 9.10656C52.6266 9.10656 52.6276 9.10669 52.6287 9.10669Z" fill="#009951"/>
<path d="M65.9401 44.5303C64.3 46.397 61.8439 47.5862 59.1022 47.5862C58.5359 47.5862 58.0768 48.0257 58.0768 48.5677C58.0768 49.1097 58.5359 49.5491 59.1022 49.5491C62.0355 49.5491 64.7017 48.4409 66.6739 46.6416C66.5218 45.9001 66.2749 45.1914 65.9401 44.5303Z" fill="#009951"/>
<path d="M24.6323 55.436C25.1986 55.436 25.6577 54.9965 25.6577 54.4545C25.6577 50.309 22.1342 46.9365 17.8031 46.9365C17.2368 46.9365 16.7777 47.3759 16.7777 47.918C16.7777 48.46 17.2368 48.8994 17.8031 48.8994C21.0034 48.8994 23.6069 51.3914 23.6069 54.4545C23.6069 54.9965 24.066 55.436 24.6323 55.436Z" fill="#009951"/>
<path d="M14.2507 19.9717C12.5495 19.9717 10.8884 20.4907 9.51763 21.4391C9.52078 21.4367 9.52378 21.4339 9.52707 21.4313C9.31406 20.7644 9.17501 20.0668 9.11951 19.3468C10.6662 18.4781 12.4404 18.0088 14.2507 18.0088C17.4892 18.0088 20.5581 19.5092 22.4601 22.0224C22.7923 22.4613 22.6899 23.075 22.2312 23.393C21.7727 23.7111 21.1315 23.6128 20.7993 23.1739C19.2818 21.1686 16.8337 19.9717 14.2507 19.9717Z" fill="#009951"/>
<path d="M13.7744 35.9979C15.2877 35.9979 16.7626 35.4912 17.9275 34.5711C19.1938 33.5709 20.0049 32.1732 20.2349 30.6445C17.9559 30.3285 15.8722 29.1397 14.5028 27.3301C14.1706 26.8912 14.273 26.2775 14.7317 25.9595C15.1902 25.6414 15.8313 25.7395 16.1637 26.1786C17.39 27.799 19.3685 28.7664 21.4558 28.7664C22.9691 28.7664 24.4441 28.2598 25.6089 27.3397C27.1194 26.1466 27.9856 24.3887 27.9856 22.5166C27.9856 21.9746 28.4447 21.5352 29.011 21.5352C29.5773 21.5352 30.0364 21.9746 30.0364 22.5166C30.0364 24.9766 28.8985 27.2864 26.9143 28.8537C25.6004 29.8916 23.9865 30.5278 22.2987 30.688C22.0863 32.4677 21.274 34.1234 19.9802 35.4186C21.0675 35.8106 22.0427 36.4692 22.804 37.3521C23.7974 38.5043 24.3445 39.9628 24.3445 41.4588C24.3445 42.0008 23.8854 42.4402 23.3191 42.4402C22.7528 42.4402 22.2937 42.0008 22.2937 41.4588C22.2937 40.4176 21.9133 39.403 21.2223 38.6016C20.3795 37.6242 19.1617 37.0391 17.8501 36.9729C16.6054 37.6152 15.2034 37.9608 13.7747 37.9608C13.2084 37.9608 12.7493 37.5213 12.7493 36.9793C12.7493 36.4373 13.2081 35.9979 13.7744 35.9979Z" fill="#009951"/>
<path d="M19.0515 9.10766C19.0515 9.10714 19.0515 9.10662 19.0515 9.10596C19.0515 9.10583 19.0516 9.10557 19.0515 9.10557C19.0516 8.43269 19.134 7.77866 19.285 7.14962C19.285 7.14909 19.2851 7.14883 19.2852 7.14844C23.2167 7.22708 26.8089 9.30945 28.7002 12.6249C28.9716 13.1007 28.7887 13.6969 28.2917 13.9567C27.7946 14.2165 27.1717 14.0413 26.9003 13.5656C25.3318 10.8158 22.3255 9.10753 19.0547 9.10753C19.0536 9.10753 19.0525 9.10766 19.0515 9.10766Z" fill="#009951"/>
<path d="M5.74012 44.5303C7.3802 46.397 9.83635 47.5862 12.578 47.5862C13.1443 47.5862 13.6034 48.0257 13.6034 48.5677C13.6034 49.1097 13.1443 49.5491 12.578 49.5491C9.64467 49.5491 6.97852 48.4409 5.00635 46.6416C5.15838 45.9001 5.40529 45.1914 5.74012 44.5303Z" fill="#009951"/>
<path d="M45.4021 47.2084C45.4021 46.6664 44.943 46.2269 44.3767 46.2269C41.3324 46.2269 38.6178 47.5974 36.8655 49.7257V36.7861C36.8655 34.3497 38.1394 32.0983 40.2734 30.7633C40.7474 30.4668 40.8804 29.8585 40.5706 29.4048C40.2606 28.951 39.6252 28.8238 39.1513 29.1203C38.267 29.6736 37.4996 30.3513 36.8655 31.1199V15.0993C36.8655 12.6629 38.1394 10.4115 40.2734 9.07648C40.7474 8.77995 40.8804 8.17172 40.5706 7.71803C40.2606 7.26421 39.6252 7.13701 39.1513 7.43354C38.267 7.98681 37.4996 8.66453 36.8655 9.43307V3.16504C36.485 3.55565 36.1413 3.97977 35.8401 4.43215C35.5389 3.97964 35.1952 3.55565 34.8147 3.16504V9.43307C34.1808 8.6644 33.4134 7.98681 32.5289 7.43354C32.0549 7.13701 31.4196 7.26434 31.1096 7.71803C30.7998 8.17172 30.9329 8.77995 31.4069 9.07648C33.5408 10.4115 34.8147 12.6629 34.8147 15.0993V31.1197C34.1808 30.3511 33.4134 29.6735 32.5289 29.1202C32.0549 28.8237 31.4196 28.9511 31.1096 29.4047C30.7998 29.8584 30.9329 30.4666 31.4069 30.7632C33.5408 32.0982 34.8147 34.3496 34.8147 36.7859V49.7256C33.0624 47.5973 30.3478 46.2268 27.3035 46.2268C26.7372 46.2268 26.2781 46.6662 26.2781 47.2082C26.2781 47.7503 26.7372 48.1897 27.3035 48.1897C31.4451 48.1897 34.8147 51.4149 34.8147 55.379V64.1163C35.1953 63.698 35.5395 63.2483 35.8401 62.7706C36.1408 63.2483 36.4849 63.698 36.8655 64.1163V55.3791C36.8655 51.415 40.2351 48.1898 44.3767 48.1898C44.943 48.1898 45.4021 47.7504 45.4021 47.2084Z" fill="#009951"/>
</g>
<defs>
<clipPath id="clip0_7864_2024">
<rect width="70" height="67" fill="white" transform="translate(0.840088 0.391602)"/>
</clipPath>
</defs>
</svg>

                <p>Brain & Nervous System</p>
            </div> <div class="w-spa">

<svg width="86" height="83" viewBox="0 0 86 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2155)">
<path d="M6.15259 68.7246C3.22357 68.7246 0.840088 71.024 0.840088 73.8496C0.840088 76.6752 3.22357 78.9746 6.15259 78.9746C9.0816 78.9746 11.4651 76.6752 11.4651 73.8496C11.4651 71.024 9.0816 68.7246 6.15259 68.7246ZM6.15259 75.558C5.17509 75.558 4.3817 74.7926 4.3817 73.8496C4.3817 72.9066 5.17509 72.1412 6.15259 72.1412C7.13009 72.1412 7.92348 72.9066 7.92348 73.8496C7.92348 74.7926 7.13009 75.558 6.15259 75.558Z" fill="#2B3990"/>
<path d="M43.3401 75.5581C49.1979 75.5581 53.9651 70.9593 53.9651 65.3081C53.9651 62.503 52.7432 59.8141 50.5935 57.8633C39.9188 31.0936 53.6463 3.12139 53.788 2.84112C54.1882 2.04162 53.8907 1.08148 53.0973 0.62712C52.3076 0.183006 51.2876 0.384483 50.7527 1.10551C50.0161 2.09976 32.7151 25.9208 32.7151 65.3081C32.7151 70.9593 37.4822 75.5581 43.3401 75.5581ZM44.2042 21.6773C42.2739 32.3304 41.9305 45.9459 47.4448 59.4929C47.5511 59.7491 47.7176 59.978 47.9371 60.1591C49.5167 61.4711 50.4233 63.3502 50.4233 65.308C50.4233 69.0766 47.2464 72.1414 43.3399 72.1414C39.4334 72.1414 36.2565 69.0766 36.2565 65.308C36.2567 47.1964 40.1207 32.3304 44.2042 21.6773Z" fill="#2B3990"/>
<path d="M80.5276 65.3084C81.5051 65.3084 82.2985 64.543 82.2985 63.6C82.2985 62.657 81.5051 61.8916 80.5276 61.8916H59.1005C58.5976 61.8916 58.1158 62.0966 57.7795 62.4587C57.443 62.8208 57.2801 63.3061 57.3367 63.7879L57.4111 64.3311C57.4571 64.6522 57.5067 64.9735 57.5067 65.3082C57.5067 72.8453 51.153 78.9748 43.3401 78.9748C35.5272 78.9748 29.1735 72.8453 29.1735 65.3082C29.1735 64.9836 29.2231 64.6727 29.2656 64.3619L29.3365 63.8255C29.3543 63.6922 29.3436 63.5214 29.3259 63.3881C29.2161 62.534 28.4618 61.8916 27.5693 61.8916H2.61098C1.63348 61.8916 0.840088 62.657 0.840088 63.6C0.840088 64.543 1.63348 65.3084 2.61098 65.3084H25.6319C25.6319 74.7281 33.5759 82.3918 43.3403 82.3918C53.1046 82.3918 61.0486 74.7281 61.0486 65.3084H80.5276Z" fill="#009951"/>
<path d="M80.5276 72.1416C77.5986 72.1416 75.2151 74.441 75.2151 77.2666C75.2151 80.0922 77.5986 82.3916 80.5276 82.3916C83.4566 82.3916 85.8401 80.0922 85.8401 77.2666C85.8401 74.4411 83.4566 72.1416 80.5276 72.1416ZM80.5276 78.975C79.5501 78.975 78.7567 78.2096 78.7567 77.2666C78.7567 76.3236 79.5501 75.5582 80.5276 75.5582C81.5051 75.5582 82.2985 76.3236 82.2985 77.2666C82.2985 78.2096 81.5051 78.975 80.5276 78.975Z" fill="#2B3990"/>
<path d="M20.3192 72.1416C17.3902 72.1416 15.0067 74.441 15.0067 77.2666C15.0067 80.0922 17.3902 82.3916 20.3192 82.3916C23.2482 82.3916 25.6317 80.0922 25.6317 77.2666C25.6317 74.4411 23.2482 72.1416 20.3192 72.1416ZM20.3192 78.975C19.3417 78.975 18.5483 78.2096 18.5483 77.2666C18.5483 76.3236 19.3417 75.5582 20.3192 75.5582C21.2967 75.5582 22.0901 76.3236 22.0901 77.2666C22.0901 78.2096 21.2967 78.975 20.3192 78.975Z" fill="#2B3990"/>
<path d="M66.361 68.7246C63.4319 68.7246 61.0485 71.024 61.0485 73.8496C61.0485 76.6752 63.4319 78.9746 66.361 78.9746C69.29 78.9746 71.6735 76.6752 71.6735 73.8496C71.6735 71.024 69.2898 68.7246 66.361 68.7246ZM66.361 75.558C65.3835 75.558 64.5901 74.7926 64.5901 73.8496C64.5901 72.9066 65.3835 72.1412 66.361 72.1412C67.3385 72.1412 68.1319 72.9066 68.1319 73.8496C68.1319 74.7926 67.3385 75.558 66.361 75.558Z" fill="#2B3990"/>
</g>
<defs>
<clipPath id="clip0_7864_2155">
<rect width="85" height="82" fill="white" transform="translate(0.840088 0.391602)"/>
</clipPath>
</defs>
</svg>

                <p>Skin, Hair & Aesthetics</p>
            </div> <div class="w-spa">

<svg width="104" height="101" viewBox="0 0 104 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M76.5513 33.2644C74.0945 30.9243 69.8149 30.858 67.3078 33.0267C66.3921 33.784 65.6956 34.8048 65.2933 35.9748C64.9159 37.0745 64.5908 38.1801 64.2971 39.2845L62.1352 37.1854C59.3739 34.5044 57.8527 30.939 57.8527 27.147V8.64947C57.8527 7.86822 57.1999 7.23438 56.3952 7.23438C55.5905 7.23438 54.9376 7.86822 54.9376 8.64947V12.1098H49.7641V8.64947C49.7641 7.86822 49.1113 7.23438 48.3066 7.23438C47.5019 7.23438 46.849 7.86822 46.849 8.64947V27.147C46.849 30.939 45.3288 34.5044 42.5675 37.1854L40.3839 39.3054C40.0919 38.204 39.7666 37.0935 39.3867 35.9748C38.9862 34.8066 38.2888 33.7858 37.3958 33.0469C34.8461 30.8395 30.5835 30.9298 28.1353 33.257C23.3764 37.7289 14.819 47.0708 10.9636 59.3773C6.46281 73.7125 5.679 84.0843 6.44573 89.015C6.86041 91.6038 9.15586 93.5035 11.8907 93.5312C12.5359 93.5441 13.1689 93.5496 13.7933 93.5496C28.438 93.5496 37.3911 90.1261 41.8852 82.8424C41.9478 82.7392 41.9972 82.6305 42.0323 82.5163C42.3834 81.3665 42.5732 80.2168 42.5959 79.1223L42.9243 70.3535C43.0989 65.467 42.9717 60.4497 42.5475 55.4379L42.2998 52.5811C47.9141 47.3984 56.7477 47.3897 62.3805 52.5426L62.1324 55.4397C61.7082 60.4497 61.5811 65.467 61.7557 70.3553L62.084 79.0983C62.1068 80.2094 62.2966 81.3592 62.6477 82.5144C62.6828 82.6305 62.7321 82.7392 62.7947 82.8424C67.2888 90.1279 76.241 93.5496 90.8753 93.5496C91.4987 93.5496 92.1326 93.5441 92.776 93.5312C95.5241 93.5035 97.8195 91.6038 98.2352 89.0095C99.0019 84.0825 98.2171 73.7106 93.7173 59.3791C89.8609 47.0708 81.3035 37.7289 76.5513 33.2644ZM49.7641 26.6127V22.1905H54.9376V26.6127H49.7641ZM54.9376 14.94V19.3603H49.7641V14.94H54.9376ZM95.3533 88.5802C95.1587 89.7963 94.0618 90.6881 92.7323 90.701C78.4121 90.9442 69.4752 87.9795 65.3929 81.5416C65.1471 80.6885 65.0152 79.8464 64.9981 79.0191L64.6689 70.254C64.4981 65.4799 64.6224 60.5731 65.038 55.6737L65.0835 55.1375L67.2452 57.2362C67.5299 57.5126 67.9028 57.6508 68.2757 57.6508C68.6486 57.6508 69.0216 57.5126 69.3063 57.2362C69.8756 56.6834 69.8756 55.788 69.3063 55.2352L64.7619 50.8222C57.9239 44.1853 46.8006 44.1853 39.9627 50.8222L39.7577 51.0212L35.4173 55.2352C34.848 55.788 34.848 56.6834 35.4173 57.2362C35.9867 57.789 36.909 57.789 37.4784 57.2362L39.5992 55.1781L39.6419 55.6719C40.0576 60.5731 40.1819 65.4799 40.0111 70.2521L39.6818 79.0412C39.6647 79.8519 39.5328 80.6921 39.288 81.5416C35.2048 87.9814 26.2346 90.9645 11.9343 90.701C10.6182 90.6881 9.5212 89.7963 9.32762 88.5857C8.64154 84.1783 9.3893 74.1013 13.7524 60.2009C17.4162 48.5043 25.6064 39.5733 30.1688 35.2857C31.56 33.9627 34.0025 33.9037 35.48 35.1788C35.9933 35.6044 36.3881 36.1885 36.6196 36.8648C37.1681 38.4788 37.6217 40.0837 37.9728 41.6462L29.6963 49.6817C29.1269 50.2344 29.1269 51.1299 29.6963 51.6827C29.9809 51.9591 30.3539 52.0973 30.7268 52.0973C31.0997 52.0973 31.4727 51.9591 31.7573 51.6827L44.6285 39.1864C47.3752 36.5197 49.0791 33.1187 49.5873 29.4429H55.1145C55.6227 33.1187 57.3268 36.5197 60.0742 39.1864L72.9444 51.6827C73.2291 51.9591 73.602 52.0973 73.975 52.0973C74.3479 52.0973 74.7208 51.9591 75.0055 51.6827C75.5748 51.1299 75.5748 50.2344 75.0055 49.6817L66.7081 41.6241C67.063 40.0469 67.5156 38.4512 68.0584 36.8703C68.2928 36.1885 68.6876 35.6044 69.2227 35.1604C70.6594 33.9203 73.1162 33.9572 74.5177 35.2912C79.0735 39.5733 87.2637 48.5043 90.9284 60.2028C95.2916 74.0994 96.0384 84.1783 95.3533 88.5802Z" fill="#2B3990"/>
<path d="M31.2155 62.4693L26.1927 66.4608C26.9318 63.3609 28.3533 60.4068 30.4991 57.8813C31.0115 57.2769 30.9232 56.3851 30.3017 55.8876C29.6811 55.3901 28.7616 55.4749 28.2501 56.0792C27.3606 57.1267 26.6132 58.2549 25.9323 59.4145L22.9618 55.4085C22.4902 54.7765 21.5792 54.631 20.9273 55.0879C20.2735 55.5449 20.1254 56.4275 20.5952 57.0632L24.4907 62.3166C22.919 66.1156 22.3768 70.2499 22.9351 74.3254C22.9092 74.3624 22.8704 74.3857 22.8479 74.4257L19.8493 79.7268C19.4612 80.4122 19.7193 81.2727 20.4253 81.6486C20.6473 81.7683 20.8884 81.8236 21.1256 81.8236C21.6399 81.8236 22.1391 81.5583 22.4038 81.0903L23.8973 78.4499C24.0068 78.7796 24.077 79.1167 24.202 79.443L25.2212 82.1C25.4394 82.6694 25.9955 83.0213 26.5867 83.0213C26.7556 83.0213 26.9273 82.9937 27.0953 82.9328C27.8497 82.6601 28.233 81.8439 27.9522 81.1124L26.934 78.4554C25.9489 75.8846 25.5217 73.1881 25.61 70.5205C25.6912 70.478 25.777 70.4476 25.8512 70.3886L27.0208 69.4592L28.2027 71.0096C28.4893 71.3836 28.9296 71.5826 29.3755 71.5826C29.6773 71.5826 29.981 71.4923 30.2419 71.3044C30.8891 70.8401 31.0248 69.9538 30.5465 69.3255L29.2799 67.6639L33.0621 64.6582C33.6846 64.1644 33.7767 63.2726 33.2671 62.6683C32.7566 62.062 31.8409 61.9736 31.2155 62.4693Z" fill="#009951"/>
<path d="M81.832 74.4257C81.8096 74.386 81.7711 74.3627 81.7453 74.3259C82.3034 70.2502 81.7612 66.1156 80.1893 62.3164L84.0848 57.0632C84.5545 56.4275 84.4065 55.5449 83.7527 55.0879C83.1017 54.631 82.1898 54.7765 81.7182 55.4085L78.7477 59.4145C78.0667 58.2549 77.3193 57.1267 76.4298 56.0792C75.9164 55.4767 74.9998 55.3901 74.3782 55.8876C73.7567 56.3851 73.6684 57.2769 74.1809 57.8813C76.3266 60.4068 77.7481 63.3609 78.4872 66.4608L73.4644 62.4693C72.841 61.9736 71.9234 62.062 71.4129 62.6683C70.9033 63.2726 70.9953 64.1644 71.6178 64.6582L75.4 67.6639L74.1334 69.3255C73.6552 69.9538 73.7909 70.8401 74.438 71.3044C74.699 71.4923 75.0026 71.5826 75.3044 71.5826C75.7504 71.5826 76.1907 71.3836 76.4773 71.0096L77.6591 69.4592L78.8287 70.3886C78.9029 70.4476 78.9888 70.4781 79.0701 70.5206C79.1583 73.1881 78.7311 75.8846 77.746 78.4554L76.7278 81.1124C76.4478 81.8457 76.8312 82.6601 77.5856 82.9328C77.7536 82.9937 77.9253 83.0213 78.0942 83.0213C78.6854 83.0213 79.2415 82.6694 79.4607 82.1L80.4789 79.443C80.6039 79.1168 80.674 78.7799 80.7834 78.4503L82.2771 81.0903C82.5418 81.5583 83.041 81.8236 83.5553 81.8236C83.7925 81.8236 84.0335 81.7683 84.2565 81.6486C84.9616 81.2727 85.2197 80.4122 84.8316 79.7268L81.832 74.4257Z" fill="#009951"/>
</svg>

                <p>Respiratory & Lung Care</p>
            </div> <div class="w-spa">
                <svg width="91" height="89" viewBox="0 0 91 89" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7864_2091)"><path d="M19.521 50.1689L12.4448 54.1245C11.2117 52.9657 9.53876 52.251 7.69746 52.251C3.91625 52.251 0.840088 55.2588 0.840088 58.956C0.840088 62.6532 3.91625 65.661 7.69746 65.661C11.4787 65.661 14.5548 62.6532 14.5548 58.956C14.5548 58.4222 14.4887 57.9035 14.3676 57.4052L21.4403 53.4516L19.521 50.1689ZM7.69746 61.8798C6.04864 61.8798 4.70726 60.5682 4.70726 58.956C4.70726 57.3438 6.04864 56.0323 7.69746 56.0323C9.34628 56.0323 10.6877 57.3438 10.6877 58.956C10.6877 60.5682 9.34628 61.8798 7.69746 61.8798Z" fill="#009951"></path><path d="M36.0992 67.0015V59.5361H32.232V67.0015C29.3898 67.82 27.3084 70.3926 27.3084 73.4332C27.3084 77.1304 30.3846 80.1382 34.1656 80.1382C37.9468 80.1382 41.023 77.1304 41.023 73.4332C41.023 70.3926 38.9416 67.8198 36.0992 67.0015ZM34.1656 76.3568C32.517 76.3568 31.1756 75.0452 31.1756 73.433C31.1756 71.821 32.517 70.5094 34.1656 70.5094C35.8144 70.5094 37.1558 71.821 37.1558 73.433C37.1558 75.0452 35.8144 76.3568 34.1656 76.3568Z" fill="#009951"></path><path d="M61.5359 8.64551C57.7547 8.64551 54.6785 11.6533 54.6785 15.3505C54.6785 18.3911 56.7599 20.9637 59.6023 21.7822V28.6338H63.4695V21.7822C66.3118 20.9637 68.3933 18.3911 68.3933 15.3505C68.3933 11.6533 65.3171 8.64551 61.5359 8.64551ZM61.5359 18.2741C59.8871 18.2741 58.5457 16.9625 58.5457 15.3505C58.5457 13.7383 59.8871 12.4267 61.5359 12.4267C63.1847 12.4267 64.5261 13.7383 64.5261 15.3505C64.5261 16.9625 63.1847 18.2741 61.5359 18.2741Z" fill="#009951"></path><path d="M76.1877 34.722L62.5025 26.9965C61.9041 26.6587 61.1669 26.6587 60.5689 26.9965L47.8507 34.1762L35.1322 26.9965C34.5341 26.6587 33.7968 26.6589 33.1987 26.9965L19.5136 34.722C18.9154 35.0598 18.5468 35.684 18.5468 36.3593V51.8103C18.5468 52.4858 18.9154 53.11 19.5136 53.4476L33.1987 61.1732C33.4978 61.3419 33.8316 61.4265 34.1654 61.4265C34.4993 61.4265 34.8331 61.3421 35.1322 61.1732L48.8175 53.4476C49.4156 53.1098 49.7842 52.4858 49.7842 51.8103V37.4509L61.5357 30.8169L73.2873 37.4509V45.9575H77.1545V36.3593C77.1545 35.6839 76.7861 35.0596 76.1877 34.722ZM45.9173 50.7187L34.1656 57.3527L22.4142 50.7187V37.4509L34.1656 30.8169L45.9173 37.4509V50.7187Z" fill="#2B3990"></path><path d="M89.8729 57.8989L81.3437 53.084L79.4101 56.3587L87.9393 61.1736C88.2438 61.3455 88.5762 61.4273 88.9042 61.4273C89.5725 61.4273 90.2226 61.0882 90.5806 60.4816C91.1145 59.5772 90.7977 58.421 89.8729 57.8989Z" fill="#2B3990"></path><path d="M75.2209 59.3288C70.9808 59.3288 67.5312 55.9558 67.5312 51.8098C67.5312 47.6639 70.9808 44.291 75.2209 44.291C79.4611 44.291 82.9108 47.664 82.9108 51.8098C82.911 55.956 79.4613 59.3288 75.2209 59.3288ZM75.2209 48.0724C73.1131 48.0724 71.3984 49.7491 71.3984 51.81C71.3984 53.8709 73.1131 55.5478 75.2209 55.5478C77.3287 55.5478 79.0436 53.8711 79.0436 51.81C79.0438 49.7491 77.3289 48.0724 75.2209 48.0724Z" fill="#009951"></path></g><defs><clipPath id="clip0_7864_2091"><rect width="90" height="88" fill="white" transform="translate(0.840088 0.391602)"></rect></clipPath></defs></svg>
                <p>Eye & Vision Health</p>
            </div> <div class="w-spa">

<svg width="113" height="110" viewBox="0 0 113 110" fill="none" xmlns="http://www.w3.org/2000/svg">
{/* <rect x="0.840088" y="0.391602" width="112" height="109" stroke="#2B3990"/> */}
<path d="M25.5151 41.1491C25.4276 39.9676 25.5588 39.0522 25.5588 38.2645C25.4713 16.4645 44.5245 10.9719 61.1276 10.3971C83.3198 9.63067 97.2979 25.3101 97.2979 43.7038C97.2979 51.5276 94.3667 58.7233 89.4667 64.4074C83.1557 71.7309 83.7354 77.2767 87.6182 86.9526" stroke="#2B3990" stroke-width="4" stroke-miterlimit="10"/>
<path d="M23.0213 66.8984C23.1198 66.3875 23.2182 65.8979 23.2948 65.4934C23.3385 65.2592 23.2292 65.025 23.0213 64.9079C22.7151 64.7376 22.387 64.6099 22.0479 64.5247L18.4713 63.6093C18.0667 63.5135 17.6838 63.3219 17.3667 63.0664C17.0495 62.8109 16.7979 62.481 16.6229 62.1084C16.1745 61.1397 16.3495 60.0008 17.0713 59.2024L25.8651 47.238C25.9417 47.1635 25.9745 46.3119 25.9745 45.3965" stroke="#2B3990" stroke-width="4" stroke-miterlimit="10"/>
<path d="M22.8135 70.4111C22.8792 70.7943 23.0104 71.0924 23.251 71.2095C23.9838 71.582 25.4495 72.0078 26.4448 72.2739C26.7292 72.3484 26.7401 72.7423 26.4557 72.8274L23.5135 73.7322C23.5135 73.7322 21.2167 74.5093 22.9995 77.0107C24.0385 78.4797 22.9448 80.087 22.5292 82.0882C22.037 84.4726 22.387 88.262 28.0854 88.7729C33.7948 89.2732 42.5885 85.4412 45.7057 95.2768C46.4276 97.544 47.0182 99.3962 47.4995 100.897" stroke="#2B3990" stroke-width="4" stroke-miterlimit="10"/>
<path d="M64.0807 46.9502C63.862 46.3541 63.7307 45.7155 63.7307 45.0449C63.7307 41.8728 65.8745 38.8923 70.5885 39.1372C73.9463 39.3075 76.5167 41.6599 76.7354 45.1726C77.0198 55.0614 68.8057 59.7343 66.7604 59.7343C64.7151 59.7343 63.6979 58.2015 64.1354 56.179" stroke="#2B3990" stroke-width="4" stroke-miterlimit="10"/>
<path d="M67.8432 48.9198C67.8432 48.9198 69.0463 48.5792 69.7573 49.8884C70.1729 50.6655 69.7354 51.6022 69.1448 52.028C68.5542 52.4538 67.7448 52.5709 67.4057 52.5709C67.4057 52.5709 66.7495 52.6241 66.8917 52.177" stroke="#2B3990" stroke-width="2" stroke-miterlimit="10"/>
<path d="M26.237 59.969C28.0963 57.393 29.6495 54.3699 32.6901 52.9116C35.6979 51.4746 41.1776 49.1009 44.0542 51.2192C46.9307 53.3374 47.7292 55.6047 50.3542 56.5414C52.9792 57.4781 56.7307 56.5733 56.7854 65.1741C56.8401 72.3379 63.5448 86.2184 67.187 94.5637" stroke="#009951" stroke-width="4" stroke-miterlimit="10"/>
<path d="M30.3713 65.0038C32.0885 64.1629 34.6807 63.3432 38.6401 62.7471C47.7292 61.374 49.862 66.7388 50.3651 68.2291C50.3651 68.2397 51.4698 68.261 51.4698 68.2717" stroke="#009951" stroke-width="4" stroke-miterlimit="10"/>
<path d="M33.0182 72.8057C36.0917 70.9748 41.8776 69.6336 46.0776 71.986C51.5026 75.0197 56.4026 92.3277 57.8354 97.8097" stroke="#009951" stroke-width="4" stroke-miterlimit="10"/>
</svg>

                <p>Ear, Nose & Throat Care</p>
            </div> <div class="w-spa">

<svg width="77" height="75" viewBox="0 0 77 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2130)">
<path d="M31.8748 24.3301C31.8748 23.1327 32.8455 22.1621 34.0428 22.1621H34.16C35.3573 22.1621 36.328 23.1327 36.328 24.3301C36.328 25.5274 35.3573 26.498 34.16 26.498H34.0428C32.8455 26.498 31.8748 25.5274 31.8748 24.3301Z" fill="#F1F4FF"/>
<path d="M64.9822 22.1525C64.9822 21.5448 64.9065 20.9542 64.7674 20.3872L67.0766 19.0891L64.8501 15.3341L62.5368 16.6346C61.6587 15.8251 60.5889 15.2116 59.4006 14.8667V12.2705H54.9475V14.8664C53.7593 15.2113 52.6895 15.8248 51.8113 16.6343L49.4979 15.3338L47.2714 19.0889L49.5806 20.3871C49.4415 20.9539 49.3658 21.5446 49.3658 22.1524C49.3658 22.7601 49.4415 23.3507 49.5806 23.9177L47.2714 25.2159L49.4979 28.9709L51.8113 27.6705C52.6895 28.48 53.7591 29.0935 54.9475 29.4384V32.0343H59.4006V29.4384C60.5889 29.0935 61.6587 28.48 62.5368 27.6705L64.8501 28.9709L67.0766 25.216L64.7674 23.9178C64.9065 23.3508 64.9822 22.7603 64.9822 22.1525ZM57.1741 25.4192C55.3241 25.4192 53.8191 23.9538 53.8191 22.1525C53.8191 20.3512 55.3241 18.8858 57.1741 18.8858C59.0241 18.8858 60.5291 20.3512 60.5291 22.1525C60.5291 23.9537 59.0241 25.4192 57.1741 25.4192Z" fill="#009951"/>
<path d="M75.0516 22.1527C75.0516 12.5543 67.0318 4.74561 57.1741 4.74561C56.1641 4.74561 55.1739 4.82886 54.2092 4.98639C54.1243 3.83506 54.1364 1.61304 54.1379 0.391602H14.0647C14.3878 10.4523 11.7452 16.0016 8.6595 22.1021C5.69654 28.0253 2.63249 34.1501 2.63249 44.4608C2.81685 56.5825 6.84678 72.0113 7.37997 74.3916H28.8841L32.6851 51.6249C33.1483 51.7048 33.6218 51.7477 34.1015 51.7477H34.1195C34.5929 51.7467 35.0598 51.7034 35.5173 51.624L39.3184 74.3916H60.8227C61.4194 71.7556 65.3672 56.6156 65.5701 44.4608C65.5701 42.1071 65.4097 39.8994 65.087 37.7586C70.9859 34.9113 75.0516 28.986 75.0516 22.1527ZM61.1169 44.4608C61.1169 52.5964 58.3365 65.4938 57.291 70.0557H43.1061L39.6843 49.5601C40.699 48.6231 41.8661 46.6656 42.7581 45.5927L39.2116 42.9702C38.5659 43.7981 37.8966 44.7147 37.105 45.8552C36.4302 46.8273 35.3104 47.4092 34.1096 47.4118C34.1069 47.4118 34.1042 47.4118 34.1015 47.4118C32.897 47.4118 31.7779 46.8353 31.107 45.8685C30.3115 44.7221 29.6391 43.8011 28.9908 42.9702L25.4445 45.5927C26.3001 46.5942 27.2745 48.3436 28.5178 49.563L25.0964 70.0557H10.9114C9.866 65.4954 7.08562 52.6021 7.08562 44.4608C7.08562 35.1499 9.79475 29.7342 12.6629 24.0006C15.3214 18.6862 18.0633 13.2055 18.4669 4.72739H34.1018H49.7366C57.291 4.72739 49.7969 5.76657 49.8402 6.2785C43.6294 9.00957 39.2967 15.0975 39.2967 22.1525C39.2967 24.1978 39.657 26.1953 40.3686 28.0991L38.9884 39.9062L50.7204 38.3894C52.7775 39.1663 54.9454 39.5596 57.1741 39.5596C58.4138 39.5596 59.6245 39.4359 60.7939 39.2007C61.0088 40.8813 61.1169 42.6189 61.1169 44.4608ZM57.1741 35.2236C55.3014 35.2459 53.114 34.7522 51.3273 33.9372L44.058 34.8769L44.9177 27.5208C44.218 25.98 43.7412 23.9842 43.7495 22.1525C43.7495 14.945 49.7716 9.0814 57.1739 9.0814C64.5762 9.0814 70.5983 14.945 70.5983 22.1525C70.5983 29.36 64.5763 35.2236 57.1741 35.2236Z" fill="#2B3990"/>
</g>
<defs>
<clipPath id="clip0_7864_2130">
<rect width="76" height="74" fill="white" transform="translate(0.842041 0.391602)"/>
</clipPath>
</defs>
</svg>

                <p>Women's Health & Pregnancy Care</p>
            </div> <div class="w-spa">
            <svg width="86" height="83" viewBox="0 0 86 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7864_2155)">
<path d="M6.15259 68.7246C3.22357 68.7246 0.840088 71.024 0.840088 73.8496C0.840088 76.6752 3.22357 78.9746 6.15259 78.9746C9.0816 78.9746 11.4651 76.6752 11.4651 73.8496C11.4651 71.024 9.0816 68.7246 6.15259 68.7246ZM6.15259 75.558C5.17509 75.558 4.3817 74.7926 4.3817 73.8496C4.3817 72.9066 5.17509 72.1412 6.15259 72.1412C7.13009 72.1412 7.92348 72.9066 7.92348 73.8496C7.92348 74.7926 7.13009 75.558 6.15259 75.558Z" fill="#2B3990"/>
<path d="M43.3401 75.5581C49.1979 75.5581 53.9651 70.9593 53.9651 65.3081C53.9651 62.503 52.7432 59.8141 50.5935 57.8633C39.9188 31.0936 53.6463 3.12139 53.788 2.84112C54.1882 2.04162 53.8907 1.08148 53.0973 0.62712C52.3076 0.183006 51.2876 0.384483 50.7527 1.10551C50.0161 2.09976 32.7151 25.9208 32.7151 65.3081C32.7151 70.9593 37.4822 75.5581 43.3401 75.5581ZM44.2042 21.6773C42.2739 32.3304 41.9305 45.9459 47.4448 59.4929C47.5511 59.7491 47.7176 59.978 47.9371 60.1591C49.5167 61.4711 50.4233 63.3502 50.4233 65.308C50.4233 69.0766 47.2464 72.1414 43.3399 72.1414C39.4334 72.1414 36.2565 69.0766 36.2565 65.308C36.2567 47.1964 40.1207 32.3304 44.2042 21.6773Z" fill="#2B3990"/>
<path d="M80.5276 65.3084C81.5051 65.3084 82.2985 64.543 82.2985 63.6C82.2985 62.657 81.5051 61.8916 80.5276 61.8916H59.1005C58.5976 61.8916 58.1158 62.0966 57.7795 62.4587C57.443 62.8208 57.2801 63.3061 57.3367 63.7879L57.4111 64.3311C57.4571 64.6522 57.5067 64.9735 57.5067 65.3082C57.5067 72.8453 51.153 78.9748 43.3401 78.9748C35.5272 78.9748 29.1735 72.8453 29.1735 65.3082C29.1735 64.9836 29.2231 64.6727 29.2656 64.3619L29.3365 63.8255C29.3543 63.6922 29.3436 63.5214 29.3259 63.3881C29.2161 62.534 28.4618 61.8916 27.5693 61.8916H2.61098C1.63348 61.8916 0.840088 62.657 0.840088 63.6C0.840088 64.543 1.63348 65.3084 2.61098 65.3084H25.6319C25.6319 74.7281 33.5759 82.3918 43.3403 82.3918C53.1046 82.3918 61.0486 74.7281 61.0486 65.3084H80.5276Z" fill="#009951"/>
<path d="M80.5276 72.1416C77.5986 72.1416 75.2151 74.441 75.2151 77.2666C75.2151 80.0922 77.5986 82.3916 80.5276 82.3916C83.4566 82.3916 85.8401 80.0922 85.8401 77.2666C85.8401 74.4411 83.4566 72.1416 80.5276 72.1416ZM80.5276 78.975C79.5501 78.975 78.7567 78.2096 78.7567 77.2666C78.7567 76.3236 79.5501 75.5582 80.5276 75.5582C81.5051 75.5582 82.2985 76.3236 82.2985 77.2666C82.2985 78.2096 81.5051 78.975 80.5276 78.975Z" fill="#2B3990"/>
<path d="M20.3192 72.1416C17.3902 72.1416 15.0067 74.441 15.0067 77.2666C15.0067 80.0922 17.3902 82.3916 20.3192 82.3916C23.2482 82.3916 25.6317 80.0922 25.6317 77.2666C25.6317 74.4411 23.2482 72.1416 20.3192 72.1416ZM20.3192 78.975C19.3417 78.975 18.5483 78.2096 18.5483 77.2666C18.5483 76.3236 19.3417 75.5582 20.3192 75.5582C21.2967 75.5582 22.0901 76.3236 22.0901 77.2666C22.0901 78.2096 21.2967 78.975 20.3192 78.975Z" fill="#2B3990"/>
<path d="M66.361 68.7246C63.4319 68.7246 61.0485 71.024 61.0485 73.8496C61.0485 76.6752 63.4319 78.9746 66.361 78.9746C69.29 78.9746 71.6735 76.6752 71.6735 73.8496C71.6735 71.024 69.2898 68.7246 66.361 68.7246ZM66.361 75.558C65.3835 75.558 64.5901 74.7926 64.5901 73.8496C64.5901 72.9066 65.3835 72.1412 66.361 72.1412C67.3385 72.1412 68.1319 72.9066 68.1319 73.8496C68.1319 74.7926 67.3385 75.558 66.361 75.558Z" fill="#2B3990"/>
</g>
<defs>
<clipPath id="clip0_7864_2155">
<rect width="85" height="82" fill="white" transform="translate(0.840088 0.391602)"/>
</clipPath>
</defs>
</svg>
                <p>Skin, Hair & Aesthetics</p>
            </div> <div class="w-spa">
            <svg width="104" height="101" viewBox="0 0 104 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M76.5513 33.2644C74.0945 30.9243 69.8149 30.858 67.3078 33.0267C66.3921 33.784 65.6956 34.8048 65.2933 35.9748C64.9159 37.0745 64.5908 38.1801 64.2971 39.2845L62.1352 37.1854C59.3739 34.5044 57.8527 30.939 57.8527 27.147V8.64947C57.8527 7.86822 57.1999 7.23438 56.3952 7.23438C55.5905 7.23438 54.9376 7.86822 54.9376 8.64947V12.1098H49.7641V8.64947C49.7641 7.86822 49.1113 7.23438 48.3066 7.23438C47.5019 7.23438 46.849 7.86822 46.849 8.64947V27.147C46.849 30.939 45.3288 34.5044 42.5675 37.1854L40.3839 39.3054C40.0919 38.204 39.7666 37.0935 39.3867 35.9748C38.9862 34.8066 38.2888 33.7858 37.3958 33.0469C34.8461 30.8395 30.5835 30.9298 28.1353 33.257C23.3764 37.7289 14.819 47.0708 10.9636 59.3773C6.46281 73.7125 5.679 84.0843 6.44573 89.015C6.86041 91.6038 9.15586 93.5035 11.8907 93.5312C12.5359 93.5441 13.1689 93.5496 13.7933 93.5496C28.438 93.5496 37.3911 90.1261 41.8852 82.8424C41.9478 82.7392 41.9972 82.6305 42.0323 82.5163C42.3834 81.3665 42.5732 80.2168 42.5959 79.1223L42.9243 70.3535C43.0989 65.467 42.9717 60.4497 42.5475 55.4379L42.2998 52.5811C47.9141 47.3984 56.7477 47.3897 62.3805 52.5426L62.1324 55.4397C61.7082 60.4497 61.5811 65.467 61.7557 70.3553L62.084 79.0983C62.1068 80.2094 62.2966 81.3592 62.6477 82.5144C62.6828 82.6305 62.7321 82.7392 62.7947 82.8424C67.2888 90.1279 76.241 93.5496 90.8753 93.5496C91.4987 93.5496 92.1326 93.5441 92.776 93.5312C95.5241 93.5035 97.8195 91.6038 98.2352 89.0095C99.0019 84.0825 98.2171 73.7106 93.7173 59.3791C89.8609 47.0708 81.3035 37.7289 76.5513 33.2644ZM49.7641 26.6127V22.1905H54.9376V26.6127H49.7641ZM54.9376 14.94V19.3603H49.7641V14.94H54.9376ZM95.3533 88.5802C95.1587 89.7963 94.0618 90.6881 92.7323 90.701C78.4121 90.9442 69.4752 87.9795 65.3929 81.5416C65.1471 80.6885 65.0152 79.8464 64.9981 79.0191L64.6689 70.254C64.4981 65.4799 64.6224 60.5731 65.038 55.6737L65.0835 55.1375L67.2452 57.2362C67.5299 57.5126 67.9028 57.6508 68.2757 57.6508C68.6486 57.6508 69.0216 57.5126 69.3063 57.2362C69.8756 56.6834 69.8756 55.788 69.3063 55.2352L64.7619 50.8222C57.9239 44.1853 46.8006 44.1853 39.9627 50.8222L39.7577 51.0212L35.4173 55.2352C34.848 55.788 34.848 56.6834 35.4173 57.2362C35.9867 57.789 36.909 57.789 37.4784 57.2362L39.5992 55.1781L39.6419 55.6719C40.0576 60.5731 40.1819 65.4799 40.0111 70.2521L39.6818 79.0412C39.6647 79.8519 39.5328 80.6921 39.288 81.5416C35.2048 87.9814 26.2346 90.9645 11.9343 90.701C10.6182 90.6881 9.5212 89.7963 9.32762 88.5857C8.64154 84.1783 9.3893 74.1013 13.7524 60.2009C17.4162 48.5043 25.6064 39.5733 30.1688 35.2857C31.56 33.9627 34.0025 33.9037 35.48 35.1788C35.9933 35.6044 36.3881 36.1885 36.6196 36.8648C37.1681 38.4788 37.6217 40.0837 37.9728 41.6462L29.6963 49.6817C29.1269 50.2344 29.1269 51.1299 29.6963 51.6827C29.9809 51.9591 30.3539 52.0973 30.7268 52.0973C31.0997 52.0973 31.4727 51.9591 31.7573 51.6827L44.6285 39.1864C47.3752 36.5197 49.0791 33.1187 49.5873 29.4429H55.1145C55.6227 33.1187 57.3268 36.5197 60.0742 39.1864L72.9444 51.6827C73.2291 51.9591 73.602 52.0973 73.975 52.0973C74.3479 52.0973 74.7208 51.9591 75.0055 51.6827C75.5748 51.1299 75.5748 50.2344 75.0055 49.6817L66.7081 41.6241C67.063 40.0469 67.5156 38.4512 68.0584 36.8703C68.2928 36.1885 68.6876 35.6044 69.2227 35.1604C70.6594 33.9203 73.1162 33.9572 74.5177 35.2912C79.0735 39.5733 87.2637 48.5043 90.9284 60.2028C95.2916 74.0994 96.0384 84.1783 95.3533 88.5802Z" fill="#2B3990"/>
<path d="M31.2155 62.4693L26.1927 66.4608C26.9318 63.3609 28.3533 60.4068 30.4991 57.8813C31.0115 57.2769 30.9232 56.3851 30.3017 55.8876C29.6811 55.3901 28.7616 55.4749 28.2501 56.0792C27.3606 57.1267 26.6132 58.2549 25.9323 59.4145L22.9618 55.4085C22.4902 54.7765 21.5792 54.631 20.9273 55.0879C20.2735 55.5449 20.1254 56.4275 20.5952 57.0632L24.4907 62.3166C22.919 66.1156 22.3768 70.2499 22.9351 74.3254C22.9092 74.3624 22.8704 74.3857 22.8479 74.4257L19.8493 79.7268C19.4612 80.4122 19.7193 81.2727 20.4253 81.6486C20.6473 81.7683 20.8884 81.8236 21.1256 81.8236C21.6399 81.8236 22.1391 81.5583 22.4038 81.0903L23.8973 78.4499C24.0068 78.7796 24.077 79.1167 24.202 79.443L25.2212 82.1C25.4394 82.6694 25.9955 83.0213 26.5867 83.0213C26.7556 83.0213 26.9273 82.9937 27.0953 82.9328C27.8497 82.6601 28.233 81.8439 27.9522 81.1124L26.934 78.4554C25.9489 75.8846 25.5217 73.1881 25.61 70.5205C25.6912 70.478 25.777 70.4476 25.8512 70.3886L27.0208 69.4592L28.2027 71.0096C28.4893 71.3836 28.9296 71.5826 29.3755 71.5826C29.6773 71.5826 29.981 71.4923 30.2419 71.3044C30.8891 70.8401 31.0248 69.9538 30.5465 69.3255L29.2799 67.6639L33.0621 64.6582C33.6846 64.1644 33.7767 63.2726 33.2671 62.6683C32.7566 62.062 31.8409 61.9736 31.2155 62.4693Z" fill="#009951"/>
<path d="M81.832 74.4257C81.8096 74.386 81.7711 74.3627 81.7453 74.3259C82.3034 70.2502 81.7612 66.1156 80.1893 62.3164L84.0848 57.0632C84.5545 56.4275 84.4065 55.5449 83.7527 55.0879C83.1017 54.631 82.1898 54.7765 81.7182 55.4085L78.7477 59.4145C78.0667 58.2549 77.3193 57.1267 76.4298 56.0792C75.9164 55.4767 74.9998 55.3901 74.3782 55.8876C73.7567 56.3851 73.6684 57.2769 74.1809 57.8813C76.3266 60.4068 77.7481 63.3609 78.4872 66.4608L73.4644 62.4693C72.841 61.9736 71.9234 62.062 71.4129 62.6683C70.9033 63.2726 70.9953 64.1644 71.6178 64.6582L75.4 67.6639L74.1334 69.3255C73.6552 69.9538 73.7909 70.8401 74.438 71.3044C74.699 71.4923 75.0026 71.5826 75.3044 71.5826C75.7504 71.5826 76.1907 71.3836 76.4773 71.0096L77.6591 69.4592L78.8287 70.3886C78.9029 70.4476 78.9888 70.4781 79.0701 70.5206C79.1583 73.1881 78.7311 75.8846 77.746 78.4554L76.7278 81.1124C76.4478 81.8457 76.8312 82.6601 77.5856 82.9328C77.7536 82.9937 77.9253 83.0213 78.0942 83.0213C78.6854 83.0213 79.2415 82.6694 79.4607 82.1L80.4789 79.443C80.6039 79.1168 80.674 78.7799 80.7834 78.4503L82.2771 81.0903C82.5418 81.5583 83.041 81.8236 83.5553 81.8236C83.7925 81.8236 84.0335 81.7683 84.2565 81.6486C84.9616 81.2727 85.2197 80.4122 84.8316 79.7268L81.832 74.4257Z" fill="#009951"/>
</svg>
                <p>Respiratory & Lung Care</p>
            </div>
            </div>

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
    <div className="w-container">
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

