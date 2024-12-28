import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Mainweb from './Web/components/header/main.jsx';
import AdminMain from './Admin/components/header/main.jsx';
import Login from "./Admin/components/Pages/Login";

function App() {
  const isAuthenticated =
    sessionStorage.getItem("token") && sessionStorage.getItem("token").trim() !== "" &&
    sessionStorage.getItem("username") && sessionStorage.getItem("username").trim() !== "";
//     sessionStorage.setItem("username", "");
//   sessionStorage.setItem("token", "");
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="*" element={<Mainweb />} />

      {/* Conditional Routing */}
      <Route
        path="/admin/*"
        element={
          isAuthenticated ? (
            <AdminMain />
          ) : (
            <Navigate to="/admin"/>
          )
        }
      />
      <Route
        path="/admin"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/doctor"/>
          ) : (
            <Login />
          )
        }
      />
    </Routes>
  );
}

export default App;
