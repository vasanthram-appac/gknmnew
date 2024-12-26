import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './Admin/components/header/main.jsx'
import Appweb from './Web/Appweb.jsx'
import Login from "./Admin/components/Pages/Login";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>

      <Route path="/*" element={<Appweb/>} ></Route>
  
        {/* Route for Admin */}
        <Route path="/admin/*" element={<App />} />

        {/* Route for Admin Login */}
        <Route path="/admin" element={<Login />} />
     
  </Routes>
  
  </BrowserRouter>
  

  </StrictMode>,
)
