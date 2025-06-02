import { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">
          I'm Prajwal Reddy R , aspiring full-stack developer passionate about creating interactive, user-friendly web applications. With expertise in HTML, CSS, JavaScript, and React.js, I build dynamic, responsive solutions to real-world challenges. Currently exploring Node.js and databases, I’m committed to mastering end-to-end development. I thrive on creative problem-solving, optimizing code, and designing intuitive interfaces. Eager to connect with fellow developers, I’m excited to collaborate on innovative web projects and grow my skills in the ever-evolving tech landscape.
          
        </p>
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        {activeTab === 'skills' && (
          <div className="skills-grid">
            {['HTML', 'CSS', 'JavaScript','Java', 'React.js', 'Node.js', 'MongoDB'].map((skill, index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-title">{skill}</h3>
                {/* <p className="skill-description">Proficient in {skill} with experience from internships and personal projects.</p> */}
              </div>
            ))}
          </div>
        )}
        {activeTab === 'education' && (
          <div className="education-list">
            {[
              {
                degree: 'B.E Information Science and Engineering',
                institution: 'Cambridge Institute of Technology',
                year: '2022 - 2026',
              },
              {
                degree: 'Higher Secondary Education',
                institution: 'Narayana PU College',
                year: '2022',
              },
            ].map((edu, index) => (
              <div key={index} className="education-item">
                <h3 className="education-title">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-year">{edu.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default About;