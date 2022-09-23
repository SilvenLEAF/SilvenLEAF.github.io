import M from 'materialize-css'
import '../../styles/Home.scss';

import React, { useEffect } from 'react'


import Landing from '../landing/Landing';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import About from '../about/About';
import MobileLanding from '../mobileLanding/MobileLanding';
import MobileContact from '../contact/MobileContact';
import Xperience from '../xperience/Xperience';





function Home() {
  useEffect(() => {
    M.AutoInit();
  }, [])



  useEffect(() => {
    window.addEventListener('scroll', () => {
      const myBackToTopButton = document.getElementById('myBackToTopButton') as HTMLAnchorElement;

      if (window.pageYOffset > 300) {
        myBackToTopButton!.style.display = "flex";
      } else {
        myBackToTopButton!.style.display = "none";
      }

    })
  })

  return (
    <>
      <Landing />
      <MobileLanding />


      <div className="container myHomeSectionTitleHolder">
        <div className="myHomeSectionTitle">$kills</div>
      </div>
      <Skills />




      <Xperience />


      <div className="container myHomeSectionTitleHolder">
        <div className="myHomeSectionTitle">爪y Works</div>
      </div>
      <Projects />



      <div className="container myHomeSectionTitleHolder myContactMeTitleHolder">
        <div className="myHomeSectionTitle">Kontact Me</div>
      </div>
      <Contact />
      <MobileContact />





      <div className="container myHomeSectionTitleHolder">
        <div className="myHomeSectionTitle">@bout Me</div>
      </div>
      <About />


      <a href="#myNavbar" id="myBackToTopButton">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  )
}

export default Home
