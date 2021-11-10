import '../../styles/About.scss';


import React from 'react'

function About() {
  return (
    <div id="myAbout" className="container scrollspy">

      <div className="myAboutInfoHolder">

        <p className="myAboutParagraph" >
          Hi there! I'm SilvenLEAF and I'm insanely crazy, and madly in love with TypeScript and JavaScript. I'm a backend maniac, mainly Node based, but insanely hungry for anything programming related. I find peace amonst the insanest stuff! And that is BackEND! I also do some random Python stuff! Yes, I'm fullstack, but BackEND is where my soul resides! Thirsty for Programming, Hungry for Backend, and aspiring for DevOps!!
        </p>

        <p className="myAboutParagraph" >
          I am also insanely in love with Chinese and Japanese. I'm a big fan of tech and ULTRA BIG FAN of Chinese Sweet FLUFFY ROMANCE DRAMAS. I'm an introvert. I love listening to JPOP. Favorite singer Kenshi Younezu. Favorite color is Red. Favorite hobby Programming.
        </p>

        <div className="myAboutQA">
          <div className="myAboutTitle">Real Name</div>
          <div className="myAboutAnswer">Manash Sarma</div>
        </div>



        <div className="myAboutQA">
          <div className="myAboutTitle">From</div>
          <div className="myAboutAnswer">(East) Kameswar, Dharmanagar, (North) Tripura, (NorthEast) India</div>
        </div>




        <div className="myAboutQA">
          <div className="myAboutTitle">Born on</div>
          <div className="myAboutAnswer">31st December 2001</div>
        </div>





        <div className="myAboutQA">
          <div className="myAboutTitle">Age</div>
          <div className="myAboutAnswer">{new Date().getFullYear() - 2002}</div>
        </div>




        <div className="myAboutQA">
          <div className="myAboutTitle">Gender</div>
          <div className="myAboutAnswer">Male</div>
        </div>




        <div className="myAboutQA">
          <div className="myAboutTitle">Languages</div>
          <div className="myAboutAnswer">English, Chinese, Japanese, Hindi, Bengali</div>
        </div>




        <div className="myAboutQA">
          <div className="myAboutTitle">Hobbies</div>
          <div className="myAboutAnswer">Programming, Learning Chinese/Japanese, Creating, Problem Solving</div>
        </div>



        <div className="myAboutQA">
          <div className="myAboutTitle">My Blogs</div>
          <div className="myAboutAnswer">
            <a href="https://dev.to/silvenleaf" target="_blank" rel="noopener noreferrer">
              Dev.to/SilvenLEAF
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
