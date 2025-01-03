import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import { Scrollbar} from 'swiper';  // Correct import for Swiper modules
import "swiper/swiper-bundle.css"; // Correct CSS import
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { SpecialitiesComponent, DoctorsVlog, FacilitiesSlider} from './home-page-sliders';

function Specialities() {

  const TreatmentProcedures = () => {
    const [activeTab, setActiveTab] = useState("Peripheral Angioplasty");

    const tabs = [
      { name: "Peripheral Angioplasty", content: "Coronary artery disease (CAD) is a common cardiovascular condition characterized by the narrowing or blockage of the coronary arteries, which supply blood and oxygen to the heart muscle. It can lead to various complications, such as angina (chest pain), heart attack, or heart failure. Lifestyle modifications, medications, and medical procedures like angioplasty or bypass surgery are often used to manage CAD. It is important to consult with a healthcare professional for accurate diagnosis and personalized treatment options." },
      { name: "CABG", content: "Coronary artery disease (CAD) is a common cardiovascular condition characterized by the narrowing or blockage of the coronary arteries, which supply blood and oxygen to the heart muscle. It can lead to various complications, such as angina (chest pain), heart attack, or heart failure. Lifestyle modifications, medications, and medical procedures like angioplasty or bypass surgery are often used to manage CAD. It is important to consult with a healthcare professional for accurate diagnosis and personalized treatment options." },
      { name: "Aneurysm Repair", content: "Coronary artery disease (CAD) is a common cardiovascular condition characterized by the narrowing or blockage of the coronary arteries, which supply blood and oxygen to the heart muscle. It can lead to various complications, such as angina (chest pain), heart attack, or heart failure. Lifestyle modifications, medications, and medical procedures like angioplasty or bypass surgery are often used to manage CAD. It is important to consult with a healthcare professional for accurate diagnosis and personalized treatment options." },
      { name: "TAVI", content: "Coronary artery disease (CAD) is a common cardiovascular condition characterized by the narrowing or blockage of the coronary arteries, which supply blood and oxygen to the heart muscle. It can lead to various complications, such as angina (chest pain), heart attack, or heart failure. Lifestyle modifications, medications, and medical procedures like angioplasty or bypass surgery are often used to manage CAD. It is important to consult with a healthcare professional for accurate diagnosis and personalized treatment options." },
    ];

    return (
      <div>
        {/* Tab navigation */}
        <ul className="treatment-list">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={activeTab === tab.name ? "active" : ""}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </li>
          ))}
        </ul>

        {/* Tab content */}
        <div className="treatment-content">
          {tabs.map(
            (tab) =>
              activeTab === tab.name && (
                <div key={tab.name}>
                  <h2 className="ch3 mb2">{tab.name}</h2>
                  <p className="mb2">{tab.content}</p>
                  <div class="enquiry-btn"><Link href="#" className="cbtn">Enquiry Now</Link></div>
                </div>
              )
          )}
          <div><img src="images/cimages/peripheral-angioplasty.jpg" alt="" /></div>
        </div>
      </div>
    );
  };

  TreatmentProcedures ();

  return (
    <div>

<section className="pspace w-box">
    <div className="w-container">
      <div className="ctop">
      <p>Overview</p>
            <div className="ctopa">
                <div>
                  <h2 className="ch2b2 mb-0">Comprehensive and Advanced <br />Cardiac Care Solutions</h2>
                </div>

            </div>
      </div>

      <div className="spec-grid">
      <div className="spec-points">
          <div className="spec-img"><img src="images/cimages/comprehensive-cardiac.svg" alt="" /></div>
          <h3 className="ch3 mb2">Comprehensive Cardiac Services</h3>
          <p>Providing holistic care for all heart conditions in adults and children.</p>
      </div>

      <div className="spec-points">
          <div className="spec-img"><img src="images/cimages/comprehensive-cardiac.svg" alt="" /></div>
          <h3 className="ch3 mb2">Comprehensive Cardiac Services</h3>
          <p>Providing holistic care for all heart conditions in adults and children.</p>
      </div>

      <div className="spec-points">
          <div className="spec-img"><img src="images/cimages/comprehensive-cardiac.svg" alt="" /></div>
          <h3 className="ch3 mb2">Comprehensive Cardiac Services</h3>
          <p>Providing holistic care for all heart conditions in adults and children.</p>
      </div>

      <div className="spec-points">
          <div className="spec-img"><img src="images/cimages/comprehensive-cardiac.svg" alt="" /></div>
          <h3 className="ch3 mb2">Comprehensive Cardiac Services</h3>
          <p>Providing holistic care for all heart conditions in adults and children.</p>
      </div>

      <div className="spec-points">
          <div className="spec-img"><img src="images/cimages/comprehensive-cardiac.svg" alt="" /></div>
          <h3 className="ch3 mb2">Comprehensive Cardiac Services</h3>
          <p>Providing holistic care for all heart conditions in adults and children.</p>
      </div>
      </div>

      </div>
</section>

<section className="pspace w-box pt0">
    <div className="w-container">
      <div className="ctop">
      <p>Treatment and Procedures</p>
            <div className="ctopa">
                <div>
                  <h2 className="ch2b2 mb-0">Expert care tailored to your unique <br /> procedural needs.</h2>
                </div>

            </div>
      </div>
      <div>
        <TreatmentProcedures />
      </div>
      </div>
</section>

<section className="pspace w-box pt0">
    <div className="w-container">
      <div className="ctop">
      <p>Facilities</p>
            <div className="ctopa">
                <div>
                  <h2 className="ch2b2 mb-0">GKNM is equipped with sophisticated <br />equipments</h2>
                </div>

      </div>
      </div>
       <FacilitiesSlider />
      </div>
</section>


<section className="pspace w-box pt0">
    <div className="w-container">
      <div className="ctop">
            <div className="ctopa">
                <div>
                  <h2 className="ch2 mb-0">Team of Doctors</h2>
                </div>

            </div>
      </div>
      <SpecialitiesComponent/>
      </div>
   </section>

   <section className="pspace w-box pt0">
    <div className="w-container">
      <div className="ctop">
            <div className="ctopa">
                <div>
                  <h2 className="ch2b2 mb-0">Doctor's Vlog</h2>
                </div>
                <div className="w-text-rt"><Link to="#" className="bbtn">View All</Link></div>
            </div>
      </div>
       <DoctorsVlog />
      </div>
   </section>

    </div>
  );
}

export default Specialities;
