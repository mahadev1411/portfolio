import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { 
      title: 'Smart Parking System', 
      desc: 'The Smart Parking System uses IoT sensors to detect available parking spots in real-time. It helps drivers find open spaces quickly through a mobile app, reducing traffic and parking time. ',
      githubLink: 'https://github.com/mahadev1411/Smart_Parking_System' 
    },
    { 
      title: 'Voting Application', 
      desc: 'Developed a secure backend using Node.js, MongoDB, and JWT authentication for user registration, voting, and result access. Implemented email verification and rate limiting to prevent DoS attacks. Deployed on Render for real-world testing.',
      githubLink: 'https://github.com/mahadev1411/Voting_application_backend' 
    },
    { 
      title: 'Real-Estate Dapp', 
      desc: ` Blockchain-based Real Estate Dapp: Built with Solidity and Hardhat, this DApp uses 
NFT-based property tokens and an escrow contract involving buyer, seller, lender, 
and inspector roles. Designed the frontend with React and tested smart contracts using 
Chai and Mocha. `,
      githubLink: 'https://github.com/yourusername/real-estate-dapp' 
    }
  ];

  return (
    <section className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
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
    </section>
  );
};

export default Projects;