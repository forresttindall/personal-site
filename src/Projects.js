import React, { useState } from 'react';
import './Projects.css';


const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "ClearFeed - Open Source RSS Feed Reader",
      description: "ClearFeed is an open source RSS feed reader that allows users to read and manage their RSS feeds in a clean and intuitive interface.",
      image: "/images/clearfeed2.png",
      technologies: ["React.js", "RSS Parser", "Node.js"],
      categories: ["open source", "web", "design"],
      github: "https://github.com/forresttindall/ClearFeed-RSS-Reader",
      featured: true
    },
    {
      title: "Enterprise Air Quality Sensor Integration",
      description: "I was hired by a leading environmental consulting firm to create a novel software solution that connects PurpleAir sensors to their data dashboards.",
      image: "/images/airtower2.jpeg",
      technologies: ["JavaScript", "PurpleAir API", "Node.js"],
      categories: ["hardware"],
      github: "https://github.com/forresttindall/PurpleAir-to-Eagle.io",
      featured: true
    },
    {
      title: "QuantumKeep",
      description: "QuantumKeep is a free, open-source file encryption application that uses quantum randomness for enhanced security. The application provides local-only file encryption with true random encryption keys generated from quantum zero-point energy.",
      image: "/images/quantumkeep2.png",
      technologies: ["React.js", "Crypto.js", "ANU Quantum API", "Framer Motion"],
      categories: ["web", "design", "open source"],
      link: "https://quantumkeep.io",
      github: "https://github.com/forresttindall/QuantumKeep",
      featured: true
    },
    {
      title: "Web3 DIY Project Marketplace",
      description: "A decentralized marketplace for DIY projects, where users can create, buy, and sell their own diy hacker, 3d printed printing, software, and electronics projects.",
      image: "/images/paradoxlabs.png",
      technologies: ["React.js", "APIs", "Ethers.js", "Web3.js"],
      categories: ["web", "design"],
      link: "https://paradoxlabs.tech",
      github: "https://github.com/forresttindall/paradox-labs",
    },
    {
      title: "Life Left",
      description: "A simple app with big impact. A calculator that estimates the percentage of your life left to live in real time.",
      image: "/images/lifeleftgray.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      categories: ["web"],
      link: "https://forresttindall.github.io/Life-Left/",
      github: "https://github.com/forresttindall/Life-Left",
    },
    {
        title: "GitHub Activity Calendar",
        description: "The GitHub Activity Calendar is a JavaScript library that generates a visual representation of a user's GitHub activity calendar.",
        image: "/images/new-github-calendar2.png",
        technologies: ["JavaScript", "APIs"],
        categories: ["web", "design", "open source"],
        link: "https://forresttindall.github.io/Github-Activity-Calendar/",
        github: "https://github.com/forresttindall/Github-Activity-Calendar",
        
      },
      {
        title: "Reactive Wardriver",
        description: "LED reactive wardriver that visually shows what signals are being received from the air. This project adds reactive LED illumination to the JHewitt Wardriver device.",
        image: "/images/wardriver.jpg",
        technologies: ["C++", "electrical engineering", "esp32"],
        categories: ["hardware", "open source"],
        github: "https://github.com/forresttindall/RGB-JHewitt-Wardriver",
      },
      {
        title: "WiGLE Batch Uploader & Badge Generator",
        description: "The WiGLE Batch Uploader & Badge Generator is a tool that allows users to upload multiple files to WiGLE.net at once, and generates badges for their contributions and stats.",
        image: "/images/wigleuploader2.png",
        technologies: ["React", "html2canvas", "RPC API"],
        categories: ["web", "open source"],
        link: "https://wigleuploader.net/",
        github: "https://github.com/forresttindall/WiGLEUploader-BadgeGenerator",
      },
  ];

  const categories = ['all', 'web', 'design', 'open source', 'hardware'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-tab ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article 
            className={`project-card ${project.featured ? 'featured' : ''}`} 
            key={index}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
