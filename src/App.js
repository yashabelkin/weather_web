import React from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import FirstPage from "./components/FirstPage";
import SecPage from "./components/SecPage";

function App() {

  
  return (
    <>
    <div className="navWrap">
    <NavBar />
    </div>
    
    <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/sec" element={<SecPage />} />
    </Routes>


    </>
  );
}

export default App;
