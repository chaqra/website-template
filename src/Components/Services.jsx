
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern, responsive websites built to perform. Engineered for a purpose, designed for your audience.",
  },
  {
    number: "02",
    title: "Branding & Design",
    description: "Memorable visual identities that make an impact and resonate with your audience.",
  },
  {
    number: "03",
    title: "PPC Advertising",
    description: "Targeted ad campaigns designed to drive results and increase conversions.",
  },
  {
    number: "04",
    title: "SEO",
    description: "Improve your visibility and reach more customers organically.",
  },
  {
    number: "05",
    title: "Graphic Design",
    description: "Creative visuals that bring your brand to life and help you stand out.",
  },
];

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-heading">
        <span className="section-label">What We Do</span>

        <h2>
          SOLUTIONS THAT <span className="gradient-text">WORK</span>.
          <br />
          CATERED TO YOUR NEEDS.
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="services-card" key={service.number}>
            <div>
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <div className="service-card-bottom">
              <span className="service-line"></span>
              <span className="service-arrow">↗</span>
            </div>
          </div>
        ))}

        {/* Last Card: Call to Action */}
        <div className="services-card services-cta">
          <div>
            <span className="cta-plus">+</span>
            <h3>Not sure where to start?</h3>
            <p>
              Tell us your goals and we'll help you
              find the right solution.
            </p>
          </div>

          <Link to="/contact" className="services-cta-btn">
            Let's Talk ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
