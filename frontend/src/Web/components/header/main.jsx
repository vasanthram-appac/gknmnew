import Header from "./header";
import Sidemenu from "./sidemenu";
import Home from "../Pages/home";

import { BrowserRouter ,Routes ,Route } from "react-router-dom";

function Main(){
    return(
        <>
        <Header/>
        <div className="d-grid">
            <div className="side-bar">
                  <Sidemenu/>
            </div>
            <div className="content-div">
            <h2>Content</h2>
               <Routes>
                  <Route path="/" element={<Home/>} ></Route>
               </Routes>

            </div>
        </div>
        </>
    )
}
export default Main;