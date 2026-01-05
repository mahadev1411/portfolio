import React, { useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const trackRef = useRef(null);

  const projects = [
    {
      title: "Smart Parking System",
      desc:
        "The Smart Parking System uses IoT sensors to detect available parking spots in real-time. It helps drivers find open spaces quickly through a mobile app, reducing traffic and parking time.",
      githubLink: "https://github.com/mahadev1411/Smart_Parking_System",
    },
    {
      title: "Voting Application",
      desc:
        "Developed a secure backend using Node.js, MongoDB, and JWT authentication for user registration, voting, and result access. Implemented email verification and rate limiting to prevent DoS attacks. Deployed on Render for real-world testing.",
      githubLink: "https://github.com/mahadev1411/Voting_application_backend",
    },
    {
      title: "Real-Estate Dapp",
      desc:
        "Blockchain-based Real Estate Dapp built with Solidity and Hardhat. Uses NFT-based property tokens and an escrow contract involving buyer, seller, lender, and inspector roles. Frontend built with React and contracts tested using Chai and Mocha.",
      githubLink: "https://github.com/mahadev1411/real_estate_DApp",
    },
    {
      title: "Blockchain-Enabled Smart Water Allocation System",
      desc:
        "End-to-end smart water management system integrating IoT sensors, ML models, and blockchain to optimize agricultural water allocation. Used Hyperledger Fabric for immutable records and Cassandra for scalable data storage.",
      githubLink: "https://github.com/mahadev1411/Smart-water-allocation",
    },
  ];

  const scrollByOneCard = (direction) => {
  const track = trackRef.current;
  if (!track) return;

  const cards = track.querySelectorAll(".project-card");
  if (!cards.length) return;

  // find the first card that is currently (mostly) visible
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
    <section className="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="carousel-wrapper">
        <button
          className="carousel-arrow left"
          onClick={() => scrollByOneCard(-1)}
        >
          ‹
        </button>

        <div className="carousel-viewport">
          <div className="carousel-track" ref={trackRef}>
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a
                  href={project.githubLink}
                  className="project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
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

export default Projects;
