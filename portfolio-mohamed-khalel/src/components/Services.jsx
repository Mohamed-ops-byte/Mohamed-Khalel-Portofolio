const Services = () => {
  const services = [
    {
      title: "Fullstack MVPs",
      description:
        "Launch-ready products with React, Node.js, and modern tooling.",
    },
    {
      title: "Design systems",
      description:
        "Consistent UI kits, scalable components, and accessible patterns.",
    },
    {
      title: "Backend engineering",
      description:
        "Secure APIs, data modeling, integrations, and performance tuning.",
    },
  ];

  return (
    <section id="services">
      <div className="container reveal">
        <h2 className="section-title">Services</h2>
        <p className="section-lead">
          Modular services that help you go from idea to launch with confidence.
        </p>
        <div className="card-grid">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
