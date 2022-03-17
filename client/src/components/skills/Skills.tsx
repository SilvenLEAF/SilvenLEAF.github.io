
import '../../styles/Skills.scss'

import React from 'react'
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';

function Skills() {


  return (
    <div id="mySkills" className="scrollspy" >
    
      <div>
        <BackendSkills/>
      </div>
      <div>
        <FrontendSkills/>
      </div>
      <div>
        <OtherSkills/>
      </div>
    
    </div>
  )
}

export default Skills
