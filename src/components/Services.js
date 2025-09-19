import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.',
      features: ['Keyword Research', 'On-Page Optimization', 'Link Building', 'Technical SEO']
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all major social platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives conversions.',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Email Campaigns']
    },
    {
      icon: '💰',
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click campaigns across Google, Facebook, and more.',
      features: ['Campaign Setup', 'Ad Creation', 'Bid Management', 'Performance Tracking']
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and detailed performance reports.',
      features: ['Google Analytics', 'Custom Dashboards', 'Monthly Reports', 'ROI Analysis']
    },
    {
      icon: '🎨',
      title: 'Web Design & Development',
      description: 'Create stunning, responsive websites that convert visitors into customers.',
      features: ['UI/UX Design', 'Responsive Development', 'E-commerce Solutions', 'Maintenance & Support']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive digital marketing solutions tailored to your business</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to grow your business?</h3>
          <p>Let's discuss how our services can help you achieve your goals.</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
