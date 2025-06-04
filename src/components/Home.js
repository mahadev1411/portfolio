import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>
          Hi, I'm <span className="highlight">Mahadeva Datta Mokkapati</span>
        </h1>
        <h2>Backend Developer | Blockchain & IoT Enthusiast</h2>
        <p className="tagline">
        I'm Mahadev, a backend-focused developer passionate about building secure, scalable applications. From RESTful APIs and authentication systems to blockchain-based DApps and IoT solutions, I enjoy transforming ideas into working projects. With hands-on experience in Node.js, MongoDB, PostgreSQL, Redis, and Solidity, I focus on writing clean backend code and exploring new technologies to grow as a developer.
        </p>

        <div className="cta-buttons">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn">View Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
