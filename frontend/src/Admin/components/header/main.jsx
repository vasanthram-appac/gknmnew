import Header from "./header";
import Sidemenu from "./sidemenu";
import { Routes ,Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Doctor from "../Pages/Doctor";
import Login from "../Pages/Login";
function Main(){
    return(
        <>
     
        <Header/>
        <div className="d-grid">
            <div className="side-bar">
                  <Sidemenu/>
            </div>
            <div className="content-div">
               <Routes>
               <Route path="/dashboard" element={<Dashboard />} ></Route>
               <Route path="/doctor" element={<Doctor />} ></Route>

               </Routes>
                
                 

         

            </div>
        </div>
      
        </>
    )
}
export default Main;