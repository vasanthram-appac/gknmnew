
import Logo from '../../../../public/images/cimages/logo.svg';


function footer(){
    return(
        <>
       <div className="footer">
  <div className="w-container">
    <div className="ft">
      <div className="logo">
        <img src={Logo} alt="GKNM" />
      </div>
      <div className="Address" style={{ display: "flex", gap: 7 }}>
        <img
          src="images/location.svg"
          alt=""
          style={{ alignSelf: "self-start" }}
        />
        <p>
          GKNM Hospital <br />
          P.B. No. 6327, Nethaji Road, <br />
          Pappanaickenpalayam, <br />
          Coimbatore - 641 037, Tamil Nadu, India.
        </p>
      </div>
      <div className="contact">
        <p>
          {" "}
          <span className="bold" style={{ paddingRight: 20 }}>
            <b>
              Email: <br />
            </b>
          </span>{" "}
          <a href="" style={{ textDecoration: "none", color: "#000" }}>
            info@gknmhospital.com
          </a>{" "}
        </p>
        <p>
          {" "}
          <span className="bold" style={{ paddingRight: 10 }}>
            <b>
              Call Us: <br />
            </b>
          </span>{" "}
          <a href="" style={{ textDecoration: "none", color: "#000" }}>
            0422-4305300
          </a>{" "}
        </p>
      </div>
      <div className="Timing">
        <p>
          <span className="bold" style={{ paddingRight: 5 }}>
            <b>
              Hospital Hours: <br />
            </b>
          </span>{" "}
          8 AM to 8 PM{" "}
        </p>
        <p>
          {" "}
          <span className="bold" style={{ paddingRight: 15 }}>
            <b>
              Emergency: <br />
            </b>
          </span>{" "}
          24 Hours
        </p>
      </div>
    </div>
    <div className="fm">
      <div className="fm1">
        <div className="fm1a">
          <h3 className="fm1a1">About GKNM Hospital </h3>
          <ul className="fm1a1links">
            <li>
              <a href="#">Our Growth Story</a>
            </li>
            <li>
              <a href="#">Founder Info</a>{" "}
            </li>
            <li>
              <a href="#">GKNMH Vision &amp; Mission</a>
            </li>
            <li>
              <a href="#">Community Initiative</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="fm1b">
          <h3 className="fm1b1">CSR</h3>
          <ul className=" fm1b1links">
            <li>
              <a href="#">Community Initiatives</a>
            </li>
            <li>
              <a href="#">Charitable Initiative</a>
            </li>
          </ul>
        </div>
        <div className="fm1c">
          <h3 className=" fm1c1">Why GKNMH?</h3>
          <ul className="fm1c1links">
            <li>
              <a href="#">Our Values</a>
            </li>
            <li>
              <a href="#">IT Excellence</a>
            </li>
            <li>
              <a href="#">Facilities</a>
            </li>
            <li>
              <a href="#">Medical Tourism</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fm2">
        <div className="fm2a">
          <h3 className="fm2a1">Specialities</h3>
          <ul className="fm2a1links">
            <li>
              <a href="#">Anesthesiology</a>
            </li>
            <li>
              <a href="#">Cardiology</a>
            </li>
            <li>
              <a href="#">Cardiothoracic Surgery</a>
            </li>
            <li>
              <a href="#">Dentistry</a>
            </li>
            <li>
              <a href="#">Dermatology, Aesthetics &amp; Lasers</a>
            </li>
            <li>
              <a href="#">Diagnostic Radiology</a>
            </li>
            <li>
              <a href="#">ENT</a>
            </li>
            <li>
              <a href="#">Emergency Medicine</a>
            </li>
            <li>
              <a href="#">Endocrinology &amp; Diabetology</a>
            </li>
            <li>
              <a href="#">Gastroenterology</a>
            </li>
            <li>
              <a href="#">Gastrointestinal and HPB Surgery</a>
            </li>
            <li>
              <a href="#">General Medicine</a>
            </li>
            <li>
              <a href="#">General Surgery</a>
            </li>
            <li>
              <a href="#">Intensive Care Unit</a>
            </li>
            <li>
              <a href="#">Interventional Radiology</a>
            </li>
            <li>
              <a href="#">Neurology</a>
            </li>
            <li>
              <a href="#">Laboratory Medicine</a>
            </li>
            <ul className="fm2a1links fm2b" style={{ padding: 0 }}>
              <li>
                <a href="#">Neurosurgery</a>
              </li>
              <li>
                <a href="#">Nephrology</a>
              </li>
              <li>
                <a href="#">Nuclear Medicine &amp; Molecular Imaging</a>
              </li>
              <li>
                <a href="#">Obstetrics &amp; Gynaecology </a>
              </li>
              <li>
                <a href="#">Oncology</a>
              </li>
              <li>
                <a href="#">Ophthalmology</a>
              </li>
              <li>
                <a href="#">Paediatrics</a>
              </li>
              <li>
                <a href="#">Pain Medicine</a>
              </li>
              <li>
                <a href="#">Palliative Care Services</a>
              </li>
              <li>
                <a href="#">Plastic Surgery</a>
              </li>
              <li>
                <a href="#">Pulmonology</a>
              </li>
              <li>
                <a href="#">Psychiatry</a>
              </li>
              <li>
                <a href="#">Urology</a>
              </li>
              <li>
                <a href="#">Alternative Medicine</a>
              </li>
              <li>
                <a href="#">Home Health Care Services</a>
              </li>
              <li>
                <a href="#">Clinical Immunology &amp; Rheumatology</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="fm3">
        <div className="fm3a">
          <h3 style={{ visibility: "hidden" }}>
            {" "}
            visible <i />
          </h3>
          <ul className="fm2a1links">
            <li>
              <a href="#">Neurosurgery</a>
            </li>
            <li>
              <a href="#">Nephrology</a>
            </li>
            <li>
              <a href="#">Nuclear Medicine &amp; Molecular Imaging</a>
            </li>
            <li>
              <a href="#">Obstetrics &amp; Gynaecology </a>
            </li>
            <li>
              <a href="#">Oncology</a>
            </li>
            <li>
              <a href="#">Ophthalmology</a>
            </li>
            <li>
              <a href="#">Paediatrics</a>
            </li>
            <li>
              <a href="#">Pain Medicine</a>
            </li>
            <li>
              <a href="#">Palliative Care Services</a>
            </li>
            <li>
              <a href="#">Plastic Surgery</a>
            </li>
            <li>
              <a href="#">Pulmonology</a>
            </li>
            <li>
              <a href="#">Psychiatry</a>
            </li>
            <li>
              <a href="#">Urology</a>
            </li>
            <li>
              <a href="#">Alternative Medicine</a>
            </li>
            <li>
              <a href="#">Home Health Care Services</a>
            </li>
            <li>
              <a href="#">Clinical Immunology &amp; Rheumatology</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fm4">
        <div className="fm4a">
          <h3 className="fm4a1">Procedures</h3>
          <ul className="fm4a1links">
            <li>
              <a href="#">Proton Therapy For Cancer Treatment</a>
            </li>
            <li>
              <a href="#">Cosmetic And Plastic Surgery</a>
            </li>
            <li>
              <a href="#">Bone Marrow Transplant</a>
            </li>
            <li>
              <a href="#">Oral &amp; Maxillofacial Surgery</a>
            </li>
            <li>
              <a href="#">Hand MicroSurgery</a>
            </li>
            <li>
              <a href="#">G Scan - MRI Scan</a>
            </li>
            <li>
              <a href="#">Hip Arthroscopy</a>
            </li>
            <li>
              <a href="#">Minimally Invasive Cardiac </a>
            </li>
            <li>
              <a href="#">Surgery</a>
            </li>
            <li>
              <a href="#">Knee Replacement Surgery</a>
            </li>
            <li>
              <a href="#">Cochlear Implant Surgery</a>
            </li>
            <li>
              <a href="#">CAR T-Cell Therapy</a>
            </li>
            <li>
              <a href="#">Aortic Valve Surgery</a>
            </li>
            <li>
              <a href="#">Knee Replacement Surgery</a>
            </li>
            <li>
              <a href="#">Da Vinci Robotic Surgery</a>
            </li>
            <li>
              <a href="#">Bone Marrow Transplant (BMT)</a>
            </li>
            <li>
              <a href="#">Lung Transplant</a>
            </li>
            <li>
              <a href="#">Thoracic Surgery</a>
            </li>
            <li>
              <a href="#">LVAD Surgery</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fm5">
        <div className="fm5a">
          <h3 className="fm5a1">Allied Services </h3>
          <ul className="fm5a1links">
            <li>
              <a href="#">Ambulance Services</a>
            </li>
            <li>
              <a href="#">Lactation Education</a>
            </li>
            <li>
              <a href="#">Dietetics</a>
            </li>
            <li>
              <a href="#">Master Health Checkup</a>
            </li>
            <li>
              <a href="#">Pharmacy</a>
            </li>
            <li>
              <a href="#">Physiotherapy</a>
            </li>
            <li>
              <a href="#">Heart Failure Clinic</a>
            </li>
            <li>
              <a href="#">Insurance </a>
            </li>
            <li>
              <a href="#">Telemedicine</a>
            </li>
            <li>
              <a href="#">Organ Transplant</a>
            </li>
          </ul>
        </div>
        <div className="fm5b">
          <h3>Media Story</h3>
          <ul>
            <li>
              <a href="#">Camps &amp; Events</a>
            </li>
            <li>
              <a href="#">Wellness Blog</a>
            </li>
            <li>
              <a href="#">Patient Testimonials</a>
            </li>
            <li>
              <a href="#">Awareness Video</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fm6">
        <div className="fm6a">
          <h3 className="fm6a1">Academics and Research</h3>
          <ul className="fm6a1links">
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">Medical Science</a>{" "}
            </li>
            <li>
              <a href="#">Institute of Nursing</a>
            </li>
            <li>
              <a href="#">Allied Health Science</a>
            </li>
          </ul>
        </div>
        <div className="fm6b">
          <h3 className="fm6b1">Careers</h3>
          <ul className="fm6b1links">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Nursing Services</a>
            </li>
          </ul>
        </div>
        <div className="fm6c">
          <h3 className="fm6c1">Media Story</h3>
          <ul className="fm6c1links">
            <li>
              <a href="#">Camps &amp; Events</a>
            </li>
            <li>
              <a href="#">Wellness Blog</a>
            </li>
            <li>
              <a href="#">Patient Testimonials</a>
            </li>
            <li>
              <a href="#">Awareness Video</a>
            </li>
          </ul>
        </div>
        <div className="fm6d">
          <h3>Follow US</h3>
          <div className="icons">
            <ul>
              <li>
                <a href="#">
                  {" "}
                  <img src="images/ig.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="images/fb.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="images/x.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="images/lnkdin.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fm6ca">
        <h3>Media Story</h3>
        <ul>
          <li>
            <a href="#">Camps &amp; Events</a>
          </li>
          <li>
            <a href="#">Wellness Blog</a>
          </li>
          <li>
            <a href="#">Patient Testimonials</a>
          </li>
          <li>
            <a href="#">Awareness Video</a>
          </li>
        </ul>
      </div>
      <div className="fm6ba">
        <div className="fm6ba1">
          <h3>Careers</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Nursing Services</a>
            </li>
          </ul>
        </div>
        <div className="fm6da">
          <h3>Follow US</h3>
          <div className="icons">
            <ul>
              <li>
                <a href="#">
                  {" "}
                  <img src="images/ig.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="images/fb.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="images/x.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src="images/lnkdin.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="fb">
      <div className="fba">
        Copyright 2024 GKNMHospital. <br /> All rights reserved.
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default footer