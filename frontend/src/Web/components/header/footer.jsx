
import { Link } from 'react-router-dom';
import React, { useState } from "react";

function footer(){

  const AboutGKNMHospital = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleLinks = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className="fm1a">
        <h2
          className={`fm1a1 ${isExpanded ? "iclose" : ""}`}
          onClick={toggleLinks}
        >
          About GKNM Hospital
        </h2>
        <ul className={`fm1a1links ${isExpanded ? "open" : ""}`}>
          <li>
            <Link to="#">Our Growth Story</Link>
          </li>
          <li>
            <Link to="#">Founder Info</Link>
          </li>
          <li>
            <Link to="#">GKNMH Vision &amp; Mission</Link>
          </li>
          <li>
            <Link to="#">Community Initiative</Link>
          </li>
          <li>
            <Link to="#">Newsletter</Link>
          </li>
          <li>
            <Link to="#">Career</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
      </div>
    );
  };
  AboutGKNMHospital();

  const Csr = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleLinks = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className="fm1b">
        <h2
          className={`fm1b1 ${isExpanded ? "iclose" : ""}`}
          onClick={toggleLinks}
        >
          CSR
        </h2>
        <ul className={`fm1b1links ${isExpanded ? "open" : ""}`}>
          <li>
            <Link to="#">Community Initiatives</Link>
          </li>
          <li>
            <Link to="#">Charitable Initiative</Link>
          </li>
        </ul>
      </div>
    );
  };
  Csr();

          const OurValues = () => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleLinks = () => {
              setIsExpanded(!isExpanded);
            };

            return (
              <div className="fm1c">
                <h2
                  className={`fm1c1 ${isExpanded ? "iclose" : ""}`}
                  onClick={toggleLinks}
                >
                  Why GKNMH?
                </h2>
                <ul className={`fm1c1links ${isExpanded ? "open" : ""}`}>
                <li>
                    <Link to="#">Our Values</Link>
                  </li>
                  <li>
                    <Link to="#">IT Excellence</Link>
                  </li>
                  <li>
                    <Link to="#">Facilities</Link>
                  </li>
                  <li>
                    <Link to="#">Medical Tourism</Link>
                  </li>
                </ul>
              </div>
            );
          };
          OurValues();

          const Specialities = () => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleLinks = () => {
              setIsExpanded(!isExpanded);
            };

            return (
              <div className="fm2a">
                <h2
                  className={`fm2a1 ${isExpanded ? "iclose" : ""}`}
                  onClick={toggleLinks}
                >
                 Specialities
                </h2>
                <ul className={`fm2a1links ${isExpanded ? "open" : ""}`}>
                <li><Link to="#">Anesthesiology</Link></li>
                <li><Link to="#">Cardiology</Link></li>
                <li><Link to="#">Cardiothoracic Surgery</Link></li>
                <li><Link to="#">Dentistry</Link></li>
                <li><Link to="#">Dermatology, Aesthetics &amp; Lasers</Link></li>
                <li><Link to="#">Diagnostic Radiology</Link></li>
                <li><Link to="#">ENT</Link></li>
                <li><Link to="#">Emergency Medicine</Link></li>
                <li><Link to="#">Endocrinology &amp; Diabetology</Link></li>
                <li><Link to="#">Gastroenterology</Link></li>
                <li><Link to="#">Gastrointestinal and HPB Surgery</Link></li>
                <li><Link to="#">General Medicine</Link></li>
                <li><Link to="#">General Surgery</Link></li>
                <li><Link to="#">Intensive Care Unit</Link></li>
                <li><Link to="#">Interventional Radiology</Link></li>
                <li><Link to="#">Neurology</Link></li>
                <li><Link to="#">Laboratory Medicine</Link></li>
<ul className={`fm2a1links fm2b ${isExpanded ? "open" : ""}`}>
<li><Link to="#">Neurosurgery</Link></li>
                <li><Link to="#">Nephrology</Link></li>
                <li><Link to="#">Nuclear Medicine &amp; Molecular Imaging</Link></li>
                <li><Link to="#">Obstetrics &amp; Gynaecology</Link></li>
                <li><Link to="#">Oncology</Link></li>
                <li><Link to="#">Ophthalmology</Link></li>
                <li><Link to="#">Paediatrics</Link></li>
                <li><Link to="#">Pain Medicine</Link></li>
                <li><Link to="#">Palliative Care Services</Link></li>
                <li><Link to="#">Plastic Surgery</Link></li>
                <li><Link to="#">Pulmonology</Link></li>
                <li><Link to="#">Psychiatry</Link></li>
                <li><Link to="#">Urology</Link></li>
                  <li><Link to="#">Alternative Medicine</Link></li>
                  <li><Link to="#">Home Health Care Services</Link></li>
                  <li><Link to="#">Clinical Immunology &amp; Rheumatology</Link></li>
</ul>

                </ul>
              </div>
            );
          };
          Specialities();

          const AlliedServices = () => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleLinks = () => {
              setIsExpanded(!isExpanded);
            };

            return (
              <div className="fm5a">
                <h2
                  className={`fm5a1 ${isExpanded ? "iclose" : ""}`}
                  onClick={toggleLinks}
                >
                 Allied Services
                </h2>
                <ul className={`fm5a1links ${isExpanded ? "open" : ""}`}>
                <li><Link to="#">Ambulance Services</Link></li>
                <li><Link to="#">Lactation Education</Link></li>
                <li><Link to="#">Dietetics</Link></li>
                <li><Link to="#">Master Health Checkup</Link></li>
                <li><Link to="#">Pharmacy</Link></li>
                <li><Link to="#">Physiotherapy</Link></li>
                <li><Link to="#">Heart Failure Clinic</Link></li>
                <li><Link to="#">Insurance</Link></li>
                <li><Link to="#">Telemedicine</Link></li>
                <li><Link to="#">Organ Transplant</Link></li>
                </ul>
              </div>
            );
          };
          AlliedServices();


          const MediaStory = () => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleLinks = () => {
              setIsExpanded(!isExpanded);
            };

            return (
              <div className="fm6c">
                <h2
                  className={`fm6c1 ${isExpanded ? "iclose" : ""}`}
                  onClick={toggleLinks}
                >
                 Media Story
                </h2>
                <ul className={`fm6c1links ${isExpanded ? "open" : ""}`}>
                <li><Link to="#">Camps &amp; Events</Link></li>
                <li><Link to="#">Wellness Blog</Link></li>
                <li><Link to="#">Patient Testimonials</Link></li>
                <li><Link to="#">Awareness Video</Link></li>
                </ul>
              </div>
            );
          };
          MediaStory();

          const AcademicsResearch = () => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleLinks = () => {
              setIsExpanded(!isExpanded);
            };

            return (
              <div className="fm6c">
                <h2
                  className={`fm6a1 ${isExpanded ? "iclose" : ""}`}
                  onClick={toggleLinks}
                >
                 Academics and Research
                </h2>
                <ul className={`fm6a1links ${isExpanded ? "open" : ""}`}>
                <li><Link to="#">Research</Link></li>
                <li><Link to="#">Medical Science</Link></li>
                <li><Link to="#">Institute of Nursing</Link></li>
                <li><Link to="#">Allied Health Science</Link></li>
                </ul>
              </div>
            );
          };
          AcademicsResearch();


          const Careers = () => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleLinks = () => {
              setIsExpanded(!isExpanded);
            };

            return (
              <div className="fm6b">
                <h2
                  className={`fm6b1 ${isExpanded ? "iclose" : ""}`}
                  onClick={toggleLinks}
                >
                Careers
                </h2>
                <ul className={`fm6b1links ${isExpanded ? "open" : ""}`}>
                <li><Link to="#">Careers</Link></li>
                <li><Link to="#">Nursing Services</Link></li>
                </ul>
              </div>
            );
          };
          Careers();

    return(
        <>
<footer className="footer">
  <div className="w-container">
    <div className="ft">
      <div className="logo">
        <img src="images/cimages/logo.svg" alt="GKNM" />
      </div>
      <div className="address">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="#13A84A" d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"/><path fill="#13A84A" d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"/></svg>
        <p className="mb-0"> GKNM Hospital <br /><span className="text-nowrap"> P.B. No. 6327,</span> Nethaji Road, <br /> Pappanaickenpalayam, <br /> Coimbatore - <span className="text-nowrap">641 037</span>, <span className="text-nowrap">Tamil Nadu,</span> India.</p>
      </div>
      <div className="contact">
        <p>
          <span className="bold">Email: <br /></span>
          <Link to="mailto:info@gknmhospital.com">info@gknmhospital.com</Link>
        </p>
        <p><span className="bold"> Call Us: <br /></span>
          <Link to="tel:04224305300">0422-4305300</Link>
        </p>
      </div>
      <div className="timing">
                <p><span className="bold" > Hospital Hours: <br /> </span> 8 AM to 8 PM</p>
                <p><span className="bold"> Emergency: <br /> </span>24 Hours</p>
      </div>
    </div>
    <div className="fm">
      <div className="fm1">
        <div className="fm1a">
          <AboutGKNMHospital />
        </div>
        <div className="fm1b">
          <Csr />
        </div>
        <div className="fm1c">
         <OurValues />
        </div>
      </div>
      <div className="fm2">
        <div className="fm2a">
          <Specialities />
        </div>
      </div>
      <div className="fm3">
        <div className="fm3a">
          <h2>Specialities</h2>
          <ul className="fm2a1links">
            <li>
              <Link to="#">Neurosurgery</Link>
            </li>
            <li>
              <Link to="#">Nephrology</Link>
            </li>
            <li>
              <Link to="#">Nuclear Medicine &amp; Molecular Imaging</Link>
            </li>
            <li>
              <Link to="#">Obstetrics &amp; Gynaecology </Link>
            </li>
            <li>
              <Link to="#">Oncology</Link>
            </li>
            <li>
              <Link to="#">Ophthalmology</Link>
            </li>
            <li>
              <Link to="#">Paediatrics</Link>
            </li>
            <li>
              <Link to="#">Pain Medicine</Link>
            </li>
            <li>
              <Link to="#">Palliative Care Services</Link>
            </li>
            <li>
              <Link to="#">Plastic Surgery</Link>
            </li>
            <li>
              <Link to="#">Pulmonology</Link>
            </li>
            <li>
              <Link to="#">Psychiatry</Link>
            </li>
            <li>
              <Link to="#">Urology</Link>
            </li>
            <li>
              <Link to="#">Alternative Medicine</Link>
            </li>
            <li>
              <Link to="#">Home Health Care Services</Link>
            </li>
            <li>
              <Link to="#">Clinical Immunology &amp; Rheumatology</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="fm5">
        <div className="fm5a">

         <AlliedServices />

        </div>
        <div className="fm5b">

          <h2>Media Story</h2>
          <ul>
            <li>
              <Link to="#">Camps &amp; Events</Link>
            </li>
            <li>
              <Link to="#">Wellness Blog</Link>
            </li>
            <li>
              <Link to="#">Patient Testimonials</Link>
            </li>
            <li>
              <Link to="#">Awareness Video</Link>
            </li>
          </ul>

        </div>
      </div>
      <div className="fm6">
        <div className="fm6a"><AcademicsResearch /></div>
        <div className="fm6b"><Careers /></div>
        <div className="fm6c"><MediaStory /></div>
        <div className="fm6d">
          <h2>Follow US</h2>
          <div className="icons">
            <ul>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
	<g fill="none" stroke="#071C3C" stroke-width="1">
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
		<path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
		<path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
	</g>
</svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
	<path fill="#071C3C" d="M17.99 1.596a28 28 0 0 0-3.037-.156C11.59 1.44 9.5 3.582 9.5 7.03v2.341H6.675a.5.5 0 0 0-.5.5v3.85a.5.5 0 0 0 .5.5H9.5v7.72a.5.5 0 0 0 .5.5h3.978a.5.5 0 0 0 .5-.5v-7.72h2.816a.5.5 0 0 0 .496-.435l.497-3.85a.5.5 0 0 0-.496-.565h-3.313V7.412c0-.97.195-1.375 1.408-1.375h2.039a.5.5 0 0 0 .5-.5V2.092a.5.5 0 0 0-.435-.496m-.565 3.44l-1.54.001c-2.157 0-2.407 1.356-2.407 2.375v2.46a.5.5 0 0 0 .499.5h3.246l-.369 2.85h-2.876a.5.5 0 0 0-.5.5v7.718H10.5v-7.718a.5.5 0 0 0-.5-.5H7.176v-2.85H10a.5.5 0 0 0 .5-.5V7.03c0-2.874 1.665-4.59 4.453-4.59c1.009 0 1.92.055 2.472.103z" />
</svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
	<path fill="none" stroke="#071C3C" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548" color="#071C3C" />
</svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#071C3C" d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M7 21H4V10h3zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5m4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14zM5.868 2.002A3 3 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729a2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455M5.833 6.46q-.173.016-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46" />
</svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fm6ca">
        <h2>Media Story</h2>
        <ul>
          <li>
            <Link to="#">Camps &amp; Events</Link>
          </li>
          <li>
            <Link to="#">Wellness Blog</Link>
          </li>
          <li>
            <Link to="#">Patient Testimonials</Link>
          </li>
          <li>
            <Link to="#">Awareness Video</Link>
          </li>
        </ul>
      </div>
      <div className="fm6ba">
        <div className="fm6ba1">
          <h2>Careers</h2>
          <ul>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Nursing Services</Link>
            </li>
          </ul>
        </div>
        <div className="fm6da">
          <h2>Follow US</h2>
          <div className="icons">
          <ul>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
	<g fill="none" stroke="#071C3C" stroke-width="1">
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
		<path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
		<path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
	</g>
</svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
	<path fill="#071C3C" d="M17.99 1.596a28 28 0 0 0-3.037-.156C11.59 1.44 9.5 3.582 9.5 7.03v2.341H6.675a.5.5 0 0 0-.5.5v3.85a.5.5 0 0 0 .5.5H9.5v7.72a.5.5 0 0 0 .5.5h3.978a.5.5 0 0 0 .5-.5v-7.72h2.816a.5.5 0 0 0 .496-.435l.497-3.85a.5.5 0 0 0-.496-.565h-3.313V7.412c0-.97.195-1.375 1.408-1.375h2.039a.5.5 0 0 0 .5-.5V2.092a.5.5 0 0 0-.435-.496m-.565 3.44l-1.54.001c-2.157 0-2.407 1.356-2.407 2.375v2.46a.5.5 0 0 0 .499.5h3.246l-.369 2.85h-2.876a.5.5 0 0 0-.5.5v7.718H10.5v-7.718a.5.5 0 0 0-.5-.5H7.176v-2.85H10a.5.5 0 0 0 .5-.5V7.03c0-2.874 1.665-4.59 4.453-4.59c1.009 0 1.92.055 2.472.103z" />
</svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
	<path fill="none" stroke="#071C3C" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548" color="#071C3C" />
</svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#071C3C" d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M7 21H4V10h3zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5m4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14zM5.868 2.002A3 3 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729a2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455M5.833 6.46q-.173.016-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46" />
</svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="fb">
      <div className="fba">
        <p>Copyright 2024 GKNMHospital. <br /> All rights reserved.</p>
        <p>Designed &amp; Developed by <Link className="ccolor text-nowrap" to="https://www.appacmedia.com/" target="_blank">Appac Mediatech Pvt Ltd</Link></p>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}

export default footer