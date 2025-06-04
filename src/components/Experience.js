import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Small Fare Services Pvt Ltd",
      duration: "March 2025 - June 2025",
      responsibilities: [
        "Developed and maintained responsive web applications using Node.js",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with cross-functional teams in Agile development environment",
      ]
    }
  ];

  return (
    <section className="experience">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
            </div>
            <ul className="experience-list">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;