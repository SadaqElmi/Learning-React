import "./aboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
            alt="Creative professional at work"
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h2 className="about-heading">
            Passionate about creating meaningful digital experiences
          </h2>
          <div className="about-text">
            <p>
              With over 2years of experience in digital design, I specialize in creating 
              user-centered solutions that bridge functionality and aesthetics. My work 
              focuses on crafting interfaces that are not only visually appealing but also 
              intuitive and accessible.
            </p>
            <p>
              I believe that great design is about how it looks, how it works, and how it 
              makes people feel. Every project is an opportunity to solve problems, tell 
              stories, and create meaningful connections between brands and their audiences.
            </p>
            <p>
              When I'm not designing, you can find me exploring new technologies, sketching 
              ideas, or seeking inspiration in nature and architecture. I'm always learning 
              and evolving, bringing fresh perspectives to every project.
            </p>
          </div>
          <div className="skills-container">
            <div className="skill-tag">UI/UX Design</div>
            <div className="skill-tag">Web Development</div>
            <div className="skill-tag">Brand Identity</div>
            <div className="skill-tag">Motion Graphics</div>
            <div className="skill-tag">Prototyping</div>
            <div className="skill-tag">Design Systems</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

