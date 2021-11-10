
import '../../styles/Landing.scss'

import React from 'react'
import { url } from 'inspector'

function Landing() {
 


  return (
    <div id="myLanding" className="scrollspy hide-on-med-and-down" >        

      <div id="myLandingTitleHolder">
        <h5>I turn your</h5>
        <h1>DREAMS into REALITY</h1>
        <h3>Fullstack Developer</h3>




        <div id="myLandingButtonHolder">
          <a href="#myProjects" id="myLandingButton">
            My Works
          </a>
        </div>


        
      </div>

      <div id="myLandingIcon" style={{background: "url('/NEXT/SilvenLEAF.jpg') center/cover" }}></div>
    </div>
  )
}

export default Landing
