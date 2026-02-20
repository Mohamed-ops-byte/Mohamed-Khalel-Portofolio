import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import projectTourguide from './assets/project-tourguide.webp'
import projectHostingHouses from './assets/hosting houses.PNG'
import projectLuxorHouse from './assets/luxor house.PNG'
import projectGraphicDesigner from './assets/Graohic designer.PNG'



const imageBase = 'https://images.unsplash.com'
const imageParams = 'auto=format&fit=crop&w=900&q=70'

const projects = [
  {
    title: 'tourguide website',
    description:
      'واجهة سياحية ملهمة تعرض البرامج والجولات مع تجربة مرئية مريحة للمسافرين.',
    stack: ['React', 'CMS', 'SEO', 'UX'],
    image: projectTourguide,
    link: 'https://tourguidedimo.vercel.app/',
  },
  {
    title: 'نظام تأجير عقارات',
    description:
      'منصة تأجير عقارات مع قوائم تفاعلية، إدارة الحجوزات، وتجربة مستخدم سلسة وعصريه.',
    stack: ['React', 'Laravel', 'REST', 'Dashboards'],
    image: projectHostingHouses,
    link: 'https://hosting-houses.vercel.app/',
  },
  {
    title: 'Real Estate Booking Platform',
    description:
      'منصة حجز عقارات متعددة الخدمات مع خرائط تفاعلية، تقويمات توفر، وتجربة مناسبة لعملاء .',
    stack: ['React', 'Maps', 'Calendar', 'Payments'],
    image: projectLuxorHouse,
    link: 'https://luxor-house.vercel.app/',
  },
  {
    title: 'نظام إدارة عيادة',
    description:
      'موقع مصمم و مبدع  للوحات والاعلانات',
    stack: ['React', 'Laravel', 'Auth', 'Reports'],
    image: projectGraphicDesigner,
    link: 'https://graphic-designer-livid.vercel.app/',
  },
  {
    title: 'E-commerce Admin Panel',
    description:
      'لوحة تحكم للتجارة الالكترونية مع إدارة المنتجات والمخزون والطلبات بشكل لحظي.',
    stack: ['React', 'Node', 'Analytics', 'RBAC'],
    image: `${imageBase}/photo-1519389950473-47ba0277781c?${imageParams}`,
    link: '#',
  },
  {
    title: 'Booking System',
    description:
      'نظام حجوزات متعدد الخدمات مع تدفقات دفع، إشعارات، وتقارير تشغيلية.',
    stack: ['React', 'Laravel', 'Payments', 'Notifications'],
    image: `${imageBase}/photo-1504384308090-c894fdcc538d?${imageParams}`,
    link: '#',
  },
]

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">MK Portfolio</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme(nextTheme)}
        >
          <span className="theme-indicator" aria-hidden="true" />
          {nextTheme} mode
        </button>
      </header>

      <main>
        <Hero />

        <section className="about" id="about">
          <div className="section-heading reveal" style={{ '--delay': '0.1s' }}>
            <p className="eyebrow">About</p>
            <h2>Crafting products with clarity, speed, and care.</h2>
          </div>
          <div className="about-grid">
            <div className="about-card reveal" style={{ '--delay': '0.2s' }}>
              <h3>Fullstack Software Engineer</h3>
              <p>
                I bring ideas to life by pairing React frontends with Laravel
                backends. From concept to deployment, I focus on clean
                architecture and delightful UX.
              </p>
            </div>
            <div className="about-card reveal" style={{ '--delay': '0.3s' }}>
              <h3>What I deliver</h3>
              <ul>
                <li>Interface design systems and component libraries</li>
                <li>API design, authentication, and performance tuning</li>
                <li>Collaborative product delivery with agile teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-heading reveal" style={{ '--delay': '0.1s' }}>
            <p className="eyebrow">Projects</p>
            <h2>Selected work with a focus on impact.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card reveal"
                style={{ '--delay': `${0.15 + index * 0.1}s` }}
              >
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-overlay">
                    <a 
                      className="project-cta" 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project
                    </a>
                  </div>
                </div>
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open live demo"
                    >
                      <span className="icon" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                    <a 
                      href={project.github || '#'} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                    >
                      <span className="icon" aria-hidden="true">
                        {'</>'}
                      </span>
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-card reveal" style={{ '--delay': '0.1s' }}>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something people remember.</h2>
              <p>
                Tell me about your product vision, timeline, and goals. I&apos;ll
                respond with a clear plan and next steps.
              </p>
            </div>
            <div className="contact-actions">
              <div className="contact-detail">
                <span>Phone</span>
                <strong>01000965504</strong>
              </div>
              <a className="btn primary" href="tel:01000965504">
                Call now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
