import downArrow from '../../../../public/images/cimages/down-arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import rightArrowCircle from '../../../assets/right-arrow-circle.svg';
import plus from '../../../assets/plus.svg';
import mobileCall from '../../../assets/mobile-call.svg';
import Logo from '../../../assets/logo.svg';
import injection from '../../../assets/injection.svg';
import search from '../../../assets/search.svg';
import nabhLogo from '../../../assets/nabh-logo.png';
import { Link } from 'react-router-dom';



function header() {

    return(
        <>
          <div className="header">
  <div className="box">
    <header>
      <div className="hu">
        <ul className="hu1">
          <li className="hp">
            <p> Health Packages </p>
            <img src="images/cimages/down-arrow.svg" alt="" />
          </li>
          <li className="pl">
            <p> Patient Login</p>
            <img src={rightArrowCircle} alt="" />
          </li>
        </ul>
        <ul className="hu2">
          <li className="eh">
          <img src={plus} alt="" />
            <p> Emergency Helpline</p>
          </li>
          <li className="cl">
            <img src={mobileCall} alt="" />
            <p> 0420 4316677</p>
          </li>
        </ul>
      </div>
      <div className="hd">
        <div className="hd1">
          <div className="logo1">
          <img src={Logo} alt="" />
          </div>
        </div>
        <nav className="hd1a">
<ul class="w-hd1afl">

          <li className="hd2">
          <ul className="hd2-flex">
            <li className="hd2a dot-remove">
            <ul>
              <li className="">
                <span className="dflex">
                  <Link to="/specialities">Specialities </Link>
                  <img src={downArrow} alt="" />
                </span>
                <ul className="hover-down">
                  <div className="subclass">
                    <li>
                      <span className="liflex">
                      <Link to="#"> <span>
                       <img src={injection} alt="" />
                         Appac media enabling1
                        </span>
                          <img src={rightArrow} alt="" />
                          </Link>
                      </span>
                    </li>
                    <li>
                      <span className="liflex">
                      <Link to="#"> <span>
                       <img src={injection} alt="" />
                         Appac media enabling1
                        </span>
                          <img src={rightArrow} alt="" />
                          </Link>
                      </span>
                    </li>
                  </div>
                  <div className="subclass">
                  <li>
                      <span className="liflex">
                      <Link to="#"> <span>
                       <img src={injection} alt="" />
                         Appac media enabling1
                        </span>
                          <img src={rightArrow} alt="" />
                          </Link>
                      </span>
                    </li>
                    <li>
                      <span className="liflex">
                      <Link to="#"> <span>
                       <img src={injection} alt="" />
                         Appac media enabling1
                        </span>
                          <img src={rightArrow} alt="" />
                          </Link>
                      </span>
                    </li>

                  </div>
                </ul>
              </li>
              </ul>
            </li>
            <li className="hd2b dot-remove">
              <ul>
              <li className="">
                <span className="dflex">
                  <a href="#">Allied Services </a>
                  <img src={downArrow} alt="" />
                </span>
                <ul className="hover-down" id="d2">
                  <div className="subclass">
                  <li>
                      <span className="liflex">
                      <Link to="#"> <span>
                       <img src={injection} alt="" />
                         Appac media enabling1
                        </span>
                          <img src={rightArrow} alt="" />
                          </Link>
                      </span>
                    </li>
                    <li>
                      <span className="liflex">
                      <Link to="#"> <span>
                       <img src={injection} alt="" />
                         Appac media enabling1
                        </span>
                          <img src={rightArrow} alt="" />
                          </Link>
                      </span>
                    </li>

                  </div>
                </ul>
              </li>
              </ul>
            </li>
            <li className="hd2c">
              <Link to="">
               Patient Services
              </Link>
            </li>
            <li className="hd2c">
              <Link to="#">
                <p>More</p>
              </Link>
            </li>
            </ul>
          </li>
          <li className="hd3">
          <ul className="hd3-flex">
            <li className=" dflex">
             <input type="text" className='search-div' >


             <img src={search} alt="" />
             </input>
             
         
            </li>

            <li className="hd3b">
            <Link to="#" className='cbtn'>
                Book An Appoinment
                </Link>
            </li>

            <li className="logo3 dflex">
              <img src={nabhLogo} alt="" />
            </li>
            </ul>
          </li>
          </ul>

        </nav>
      </div>
      <div className="sd">
        <div className="sda">
          <img src={Logo} alt="" />
        </div>
        <div className="sdb">
          <div className="sdba">
            <div className="hd3a dflex">
            <img src={search} alt="" />
            </div>
            <div className="hd3b">
            <Link to="#">
                <button>Book An Appoinment</button>
                </Link>
            </div>
            <div className="logo3 dflex">
            <img src={nabhLogo} alt="" />

            </div>
          </div>
          {/* <div className="menu-btn" onclick={toggleMenu()}> */}
          <div className="menu-btn" >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
      </div>
    </header>
    <div className="sidebar">
      <nav className="menu">
        <ul>
          <li className="arrow">
            <span className="after">
              <Link to="/specialist">Specialities</Link>
              <i>
              <img src={downArrow} alt="" />
                  {/* // onclick={toggleSubMenu(event)} */}
              </i>
            </span>
            <ul className="sub-menu m1">
              <li className="arrow">
              <Link to="#">Option 1</Link>
              </li>
              <li className="arrow">
              <Link to="#">Option 2</Link>
              </li>
            </ul>
          </li>
          <li className="arrow">
            <span className="after">
            <Link to="#">Allied Services</Link>
              <i>
                <img
                  src="image/li rit.svg"
                  alt=""
                  // onclick="toggleSubMenu(event)"
                />
              </i>
            </span>
            <ul className="sub-menu m2">
              <li>
              <Link to="#">Option 1</Link>
              </li>
              <li>
              <Link to="#">Option 2</Link>
              </li>

            </ul>
          </li>
          {/* <li onclick={toggleSubMenu(event)} className="arrow"> */}
          <li  className="arrow">
          <Link to="#">Patient Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

        </>
    )


}


export default header