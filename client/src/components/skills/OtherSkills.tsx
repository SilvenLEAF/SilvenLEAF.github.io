import React from 'react'

function OtherSkills() {
  return (
    <div className="mySkillSectionHolder">
      <div className="mySkillSectionIcon">
        <img src="/images/others.svg" alt="" />
      </div>

      <h5 className="mySkillSectionTitle">Others</h5>
      <ul className="mySkillSectionSkills">
        <li>
          <img src="/images/skills/azure.svg" alt="Azure" />
          Azure Cloud
        </li>
        <li>
          <img src="/images/skills/botframeworksdk.png" alt="Botframework SDK" />
          Botframework SDK
        </li>
        <li>
          <img src="/images/skills/secure.jpeg" alt="Data Securing" />
          Data Securing with PGP, GPG, RSA, AES Encryption
        </li>
        <li>
          <img src="/images/skills/passport.png" alt="passport" />
          PassportJs framework
        </li>
        <li>
          <img src="/images/skills/sftp.png" alt="SFTP" />
          SFTP based Data Sync
        </li>
        <li>
          <img src="/images/skills/git.svg" alt="git" />
          Git and Version Control
        </li>
        <li>
          <img src="/images/skills/terminal.svg" alt="Bash Scripting" />
          Bash Scripting and Automation
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
        {/* <li>
          <img src="/images/skills/vscode.svg" alt="VS Code" />
          VS Code
        </li> */}



      </ul>
    </div>
  )
}

export default OtherSkills
