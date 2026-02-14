const Skills = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Docker",
    "AWS",
    "CI/CD",
    "Figma",
    "Storybook",
  ];

  return (
    <section id="skills">
      <div className="container reveal">
        <h2 className="section-title">Skills</h2>
        <p className="section-lead">
          A balanced toolkit across frontend, backend, and product design.
        </p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
