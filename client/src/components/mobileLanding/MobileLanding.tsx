import '../../styles/MobileLanding.scss';



import React, { useState } from 'react'
import Carousal from './Slider';

function MobileLanding() {
  const [isFace, setIsFace] = useState(false);
  return (
    <div id="myMobileLanding" className="hide-on-large-only" >

      <div id="myMobileLandingTitleHolder" onClick={() => setIsFace(!isFace)}>
        <div id="myMobileLandingIcon" style={{ background: isFace ? "url('/logos/SilvenLEAF Face.jpg') center/cover" : "url('/logos/SilvenLEAF.jpg') center/cover" }} ></div>

        <h5>Developing</h5>
        <h1>DREAMS into REALITY</h1>
        <h3>Staff Software Engineer @X0PA AI</h3>
        <h6>Backend Engineer (NodeJS)</h6>
      </div>


      <div id="myLandingCarousalHolder" className="container" >
        <div id="myMobileLandingButtonHolder" className="container" >
          <a href="#myProjects" id="myMobileLandingButton">
            <i className="fas fa-biohazard"></i> Click here to see all my Works <i className="fas fa-biohazard"></i>
          </a>
        </div>
        <Carousal />
      </div>
    </div>
  )
}

export default MobileLanding
