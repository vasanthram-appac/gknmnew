import  React ,{useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./header";
import Sidemenu from "./sidemenu";
import Doctor from "../Pages/Doctor";
import Specialities from "../Pages/Specialities";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Dashboard from "../Pages/Dashboard";


function Main() {
  const [menuState, setMenuState] = useState("active");
  const [menuStatefsm, setMenuStatefsm] = useState("active");

  const toggleMenu = () => {
    setMenuState((prevState) => (prevState === "active" ? "inactive" : "active"));
    Sidemenu()
  };


  return (
    < div className="dash">
       <Header onToggleMenu={toggleMenu} />
       <div className={`mblsidemenu ${menuState}`}>
       <Sidemenu />
       </div>
      <div className={`dash-grid ${menuState}`}>
        <Sidemenu className="deskmenu" />
        <div className="content-div">
          <Routes>
          <Route path="/doctor" element={<Doctor />} ></Route>
          <Route path="/specialities" element={<Specialities />} ></Route>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
          </Routes>
        </div>
      </div>
      </div>

  );
}

export default Main;
