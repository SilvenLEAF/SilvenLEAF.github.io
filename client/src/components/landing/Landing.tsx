import "../../styles/Landing.scss";

import React, { useState } from "react";
import { url } from "inspector";

function Landing() {
  const [isFace, setIsFace] = useState(false);

  return (
    <div id="myLanding" className="scrollspy hide-on-med-and-down">
      <div id="myLandingTitleHolder" onClick={() => setIsFace(!isFace)}>
        <h5>I am developing</h5>
        <h1>DREAMS into REALITY</h1>
        <h3>Staff Software Engineer @X0PA AI</h3>
        <h6>Backend Engineer (NodeJS)</h6>

        <div id="myLandingButtonHolder">
          <a href="#myProjects" id="myLandingButton">
            My Works
          </a>
        </div>
      </div>

      <div
        id="myLandingIcon"
        style={{
          background:
            false && isFace
              ? "url('/logos/SilvenLEAF Face.jpg') center/cover"
              : "url('/logos/SilvenLEAF.jpg') center/cover",
        }}
        onClick={() => setIsFace(!isFace)}
      ></div>
    </div>
  );
}

export default Landing;
