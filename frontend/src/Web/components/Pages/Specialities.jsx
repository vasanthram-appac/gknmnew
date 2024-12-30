import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import { Scrollbar} from 'swiper';  // Correct import for Swiper modules
import "swiper/swiper-bundle.css"; // Correct CSS import
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Specialities() {
  return (
    <section className="mspace bnr-wrp">
    <Swiper
  modules={[Autoplay, EffectFade, Pagination]}
  effect="fade"
  fadeEffect={{ crossFade: true }}
  speed={2000} // Transition duration in milliseconds
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 5000, // Time each slide is shown before transitioning
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true, // Makes dots clickable
  }}
>
        <SwiperSlide>
          <div className="w-container">
            <div className="w-banner-container">
              <div className="w-rdiv">
                {/* <img src="images/cimages/bnr1.png" /> */}
              </div>

              <div className="w-l-div  d-flex justify-content-start  flex-column">
                <div className="w-feature-container  ">
                  <div className="w-fea-d">
                    <div className="w-f-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24">
                        <path
                          fill="#34c85a"
                          d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        />
                      </svg>
                    </div>
                    <div className="w-f-con">
                      <p>
                        Asia's Largest Integrated <br></br>Out-Patient Centre
                      </p>
                    </div>
                  </div>
                  <div className="w-fea-d">
                    <div className="w-f-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24">
                        <g
                          fill="none"
                          stroke="#34c85a"
                          stroke-linecap="round"
                          stroke-width="1.5">
                          <path d="M16.472 20H4.1a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h2.768a2 2 0 0 0 1.715-.971l2.71-4.517a1.631 1.631 0 0 1 2.961 1.308l-1.022 3.408a.6.6 0 0 0 .574.772h4.576a2 2 0 0 1 1.929 2.526l-1.91 7A2 2 0 0 1 16.473 20Z" />
                          <path stroke-linejoin="round" d="M7 20V9" />
                        </g>
                      </svg>
                    </div>
                    <div className="w-f-con">
                      <p>
                        Excellence in <br></br>Quality Healthcare
                      </p>
                    </div>
                  </div>
                </div>

                <div className="banner-heading-d">
                  <h1>
                    Care That <br></br>
                    <span className="clh1">Heals</span>
                  </h1>
                  <p>Expert medical care tailored to your needs.</p>
                  <a href="#" class="bbtn mt-2">
                    Explore Our Services
                  </a>
                </div>

                <div className="w-years-wrp  d-flex gap-3 align-items-center">
                  <img src="/images/cimages/72years.png" alt="" />
                  <div className="w-y-con">
                    <p className="w-bp">
                      Celebrating 72+<br></br> years of quality care
                    </p>
                    <p className="">Since 1952</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-container">
            <div className="w-banner-container">
              <div className="w-rdiv">
                {/* <img src="images/cimages/bnr1.png" /> */}
              </div>

              <div className="w-l-div  d-flex justify-content-start  flex-column">
                <div className="w-feature-container  ">
                  <div className="w-fea-d">
                    <div className="w-f-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24">
                        <path
                          fill="#34c85a"
                          d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        />
                      </svg>
                    </div>
                    <div className="w-f-con">
                      <p>
                        Asia's Largest Integrated <br></br>Out-Patient Centre
                      </p>
                    </div>
                  </div>
                  <div className="w-fea-d">
                    <div className="w-f-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24">
                        <g
                          fill="none"
                          stroke="#34c85a"
                          stroke-linecap="round"
                          stroke-width="1.5">
                          <path d="M16.472 20H4.1a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h2.768a2 2 0 0 0 1.715-.971l2.71-4.517a1.631 1.631 0 0 1 2.961 1.308l-1.022 3.408a.6.6 0 0 0 .574.772h4.576a2 2 0 0 1 1.929 2.526l-1.91 7A2 2 0 0 1 16.473 20Z" />
                          <path stroke-linejoin="round" d="M7 20V9" />
                        </g>
                      </svg>
                    </div>
                    <div className="w-f-con">
                      <p>
                        Excellence in <br></br>Quality Healthcare
                      </p>
                    </div>
                  </div>
                </div>

                <div className="banner-heading-d">
                  <h1>
                    Care That <br></br>
                    <span className="clh1">Heals</span>
                  </h1>
                  <p>Expert medical care tailored to your needs.</p>
                  <a href="#" class="bbtn mt-2">
                    Explore Our Services
                  </a>
                </div>

                <div className="w-years-wrp  d-flex gap-3 align-items-center">
                  <img src="/images/cimages/72years.png" alt="" />
                  <div className="w-y-con">
                    <p className="w-bp">
                      Celebrating 72+<br></br> years of quality care
                    </p>
                    <p className="">Since 1952</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="iop-wrp">
        <div class="banner-heading-d  two">
          <h1>
            Care That <br></br>
            <span class="clh1">Heals</span>
          </h1>
          <p>Expert medical care tailored to your needs.</p>
          <a href="#" class="bbtn mt-2">
            Explore Our Services
          </a>
        </div>
        <div className="iop-d">
          <h2>GKNM IOP</h2>
          <div>
            <p>
              Asia's Largest Integrated <br></br>Out-patient Centre
            </p>
            <span className="w-100 text-end d-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24">
                <g fill="none" stroke="#ffff" stroke-width="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 12h8m0 0l-3-3m3 3l-3 3"
                  />
                </g>
              </svg>
            </span>{" "}
          </div>
        </div>
        <div className="iop-d  iop-d2">
          <p className="w-bp">
            A New Era in<br></br> Healthcare
          </p>
          <div>
            <p>Message from CEO</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24">
              <g fill="none" stroke="#34c85a" stroke-width="1.5">
                <circle cx="12" cy="12" r="10" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h8m0 0l-3-3m3 3l-3 3"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialities;
