import React from "react";
import { Box, Button } from "@mui/material";
import "./myprojects.css";
import vote from "../public/vote.jpg";
import githubimage from "../public/gohere.jpg";
import broker from "../public/broker.jpeg";
import calculator from "../public/calculator.png";
import pharmacy from "../public/pharmacy.jpg";
import studentManagement from "../public/studentmanagement.png";
import database from "../public/database.png";
import meeting_app from "../public/meeting_app.png";
const projects = [
  {
    title: "Student Union Online Election System",
    image: vote,
    github:
      "https://github.com/habenetsay/full_stack_online_election_system.git",
    live: "https://habenetsay.github.io/full_stack_online_election_system/",
  },
  {
    title: "Broker Website System",
    image: broker,
    github: "https://github.com/etsayhaben/brokerwebsitesystem.git",
    live: "https://habenetsay.github.io/full_stack_online_election_system/", // Replace with live link if available
  },
  {
    title: "college database design documentation",
    image: database,
    github: "https://github.com/etsayhaben/database_design_for_college.git", // Replace with GitHub link if available
    live: "#", // Replace with live link if available
  },
  {
    title: " console based online student result managment",
    image: studentManagement,
    github:
      "https://github.com/etsayhaben/console-based-online-student-result-managment.git",
    live: "#", // Replace with live link if available
  },
  {
    title: "Meeting event application using Java",
    image: meeting_app,
    github:
      "https://github.com/etsayhaben/mini-final-project-in-javaa-meeting-events-registration.git",
    live: "#", // Replace with live link if available
  },

  {
    title: "graphical Calculator using java Swing",
    image: broker,
    github:
      "https://github.com/etsayhaben/Simple-Calculator-Application-Java-Swing-.git",
    live: "#", // Replace with live link if available
  },
];

const MyProjects = () => {
  return (
    <section className="myprojects-section">
      <h1 className="section-title">My Projects</h1>

      <Box className="projects-container">
        {projects.map((project, index) => (
          <Box key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="manual">
              <h2 className="project-title">{project.title}</h2>
              <Box className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-btn">GitHub</button>
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="project-btn" variant="contained">
                      Live
                    </Button>
                  </a>
                )}
              </Box>
            </div>
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default MyProjects;
