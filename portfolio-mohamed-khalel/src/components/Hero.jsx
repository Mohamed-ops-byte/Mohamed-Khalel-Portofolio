import heroPhoto from "../assets/1.webp";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-kicker">HELLO, I AM</div>
          <h1 className="hero-title">Mohamed Khalel</h1>
          <div className="hero-role">Fullstack Software Engineer</div>
          <p className="hero-summary">
            I design and build modern web experiences with a focus on React
            frontends and Laravel-powered backends. I enjoy shaping products
            that feel polished, fast, and human.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Let&apos;s collaborate
            </a>
            <a className="btn btn-secondary" href="#projects">
              View projects
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <strong>6+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>30+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="stat-card">
              <strong>React + Laravel</strong>
              <span>Primary Focus</span>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-frame">
            <img className="hero-photo" src={heroPhoto} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
