import Header from "./header";
import Footer from "./footer";
import Home from "../Pages/home";

import Specialities from "../Pages/Specialities";

import 'bootstrap/dist/css/bootstrap.min.css';





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
