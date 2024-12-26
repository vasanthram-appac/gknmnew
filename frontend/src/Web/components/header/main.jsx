import Header from "./header";
import Footer from "./footer";
import Home from "../Pages/home";
import "../webstyle.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    < div className="web">
      <Header />
      <div className="content-div">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default Main;
