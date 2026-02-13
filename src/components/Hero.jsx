import portraitImage from '../assets/1.webp'

const heroStats = [
  { label: 'Years Experience', value: '6+' },
  { label: 'Projects Delivered', value: '30+' },
  { label: 'Primary Focus', value: 'React + Laravel' },
]

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Hello, I am</p>
        <h1 className="hero-name">Mohamed Khalel</h1>
        <p className="role">Fullstack Software Engineer</p>
        <p className="intro">
          I design and build modern web experiences with a focus on React
          frontends and Laravel-powered backends. I enjoy shaping products
          that feel polished, fast, and human.
        </p>
        <div className="cta-group">
          <a className="btn primary" href="#contact">
            Let&apos;s collaborate
          </a>
          <a className="btn ghost" href="#projects">
            View projects
          </a>
        </div>
        <div className="hero-stats">
          {heroStats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait">
          <div className="portrait-ring" />
          <div className="portrait-core">
            <img
              className="portrait-image"
              src={portraitImage}
              alt="Portrait of Mohamed Khalel"
              width="800"
              height="1000"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
        <div className="hero-card">
          <h3>React + Laravel</h3>
          <p>
            Building responsive UIs, scalable APIs, and end-to-end solutions
            that ship fast.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
