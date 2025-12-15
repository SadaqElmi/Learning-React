import "./heroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>
      <div className="hero-content">
        <p className="hero-label">CREATIVE DESIGNER</p>
        <h1 className="hero-title">
          Transforming Ideas Into Beautiful Experiences
        </h1>
        <p className="hero-description">
          I craft digital experiences that captivate, engage, and inspire through thoughtful design and innovative solutions
        </p>
        <button className="hero-button">Explore My Work</button>
        <div className="scroll-indicator">
          <div className="mouse-icon"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
