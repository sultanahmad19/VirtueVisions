import React, { useState } from 'react';
import '../styles/Projects.css';
import project1Img from '../assets/project-1.png';
import project2Img from '../assets/project-2.png';
import project3Img from '../assets/project-3.png';
import project4Img from '../assets/project-3.png';
import project5Img from '../assets/project-5.jpg';
import project6Img from '../assets/project-6.jpg';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce SEO Campaign',
      category: 'seo',
      image: project1Img,
      description: 'Increased organic traffic by 300% for an online fashion retailer.',
      results: ['300% Traffic Increase', '150% Revenue Growth', 'Top 3 Rankings']
    },
    {
      id: 2,
      title: 'Social Media Strategy',
      category: 'social',
      image: project2Img,
      description: 'Built a community of 50K+ engaged followers for a tech startup.',
      results: ['50K+ Followers', '85% Engagement Rate', '200% Brand Awareness']
    },
    {
      id: 3,
      title: 'PPC Campaign Optimization',
      category: 'ppc',
      image: project3Img,
      description: 'Reduced cost per acquisition by 60% while doubling conversions.',
      results: ['60% Lower CPA', '100% More Conversions', '250% ROAS']
    },
    {
      id: 4,
      title: 'Content Marketing Hub',
      category: 'content',
      image: project4Img,
      description: 'Created a content ecosystem that generated 10K+ leads monthly.',
      results: ['10K+ Monthly Leads', '500% Content ROI', 'Industry Recognition']
    },
    {
      id: 5,
      title: 'Website Redesign',
      category: 'web',
      image: project5Img,
      description: 'Modernized a corporate website resulting in 40% better conversion rates.',
      results: ['40% Better Conversion', '50% Faster Load Time', 'Mobile Optimized']
    },
    {
      id: 6,
      title: 'Brand Awareness Campaign',
      category: 'social',
      image: project6Img,
      description: 'Launched a viral campaign that reached 2M+ people organically.',
      results: ['2M+ Reach', 'Viral Content', 'Brand Recognition']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'seo', name: 'SEO' },
    { id: 'social', name: 'Social Media' },
    { id: 'ppc', name: 'PPC' },
    { id: 'content', name: 'Content' },
    { id: 'web', name: 'Web Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">See how we've helped businesses achieve remarkable results</p>
        </div>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-results">
                  {project.results.map((result, index) => (
                    <span key={index} className="result-tag">{result}</span>
                  ))}
                </div>
                <button className="project-btn">View Case Study</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <h3>Want to see more of our work?</h3>
          <p>Check out our detailed case studies and success stories.</p>
          <button className="btn btn-secondary">View All Case Studies</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
