
// import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.theme.default.css';




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

    const SpecialitiesComponent = () => {
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

      const DoctorsVlog = () => {
        const options = {
          loop: true,
          margin: 25,
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
          <div className="eventslider">
            <OwlCarousel className="owl-theme" {...options}>
              {/* Slide 1 */}

              <div>
        <div className="eventdimg"><img src="images/cimages/thoracoscopy-event1.webp" alt="" /></div>
        <div>
          <div><p className="event-date mt-0">October 19, 2024</p></div>
         <div className="">
          <h3 className="eventch4">Medical Thoracoscopy Programme at GKNM hospital</h3>
          </div>
        </div>
       </div>
    {/* Slide 2 */}
       <div>
        <div className="eventdimg"><img src="images/cimages/thoracoscopy-event1.webp" alt="" /></div>
        <div>
          <div><p className="event-date mt-0">October 19, 2024</p></div>
         <div className="">
          <h3 className="eventch4">Medical Thoracoscopy Programme at GKNM hospital</h3>
          </div>
        </div>
       </div>
    {/* Slide 3 */}
       <div>
        <div className="eventdimg"><img src="images/cimages/thoracoscopy-event1.webp" alt="" /></div>
        <div>
          <div><p className="event-date mt-0">October 19, 2024</p></div>
         <div className="">
          <h3 className="eventch4">Medical Thoracoscopy Programme at GKNM hospital</h3>
          </div>
        </div>
       </div>
    {/* Slide 4 */}
       <div>
        <div className="eventdimg"><img src="images/cimages/thoracoscopy-event1.webp" alt="" /></div>
        <div>
          <div><p className="event-date mt-0">October 19, 2024</p></div>
         <div className="">
          <h3 className="eventch4">Medical Thoracoscopy Programme at GKNM hospital</h3>
          </div>
        </div>
       </div>

            </OwlCarousel>
          </div>
        );
      };

      const FacilitiesSlider = () => {
        const options = {
          loop: true,
          margin: 25,
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
          <div className="FacilitiesSlider">
            <OwlCarousel className="owl-theme" {...options}>
              {/* Slide 1 */}

              <div>
        <div className="eventdimg"><img src="images/cimages/thoracoscopy-event1.webp" alt="" /></div>
        <div>

         <div className="">
          <h3 className="eventch4">Cardiology - GKNM Hospital / Patient testimony</h3>
          </div>
        </div>
       </div>
    {/* Slide 2 */}
       <div>
        <div className="eventdimg"><img src="images/cimages/thoracoscopy-event1.webp" alt="" /></div>
        <div>

         <div className="">
          <h3 className="eventch4">Cardiology - GKNM Hospital / Patient testimony</h3>
          </div>
        </div>
       </div>
    {/* Slide 3 */}
       <div>
        <div className="eventdimg"><img src="images/cimages/thoracoscopy-event1.webp" alt="" /></div>
        <div>

         <div className="">
          <h3 className="eventch4">Cardiology - GKNM Hospital / Patient testimony</h3>
          </div>
        </div>
       </div>
    {/* Slide 4 */}
       <div>
        <div className="eventdimg"><img src="images/cimages/thoracoscopy-event1.webp" alt="" /></div>
        <div>

         <div className="">
          <h3 className="eventch4">Cardiology - GKNM Hospital / Patient testimony</h3>
          </div>
        </div>
       </div>

            </OwlCarousel>
          </div>
        );
      };

    export  {OnlineAccessPortal ,CarouselComponent, Testimonials, VlogCarousel, SpecialitiesComponent, DoctorsVlog, FacilitiesSlider };

