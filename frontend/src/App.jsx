import { Routes, Route } from 'react-router-dom';

import Mainweb from './Web/components/header/main.jsx';
import AdminMain from './Admin/components/header/main.jsx';
import Login from "./Admin/components/Pages/Login";

function App(){
   return(
    <Routes>
    <Route path="*" element={<Mainweb />} ></Route>
    <Route path="/admin" element={<Login />} ></Route>
    <Route path="/admin/*" element={<AdminMain />} ></Route>
  </Routes>
   )
   
   
   
}
export default App