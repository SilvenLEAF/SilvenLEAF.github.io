import React from 'react'

function BackendSkills() {
  return (
    <div className="mySkillSectionHolder">
      <div className="mySkillSectionIcon">
        <img src="/images/backend.png" alt="" />
      </div>

      <h5 className="mySkillSectionTitle">BackEND (Main Skill)</h5>
      <ul className="mySkillSectionSkills">
        <li>
          <img src="/images/skills/nodejs.svg" alt="NodeJs" />
          NodeJs
        </li>
        <li>
          <img src="/images/skills/typescript.svg" alt="TypeScript" />
          TypeScript
        </li>
        <li>
          <img src="/images/skills/express.svg" alt="ExpressJs" />
          ExpressJs
        </li>
        <li>
          <img src="/images/skills/mongodb.svg" alt="MongoDB" />
          MongoDB
        </li>
        <li>
          <img src="/images/skills/postgresql.svg" alt="PostgreSQL" />
          PostgreSQL
        </li>
        <li>
          <img src="/images/skills/hapi.png" alt="HapiJs" />
          HapiJs framework
        </li>
        <li>
          <img src="/images/skills/oauth.svg" alt="Loopback" />
          Loopback framework
        </li>
        <li>
          <img src="/images/skills/api.avif" alt="REST API" />
          REST API
        </li>
        {/* <li>
          <img src="/images/skills/graphql.svg" alt=""/>
          GraphQL
        </li> */}
        {/* <li>
          <img src="/images/skills/stripe.svg" alt=""/>
          Stripe
        </li> */}
        {/* <li>
          <img src="/images/skills/socketio.svg" alt=""/>
          Socket.IO
        </li> */}
      </ul>
    </div>
  )
}

export default BackendSkills
