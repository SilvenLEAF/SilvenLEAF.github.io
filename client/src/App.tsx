import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import MobileFooterNav from './components/mobileFooterNav/MobileFooterNav'



import Home from './components/home/Home'


function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Navbar />
        <div id="myWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {
            /* -------------------------------
              In React Router Dom V6
              path="/" means exact path="/"
              path="/*" means path="/"
            ------------------------------- */
          }
        </div>

        <div id="myFooter">
          <Footer />
        </div>

        <MobileFooterNav />

      </div>
    </BrowserRouter>
  );
}

export default App;
