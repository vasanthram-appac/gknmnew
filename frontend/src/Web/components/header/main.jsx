import Header from "./header";
import Footer from "./footer";
import Home from "../Pages/home";
<<<<<<< HEAD
import Specialities from "../Pages/Specialities";
import "../webstyle.css";
=======

>>>>>>> c534659f177d2f318ab2e81ae80d2d52fbc2653a


import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    < div className="web">
      <Header />
      <div className="w-content-div">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/specialities" element={<Specialities/>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default Main;
