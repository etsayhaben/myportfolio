import React from "react";
import "./myskills.css";

const skills = [
  {
    title: "Front-End development",
    details: [
      "Developing dynamic and responsive interfaces using JavaScript frameworks like React.js and Next.js",
      "State management via Redux",
    ],
  },
  {
    title: "Back-End Development",
    details: [
      "Building scalable applications using Spring Boot",
      "Node.js and Express.js",
      "Strong expertise in RESTful APIs and GraphQL",
    ],
  },
  {
    title: "Database Optimization",
    details: [
      "Efficient data modeling and management using PostgreSQL",
      "MongoDB and MySQL",
      "ORM technologies like Hibernate & Sequelize",
    ],
  },
];

const MySkills = () => {
  return (
    <div className="myskills-container">
      <p className="section-title">Technical Expertise</p>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-card skill-card-${index}`}>
            <h2>{skill.title}</h2>
            <ul>
              {skill.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
