import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./header";
import Sidemenu from "./sidemenu";
import Doctor from "../Pages/Doctor";


import Dashboard from "../Pages/Dashboard";

function Main() {
  return (
    < div className="dash">
      <Header />
      <div className="dash-grid">
        <Sidemenu />
        <div className="content-div">
          <Routes>
          <Route path="/doctor" element={<Doctor />} ></Route>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
          </Routes>
        </div>
      </div>
      </div>

  );
}

export default Main;
