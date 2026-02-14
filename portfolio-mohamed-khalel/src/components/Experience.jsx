const Experience = () => {
  const experience = [
    {
      role: "Lead Fullstack Developer",
      company: "Nova Labs",
      period: "2023 - Present",
      detail:
        "Built scalable web platforms, led design system rollouts, and improved release velocity by 30%.",
    },
    {
      role: "Senior Frontend Engineer",
      company: "Brightside",
      period: "2021 - 2023",
      detail:
        "Delivered complex dashboards and improved core web vitals across flagship products.",
    },
    {
      role: "Fullstack Developer",
      company: "Freelance",
      period: "2018 - 2021",
      detail:
        "Partnered with founders to deliver MVPs, ecommerce platforms, and internal tools.",
    },
  ];

  return (
    <section id="experience">
      <div className="container reveal">
        <h2 className="section-title">Experience</h2>
        <p className="section-lead">
          Highlights from recent roles and long-term partnerships.
        </p>
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.role}>
              <strong>{item.role}</strong>
              <span>
                {item.company} | {item.period}
              </span>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
