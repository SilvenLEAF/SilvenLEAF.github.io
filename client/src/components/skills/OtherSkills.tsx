import React from 'react'

function OtherSkills() {
  return (
    <div className="mySkillSectionHolder">
      <div className="mySkillSectionIcon">
        <img src="/images/fire.svg" alt="" />
      </div>

      <h4 className="mySkillSectionTitle">Others</h4>
      <ul className="mySkillSectionSkills">
        <li>
          <img src="/images/skills/azure.svg" alt="Azure" />
          Azure
        </li>
        <li>
          <img src="/images/skills/botframeworksdk.png" alt="" />
          Botframework SDK
        </li>
        <li>
          <img src="/images/skills/hapi.png" alt="git" />
          HapiJS
        </li>
        <li>
          <img src="/images/skills/chrome.svg" alt="Chrome Dev Tools" />
          Web Scraping
        </li>
        <li>
          <img src="/images/skills/git.svg" alt="git" />
          Git
        </li>
        <li>
          <img src="/images/skills/powershell.svg" alt="CLI" />
          Bash Scripting
        </li>
        <li>
          <img src="/images/skills/npm.svg" alt="npm" />
          npm
        </li>
        {/* <li>
          <img src="/images/skills/mongodb.svg" alt="" />
          CRUD
        </li> */}
        {/* <li>
          <img src="/images/skills/pwa.png" alt="PWA"/>
          PWA
        </li> */}
        {/* <li>
          <img src="/images/skills/gatsby.svg" alt="GatsbyJS"/>
          GatsbyJS
        </li> */}
        <li>
          <img src="/images/skills/vscode.svg" alt="VS Code" />
          VS Code
        </li>



      </ul>
    </div>
  )
}

export default OtherSkills
