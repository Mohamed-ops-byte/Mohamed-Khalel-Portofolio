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
          <a
            className="btn whatsapp"
            href="https://wa.me/201000965504"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="whatsapp-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12.04 2.001c-5.514 0-9.999 4.486-9.999 9.999 0 1.768.465 3.495 1.346 5.014L2 22l5.148-1.347a9.95 9.95 0 0 0 4.892 1.279h.004c5.514 0 9.999-4.486 9.999-9.999 0-2.671-1.04-5.184-2.928-7.07A9.937 9.937 0 0 0 12.04 2.001zm0 1.5c2.273 0 4.414.885 6.02 2.49a8.467 8.467 0 0 1 2.477 6.008c0 4.69-3.814 8.506-8.506 8.506h-.003a8.45 8.45 0 0 1-4.31-1.174l-.31-.185-3.056.799.814-2.978-.202-.316a8.44 8.44 0 0 1-1.3-4.652c0-4.69 3.814-8.506 8.506-8.506zm4.634 12.378c-.254-.127-1.5-.739-1.732-.823-.232-.085-.401-.127-.569.127-.169.254-.654.823-.802.992-.148.169-.296.19-.55.064-.254-.127-1.073-.395-2.043-1.26-.755-.675-1.264-1.508-1.413-1.762-.148-.254-.016-.392.111-.519.115-.114.254-.296.38-.444.127-.148.169-.254.254-.423.085-.169.042-.318-.021-.445-.064-.127-.569-1.372-.78-1.88-.206-.495-.416-.428-.569-.436l-.486-.01a.93.93 0 0 0-.673.318c-.232.254-.886.866-.886 2.112 0 1.246.907 2.45 1.034 2.62.127.169 1.786 2.726 4.33 3.823.605.262 1.077.419 1.445.536.607.193 1.16.166 1.596.101.487-.072 1.5-.612 1.712-1.203.212-.592.212-1.098.148-1.203-.064-.106-.232-.169-.486-.296z" />
            </svg>
            WhatsApp
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
