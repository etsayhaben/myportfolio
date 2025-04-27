import { Box, Button, Card } from "@mui/material";
import "./App.css";
import myImage from "../public/home.png";
import man_white from "../public/man-white.jpg";
import vote from "../public/vote.jpg";
import githubimage from "../public/gohere.jpg";
import arrow_right from "../public/arrow-right.png";
import broker from "../public/broker.jpeg";
import pharmacy from "../public/pharmacy.jpg";
import myproject from "../public/myproject.png";
import google from "../public/gmail.png";
import facebook from "../public/facebook.jpg";
import telegram from "../public/telegram.png";
import call from "../public/call.jpg";
import background from "../public/backgroundimage.jpg";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
function App() {
  return (
    <>
      <Box className="body">
        <img src={background}></img>

        <Box className="introduction">
          <Box className="homepage">
            <p className="name">Hi, i am Haben</p>
            <ul>
              <li>Full Stack Web Developer</li>
              <li>Networking Specialist</li>
              <li>Trobuleshooting expert</li>
            </ul>
          </Box>

          <br></br>
          <Box className="links">
            <a href="#myskills">
              <button>my skills</button>
            </a>
            <a href="#about_me">
              <button>about me</button>
            </a>
            <a href="#myprojects">
              {" "}
              <button>my projects</button>
            </a>
            <a href="#contact_me">
              {" "}
              <button>contact me</button>
            </a>
          </Box>
        </Box>

        <Box className="skills">
          <section id="myskills">
            <MySkills />
          </section>
        </Box>
        <Box className="projects">
          <section id="myprojects">
            <MyProjects />
          </section>
        </Box>
        <Box className="aboutme">
          <section id="aboutme">
            <AboutMe />
          </section>
        </Box>
        <Box className="contactme">
          <section id="contactme">
            <ContactMe />
          </section>
        </Box>
      </Box>
    </>
  );
}

export default App;
