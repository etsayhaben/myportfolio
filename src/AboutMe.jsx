import React from "react";
import "./AboutMe.css";
import "./ContactMe.css";
import arrowright from "../public/gohere.jpg";
import myphoto from "../public/myphoto.jpg";
const AboutMe = () => {
  return (
    <section className="about-me" id="about_me">
      <div className="photo-container">
        <img
          src={myphoto}
          alt="Haben Etsay Weldeslase"
          className="profile-photo"
        />
      </div>
      <div className="overlay">
        <h2>About Me</h2>
        <p>
          My name is <span className="highlight">Haben Etsay Weldeslase</span>,
          a passionate software developer with a strong foundation in Software
          Engineering . I graduated from
          <span className="highlight"> Mekelle University</span> with a
          <span className="highlight"> Bachelor of Science degree</span>,
          achieving a CGPA of
          <span className="highlight"> 3.89</span> and an exit exam result of
          <span className="highlight"> 76 in 2017E.C</span>.<br></br>
          <br></br>I specialize in{" "}
          <span className="highlight">full stack development</span>,
          <span className="highlight"> networking</span>, and
          <span className="highlight"> troubleshooting</span>. My goal is to
          leverage technology to solve real-world problems while continuously
          enhancing my skills in the tech industry.
          <br></br>
          <br></br>I have a diverse skill set that includes{" "}
          <span className="highlight">JavaScript</span>,
          <span className="highlight"> React</span>,{" "}
          <span className="highlight">Node.js</span>,
          <span className="highlight">Express</span> and{" "}
          <span className="highlight">Spring boot</span>. I am also proficient
          in
          <span className="highlight"> database management</span> (both SQL and
          NoSQL) and
          <span className="highlight"> version control</span> using Git.
          <br></br>
          <br></br>
          Beyond my technical skills, I am interested in{" "}
          <span className="highlight">AI</span>,
          <span className="highlight"> machine learning</span>, and{" "}
          <span className="highlight">cybersecurity</span>. I am eager to
          contribute to open-source projects and collaborate with others in the
          tech community.
          <div className="download_link">
            <img src={arrowright} className="arrowRigh"></img>
            <a
              href="https://drive.google.com/file/d/1foCbU7PJsdTFFsbcBiS8zwEwpJ5fwDWj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="downloadCv">Download CV Here</button>
            </a>
          </div>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
