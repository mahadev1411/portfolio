import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava
} from 'react-icons/fa';
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiC,
  SiCplusplus
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'React', icon: <FaReact color="#61DBFB" /> }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express.js', icon: <SiExpress color="#000000" /> },
        { name: 'RESTful APIs', icon: <SiPostman color="#FF6C37" /> }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'MySQL', icon: <SiMysql color="#00758F" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> }
      ]
    },
    {
      category: 'Version Control',
      items: [
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'GitHub', icon: <FaGithub color="#181717" /> }
      ]
    },
    {
        category: 'Programming Languages',
        items: [
          { name: 'Java', icon: <FaJava color="#007396" /> },
          { name: 'C', icon: <SiC color="#00599C" /> },       // blue C
          { name: 'C++', icon: <SiCplusplus color="#00599C" /> }
        ]
      }
      
  ];

  return (
    <section className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.items.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
