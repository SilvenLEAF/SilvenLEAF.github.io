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






      <div className="container myHomeSectionTitleHolder">
        <div className="myHomeSectionTitle">爪y Works</div>
      </div>
      <Projects />




      <div id="experienceSection" className="scrollspy container myHomeSectionTitleHolder myContactMeTitleHolder" style={{ marginBottom: "0px" }} >
        <div className="myHomeSectionTitle">Xperience</div>
      </div>

      <p className="myExperienceParagraph container" style={{ marginBottom: "50px", userSelect: "text" }} >
        <p className="expSectionTitle myThemeColorText" style={{ marginBottom: "0px" }}>
          Software Engineer, X0PA AI (Feb 2021 - present)
        </p>
        <p style={{ marginTop: "0px" }}>

          <li>
            Developed two Virtual Mentors (Eus and Eme) with Ms Botframework SDK. One for employers and one for people with autism.
          </li>
          <li>
           Implemented FTS Search Algorithm
          </li>
          <li>
           Implemented Boolean Search Algorithm
          </li>
          <li>
           Worked on Nylas Email Integration
          </li>
          <li>
           Helped with data migration
          </li>
          <li>
           Developed REST-ful API(s)
          </li>
          <li>
           Handled CRUD, Database, and Serverside stuff
          </li>
          <li>
           Scripting
          </li>
          <li>
           Automations etc
          </li>
        </p>

        <p className="expSectionTitle myThemeColorText" style={{ marginBottom: "0px" }}>
          Backend Engineer, SilvenLEAF (Apr 2020 - present)
        </p>
        <p style={{ marginTop: "0px" }}>
          <li>
            Created API(s)
          </li>
          <li>
            Implemented Oauth 2.0
          </li>
          <li>
            Applied MVC Design Pattern
          </li>
          <li>
            Created Chatbots with Ms Botframework SDK
          </li>
          <li>
            Worked on Nylas Email integration
          </li> 
          <li>
            Implemented FTS Search Algorithm
          </li>
          <li>
            Implemented Boolean Search Algorithm
          </li>
          <li>
            Created Web Apps and PWA(s)
          </li>
          <li>
            Cross platform React Native Apps (with expo)
          </li>
          <li>
            Automate manual tasks
          </li>
          <li>
            Applied Clean Code etc
          </li>
        </p>
      </p>



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
