import React from 'react';
import './Academics.css';

const Academics = () => {
  const education = [
    { degree: 'B.E Computer Science', institution: 'BMS College of Engineering', year: '2022-2026' ,grade:'8.98/10'},
    { degree: 'Secondary School', institution: 'Base PU College', year: '2020-2022',grade: '93/100' },
    {degree: 'High School',institution: 'Sri Vani Education Centre', year: '2020',grade: '91.2/100'}
  ];

  return (
    <section className="academics">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <p className='year'>{item.grade}</p>
            <p>{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academics;