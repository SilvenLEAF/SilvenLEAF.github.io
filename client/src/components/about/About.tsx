import "../../styles/About.scss";

import React from "react";

function About() {
  return (
    <div id="myAbout" className="container scrollspy">
      <div className="myAboutInfoHolder">
        <p className="myAboutParagraph">
          🚀 Hey there! I'm SilvenLEAF — a code-fueled maniac obsessed with
          TypeScript and JavaScript. I breathe backend, dream in APIs, and
          thrive in the glorious chaos of Node.js. You could call me fullstack,
          but let's be real — Back End is where my soul lives.
        </p>

        <p className="myAboutParagraph">
          If Chinese is my heart, then Japanese is my soul — there's a quiet
          magic woven into every word. By day, I'm a server-side maniac, deep in
          the world of logic and code, but by night, I become a hunter of sweet
          and fluffy Chinese dramas and a devourer of heart-melting Chinese
          novels, savoring every chapter in its purest form.
        </p>

        <div className="myAboutQA">
          <div className="myAboutTitle">Real Name</div>
          <div className="myAboutAnswer">Manash Sarma</div>
        </div>
        <div className="myAboutQA">
          <div className="myAboutTitle">Alias</div>
          <div className="myAboutAnswer">SilvenLEAF</div>
        </div>

        <div className="myAboutQA">
          <div className="myAboutTitle">Son of</div>
          <div className="myAboutAnswer">
            Mihir Kanti Sarma (Moti Sarma) and Asha Rani Sarma
          </div>
        </div>

        <div className="myAboutQA">
          <div className="myAboutTitle">From</div>
          <div className="myAboutAnswer">
            (East) Kameswar, Dharmanagar, (North) Tripura, India
          </div>
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
          <div className="myAboutAnswer">I'm a boy</div>
        </div>

        <div className="myAboutQA">
          <div className="myAboutTitle">Languages</div>
          <div className="myAboutAnswer">
            English, Chinese, Japanese, Hindi, Bengali
          </div>
        </div>

        <div className="myAboutQA">
          <div className="myAboutTitle">Hobbies</div>
          <div className="myAboutAnswer">
            Reading Chinese Novels, Watching Wuxia or Fluffy Chinese Dramas,
            Listening to JPOP and CPOP, Problem Solving
          </div>
        </div>

        <div className="myAboutQA">
          <div className="myAboutTitle">My Blogs</div>
          <div className="myAboutAnswer">
            <a
              href="https://dev.to/silvenleaf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev.to/SilvenLEAF
            </a>
          </div>
        </div>

        <div className="myAboutQA">
          <div className="myAboutTitle">Dream</div>
          <div className="myAboutAnswer">
            化身为 绝对的《精霊龍神》《灵龙神》
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
