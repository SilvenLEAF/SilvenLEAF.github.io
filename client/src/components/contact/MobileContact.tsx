import '../../styles/MobileContact.scss';

import React from 'react'
import MobileContactCollectionItem from './MobileContactCollectionItem';





function MobileContact() {
  return (
    <div id="myMobileContact" className="container scrollspy hide-on-med-and-up" >
      <ul className="collection">


        <MobileContactCollectionItem 
          mainIcon="fab fa-google" 
          title="Gmail"
          link="mailto:silvenleaf@gmail.com?subject=Contact&body=Hi SilvenLEAF"
          linkText="SilvenLEAF@gmail.com"  
        />





        <MobileContactCollectionItem 
          mainIcon="fab fa-linkedin" 
          title="Linked In"
          link="https://www.linkedin.com/in/silvenleaf/"
          linkText="linkedin.com/in/SilvenLEAF"  
        />







        
        <MobileContactCollectionItem 
          mainIcon="fab fa-github" 
          title="Github"
          link="https://github.com/SilvenLEAF"
          linkText="github.com/SilvenLEAF"  
        />







        
        
        <MobileContactCollectionItem 
          mainIcon="fab fa-twitter" 
          title="Twitter"
          link="https://twitter.com/SilvenLEAF?s=20"
          linkText="twitter.com/SilvenLEAF"  
        />


      </ul>


      
    </div>
  )
}

export default MobileContact
