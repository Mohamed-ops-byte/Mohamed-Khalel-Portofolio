const About = () => {
  return (
    <section id="about">
      <div className="container reveal">
        <div className="section-eyebrow">ABOUT</div>
        <div className="about-grid">
          <div className="about-main">
            <h2 className="section-title">
              Crafting products with clarity, speed, and care.
            </h2>
            <h3 className="section-subtitle">Fullstack Software Engineer</h3>
            <p className="section-lead">
              I bring ideas to life by pairing React frontends with Laravel
              backends. From concept to deployment, I focus on clean
              architecture and delightful UX.
            </p>
          </div>
          <div className="about-side">
            <div className="section-label">What I deliver</div>
            <ul className="about-list">
              <li>Interface design systems and component libraries</li>
              <li>API design, authentication, and performance tuning</li>
              <li>Collaborative product delivery with agile teams</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
