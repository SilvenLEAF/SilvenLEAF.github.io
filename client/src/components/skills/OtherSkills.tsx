import React from 'react'

function OtherSkills() {
  return (
    <div className="mySkillSectionHolder">
      <div className="mySkillSectionIcon">
        <img src="/NEXT/images/fire.svg" alt="" />
      </div>

      <h4 className="mySkillSectionTitle">Others</h4>
      <ul className="mySkillSectionSkills">
        <li>
          <img src="/NEXT/images/skills/botframeworksdk.png" alt="" />
          Botframework SDK
        </li>
        <li>
          <img src="/NEXT/images/skills/hapi.png" alt="git" />
          HapiJS
        </li>
        <li>
          <img src="/NEXT/images/skills/chrome.svg" alt="Chrome Dev Tools" />
          Web Scraping
        </li>
        <li>
          <img src="/NEXT/images/skills/git.svg" alt="git" />
          Git
        </li>
          <li>
            <img src="/NEXT/images/skills/powershell.svg" alt="CLI" />
            Bash Scripting
          </li>
        <li>
          <img src="/NEXT/images/skills/npm.svg" alt="npm" />
          npm
        </li>
        {/* <li>
          <img src="/NEXT/images/skills/mongodb.svg" alt="" />
          CRUD
        </li> */}
        {/* <li>
          <img src="/NEXT/images/skills/pwa.png" alt="PWA"/>
          PWA
        </li> */}
        {/* <li>
          <img src="/NEXT/images/skills/gatsby.svg" alt="GatsbyJS"/>
          GatsbyJS
        </li> */}
        <li>
          <img src="/NEXT/images/skills/vscode.svg" alt="VS Code" />
          VS Code
        </li>
        <li>
          <img src="/NEXT/images/skills/heroku.svg" alt="Heroku" />
          Heroku
        </li>



      </ul>
    </div>
  )
}

export default OtherSkills
