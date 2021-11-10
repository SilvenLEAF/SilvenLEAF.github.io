import React from 'react'

function BackendSkills() {
  return (
    <div className="mySkillSectionHolder">
      <div className="mySkillSectionIcon">
        <img src="/NEXT/images/backend.png" alt=""/>
      </div>

      <h4 className="mySkillSectionTitle">BackEND</h4>
      <ul className="mySkillSectionSkills">
        <li>
          <img src="/NEXT/images/skills/nodejs.svg" alt=""/>
          NodeJS
        </li>
        <li>
          <img src="/NEXT/images/skills/typescript.svg" alt=""/>
          TypeScript
        </li>
        <li>
          <img src="/NEXT/images/skills/express.svg" alt=""/>
          ExpressJS
        </li>
        <li>
          <img src="/NEXT/images/skills/mongodb.svg" alt=""/>
          MongoDB
        </li>
        <li>
          <img src="/NEXT/images/skills/postgresql.svg" alt=""/>
          PostgreSQL
        </li>
        <li>
          <img src="/NEXT/images/skills/passport.png" alt=""/>
          PassportJS
        </li>
        <li>
          <img src="/NEXT/images/skills/oauth.svg" alt=""/>
          OAUTH 2.0
        </li>
        <li>
          <img src="/NEXT/images/skills/restapi.jpg" alt=""/>
          REST Api
        </li>
        {/* <li>
          <img src="/NEXT/images/skills/graphql.svg" alt=""/>
          GraphQL
        </li> */}
        {/* <li>
          <img src="/NEXT/images/skills/stripe.svg" alt=""/>
          Stripe
        </li> */}
        {/* <li>
          <img src="/NEXT/images/skills/socketio.svg" alt=""/>
          Socket.IO
        </li> */}
      </ul>
    </div>
  )
}

export default BackendSkills
