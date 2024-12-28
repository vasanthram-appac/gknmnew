import Header from "./header";
import Footer from "./footer";
import Home from "../Pages/home";
<<<<<<< HEAD

import Specialities from "../Pages/Specialities";
import "../webstyle.css";

=======
import Specialities from "../Pages/specialities";
import "../webstyle.css";



>>>>>>> fe674c92e92f7816edebc7e582a5fbe093f7e967


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
