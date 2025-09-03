import React from 'react';
import './Academics.css';

const Academics = () => {
  const education = [
    { degree: 'B.E Computer Science', institution: 'BMS College of Engineering', year: '2022-2026', grade: '8.94/10' },
    { degree: 'Senior Secondary Education', institution: 'Base PU College', year: '2020-2022', grade: '93/100' },
    { degree: 'High School', institution: 'Sri Vani Education Centre', year: '2020', grade: '91.2/100' }
  ];

  return (
    <section className="academics">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div 
            key={index} 
            className="timeline-item" 
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <div style={{ maxWidth: '60%' }}>
              <h3 style={{ margin: 0 }}>{item.degree}</h3>
              <p style={{ margin: 0 }}>{item.institution}</p>
            </div>
            <div style={{ textAlign: 'right', minWidth: '120px' }}>
              <p className='year' style={{ margin: 0 }}>{item.grade}</p>
              <p style={{ margin: 0 }}>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academics;
