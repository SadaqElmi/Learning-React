import "./portfolioSection.css";

function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern, responsive e-commerce solution with focus on user experience and conversion optimization. Built with scalability and performance in mind.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Brand Identity System",
      description: "Complete visual identity redesign for a tech startup, including logo, guidelines, and digital assets. Creating a cohesive brand experience across all touchpoints.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      tags: ["Illustrator", "Photoshop", "Figma", "After Effects"]
    },
    {
      id: 3,
      title: "Mobile App Design",
      description: "Intuitive mobile app interface for a fitness tracking application with focus on accessibility and user engagement through gamification.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["Figma", "Principle", "React Native", "Lottie"]
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">
          Featured Work
          <span className="title-underline"></span>
        </h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="card-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;

