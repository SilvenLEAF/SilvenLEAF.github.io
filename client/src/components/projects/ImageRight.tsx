import React from 'react'
import { IProjectDataItem } from '../../interfaces/ProjectDataInterface'

function ImageRight({ title, links, images, technology, description }: IProjectDataItem) {
  return (
    <div id="myImageRightProjectHolder" className="container container myProjectHolder">
      
      <div>
        <div className="myProjectImageHolder">
          <img src={ `/NEXT${images.image3d}` } alt="" className="my3dProjectImage"/>
          <img src={ `/NEXT${images.image2d}` } alt="" className="my2dProjectImage"/>
        </div>
      </div>

      
      <div className="myProjectDescriptionHolder">
        <h4 className="myProjectTitle">{ title }</h4>
        <div className="myProjectButtons">
          <a target="_blank" href={ links.live || links.sourceCode }>
            <button className="mySeeLiveButton"><i className="fa fa-link fa-rotate-90"></i> See LIVE</button>
          </a>
          <a target="_blank" href={ links.sourceCode }>
            <button className="mySeeSourceCodeButton"><i className="fab fa-github"></i> Source Code</button>
          </a>
        </div>

        
        <ul className="myUsedTechnology" >
          {
            technology[0] && technology.map((item, index)=>{
              return <li key={index} ><i className="fa fa-cog"></i> { item }</li>
            })
          }
        </ul>
        
        
        <p className="myProjectDescription" >
          { description }
        </p>
      </div>

    </div>
  )
}

export default ImageRight
