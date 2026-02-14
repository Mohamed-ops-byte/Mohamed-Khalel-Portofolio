const Contact = () => {
  return (
    <section id="contact">
      <div className="container reveal">
        <h2 className="section-title">Contact</h2>
        <p className="section-lead">
          Tell me about your product, timeline, and scope. I respond quickly.
        </p>
        <div className="contact-grid">
          <div className="card">
            <h3>Start a project</h3>
            <p>
              I am available for full-time roles, product builds, or consulting
              work.
            </p>
            <p>
              Email: hello@mohamedkhalel.com
              <br />
              Location: Remote or Cairo
            </p>
          </div>
          <form className="card">
            <input className="input" placeholder="Name" type="text" />
            <input className="input" placeholder="Email" type="email" />
            <textarea className="input" placeholder="Project details" />
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
