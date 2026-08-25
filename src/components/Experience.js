import React, { useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const trackRef = useRef(null);

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Bullwork Mobility Pvt Ltd",
      duration: "January 2026 - July 2026",
      responsibilities: [
        "Developed backend APIs for a vehicle monitoring platform using Node.js, PostgreSQL, Redis, and ClickHouse.",
        "Built a real-time monitoring service classifying vehicle telemetry into events, warnings, and faults for dashboards and alerting.",
        "Wrote Jest test cases to improve backend reliability, maintainability, and coverage.",
        "Contributed to a crop-health analytics pipeline using CVAT, Docker, and ML workflows for crop classification and disease prediction."
    ],
      certificateUrl: "/bullwork-internship.pdf",
      buttonText: "View Completion Letter"
    },
    {
      title: "Software Engineering Intern",
      company: "ArisInfra Solutions Ltd.",
      duration: "July 2025 - December 2025",
      responsibilities: [
        "Worked on financial data analysis using SQL and GraphDB to derive key business metrics, ensuring accuracy through validation and aggregation.",
        "Worked on an n8n-based automation project to streamline PO/SO creation from Excel inputs via internal APIs."
      ],
      certificateUrl: "/Internship-Letter_ArisInfra.pdf",
      buttonText: "View Completion Letter"
    },
    {
      title: "Backend Developer Intern",
      company: "Small Fare Services Pvt Ltd",
      duration: "March 2025 - June 2025",
      responsibilities: [
        "Tested and modified backend APIs for user, organizer, event, and ticket modules.",
        "Integrated Cashfree payments with webhooks and refund handling.",
        "Secured authentication using JWT, Redis OTP, and AES encryption."
      ],
      certificateUrl: "/internship.pdf",
      buttonText: "View Completion Letter"
    }
  ];

  const scrollByOneCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll(".experience-card");
    if (!cards.length) return;

    let currentIndex = 0;
    const trackLeft = track.getBoundingClientRect().left;

    for (let i = 0; i < cards.length; i++) {
      const left = cards[i].getBoundingClientRect().left - trackLeft;
      if (left >= -10) {
        currentIndex = i;
        break;
      }
    }

    const nextIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));
    cards[nextIndex].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section className="experience">
      <h2 className="section-title">Professional Experience</h2>

      {/* Full-Time Experience section will go here once you start */}

      <h3 className="experience-subheading">Internships</h3>

      <div className="carousel-wrapper">
        <button
          className="carousel-arrow left"
          onClick={() => scrollByOneCard(-1)}
        >
          ‹
        </button>

        <div className="carousel-viewport">
          <div className="carousel-track" ref={trackRef}>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
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

                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-button"
                  >
                    {exp.buttonText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow right"
          onClick={() => scrollByOneCard(1)}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Experience;