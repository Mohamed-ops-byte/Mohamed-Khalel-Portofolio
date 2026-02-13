import portrait1024 from '../assets/1.webp'
import portrait768 from '../assets/1-768.webp'
import portrait480 from '../assets/1-480.webp'
import portrait1024Avif from '../assets/1-1024.avif'
import portrait768Avif from '../assets/1-768.avif'
import portrait480Avif from '../assets/1-480.avif'

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
            <picture>
              <source
                type="image/avif"
                srcSet={`${portrait480Avif} 480w, ${portrait768Avif} 768w, ${portrait1024Avif} 1024w`}
                sizes="(max-width: 720px) 70vw, 320px"
              />
              <source
                type="image/webp"
                srcSet={`${portrait480} 480w, ${portrait768} 768w, ${portrait1024} 1024w`}
                sizes="(max-width: 720px) 70vw, 320px"
              />
              <img
                className="portrait-image"
                src={portrait768}
                alt="Portrait of Mohamed Khalel"
                width="1024"
                height="1536"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </picture>
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
