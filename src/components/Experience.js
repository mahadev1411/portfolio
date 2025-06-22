import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Small Fare Services Pvt Ltd",
      duration: "March 2025 - June 2025",
      responsibilities: [
        "Tested and modified backend APIs for user, organizer, event, and ticket modules.",
        "Integrated Cashfree payments with webhooks and refund handling.",
        "Secured authentication using JWT, Redis OTP, and AES encryption."
      ],
      certificateUrl: "/internship.pdf"  // <- This is your public folder path
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

            {/* View/Download Button */}
            {exp.certificateUrl && (
              <a
                href={exp.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
              >
                View Completion Letter
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
