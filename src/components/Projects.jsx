

function Projects() {
  const projects = [
    {
      backgroundImage: 'project1',
      title: 'Netflix UI Clone',
      description: 'A responsive replica of Netflix’s interface using HTML, CSS.',
      link: 'https://github.com/Prajwal-Reddy-R/Netflix-UI-Clone.git',
    },
    {
      backgroundImage: 'project2',
      title: 'Dice Game',
      description: 'An interactive dice-rolling game built with JavaScript and a sleek UI.',
      link: 'https://github.com/Prajwal-Reddy-R/Dice-Game.git',
    },
    {
      backgroundImage: 'project3',
      title: 'Food Zone',
      description: 'A React-based web app for exploring recipes, powered by a public API.',
      link: 'https://github.com/Prajwal-Reddy-R/Food-Zone.git',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p className="section-description">
          Explore my collection of web development projects, showcasing responsive UI design, interactive JavaScript applications, and API-driven dynamic content.
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ backgroundImage: `url('/images/${project.backgroundImage}.png')` }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;