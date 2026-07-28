import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Swastik College — Contact Us";
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll(".fade-in, .fade-in-left, .fade-in-right, .scale-in")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Stagger animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".contact-info-card");
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual form submission logic (API / email service)
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Location",
      lines: ["Chardobato, Thimi", "Bhaktapur, Nepal"],
      link: "https://www.google.com/maps/place/Swastik+College/@27.673874,85.3781244,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1a6de0722809:0x146c6508a0a4376!8m2!3d27.6738693!4d85.3806993!16s%2Fg%2F1pp2t_rd5?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
      linkText: "View on Map",
      external: true,
    },
    {
      icon: "fas fa-phone-alt",
      title: "Call Us",
      lines: ["01-6635174"],
      link: "tel:016635174",
      linkText: "Call Now",
      external: false,
    },
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      lines: ["contact@swastikcollege.edu.np"],
      link: "mailto:contact@swastikcollege.edu.np",
      linkText: "Send Email",
      external: false,
    },
    {
      icon: "fas fa-globe",
      title: "Website",
      lines: ["swastikcollege.edu.np"],
      link: "https://swastikcollege.edu.np",
      linkText: "Visit Website",
      external: true,
    },
  ];

  const socialLinks = [
    {
      icon: "fab fa-facebook-f",
      name: "Facebook",
      link: "https://www.facebook.com/swastikcollegeofficial",
      className: "social-facebook",
    },
    {
      icon: "fab fa-instagram",
      name: "Instagram",
      link: "https://www.instagram.com/swastik_college/",
      className: "social-instagram",
    },
  ];

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        <div className="page-hero-content">
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>
            Have a question about admissions, courses, or campus life? We'd
            love to hear from you — reach out anytime.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="why-us">
        <div className="why-container">
          <div className="why-header fade-in">
            <div className="section-tag">
              <i className="fas fa-address-book"></i> Get In Touch
            </div>
            <h2>
              Reach <span>Swastik College</span>
            </h2>
            <p>
              Choose the most convenient way to connect with us, we typically
              respond within one business day.
            </p>
          </div>

          <div className="why-grid contact-info-grid">
            {contactCards.map((item, i) => (
              <div className="why-card contact-info-card fade-in scale-in" key={i}>
                <div className="why-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                {item.lines.map((line, idx) => (
                  <p key={idx} className="contact-line">
                    {line}
                  </p>
                ))}
                <a
                  href={item.link}
                  className="contact-card-link"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.linkText} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-follow fade-in">
            <span className="social-follow-label">Follow Us:</span>
            <div className="social-icons">
              {socialLinks.map((social, i) => (
                <a
                  href={social.link}
                  key={i}
                  className={`social-icon-link ${social.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="vision-mission">
        <div className="vm-container">
          <div className="vm-header fade-in">
            <div className="section-tag">
              <i className="fas fa-paper-plane"></i> Send a Message
            </div>
            <h2>
              Let's <span>Talk</span>
            </h2>
            <p>
              Fill out the form below and our team will get back to you as
              soon as possible.
            </p>
          </div>

          <div className="vm-grid contact-form-grid">
            {/* Form */}
            <div className="vm-card contact-form-card fade-in-left">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>

                {submitted && (
                  <div className="form-success-msg">
                    <i className="fas fa-check-circle"></i> Thank you! Your
                    message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="vm-card contact-map-card fade-in-right">
              <div className="contact-map-wrapper">
                <iframe
                  title="Swastik College Location - Chardobato, Thimi"
                  src="https://www.google.com/maps?q=Swastik+College,+Chardobato,+Thimi,+Bhaktapur,+Nepal&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/place/Swastik+College/@27.6738693,85.3806993,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1a6de0722809:0x146c6508a0a4376!8m2!3d27.6738693!4d85.3806993!16s%2Fg%2F1pp2t_rd5?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link map-link"
              >
                Open in Maps <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;