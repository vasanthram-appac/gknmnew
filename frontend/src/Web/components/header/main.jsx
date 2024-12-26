import Header from "./header";
import Footer from "./footer";
import Home from "../Pages/home";

import { BrowserRouter ,Routes ,Route } from "react-router-dom";

function Main(){
    return(
        <>
        <Header/>

            <div className="content-div">

               <Routes>
                  <Route path="/" element={<Home/>} ></Route>
               </Routes>

            </div>
<Footer/>
        </>
    )
}
export default Main;