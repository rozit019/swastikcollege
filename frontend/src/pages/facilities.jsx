import { useEffect } from "react";
import { Link } from "react-router-dom";

function Facilities() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Swastik College — Facilities";
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
    const cards = document.querySelectorAll(".facility-card");
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
    });
  }, []);

  const facilities = [
    {
      icon: "fas fa-laptop-code",
      title: "Modern Computer Labs",
      desc: "Fully equipped computer labs with high-performance systems, updated software, and high-speed internet for practical and project work.",
      image: "/images/computerlab.jpg",
    },
    {
      icon: "fas fa-book-reader",
      title: "Well-Stocked Library",
      desc: "A rich collection of textbooks, reference materials, journals, and digital resources supporting both CSIT and BCA curricula.",
      image: "/images/library.jpg",
    },
    {
      icon: "fas fa-wifi",
      title: "Campus-Wide Wi-Fi",
      desc: "High-speed wireless internet available throughout the campus, enabling seamless research, online learning, and collaboration.",
      image: "/images/wifi.jpg",
    },
    {
      icon: "fas fa-flask",
      title: "Project & Innovation Lab",
      desc: "A dedicated space where students build real-world projects, prototypes, and startup ideas under mentor guidance.",
      image: "/images/innovation-lab.jpg",
    },
    {
      icon: "fas fa-utensils",
      title: "Cafeteria",
      desc: "An on-campus cafeteria offering hygienic and affordable food, providing a comfortable space for students to relax between classes.",
      image: "/images/cafeteria.jpg",
    },
    {
      icon: "fas fa-futbol",
      title: "Sports & Recreation",
      desc: "Indoor and outdoor recreational facilities encouraging students to stay active and maintain a healthy college life balance.",
      image: "/images/sport.jpg",
    },
    {
      icon: "fas fa-shield-alt",
      title: "CCTV & Security",
      desc: "24/7 monitored campus with CCTV surveillance and security personnel ensuring a safe environment for everyone.",
      image: "/images/security.jpg",
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
            Our <span>Facilities</span>
          </h1>
          <p>
            World-class infrastructure and resources designed to support
            academic excellence, practical learning, and campus life.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Facilities</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="about-welcome" id="facilities">
        <div className="welcome-container">
          <div className="welcome-content fade-in-left">
            <div className="section-tag">
              <i className="fas fa-building"></i> Infrastructure
            </div>
            <h2>
              Built for <span>Learning & Growth</span>
            </h2>
            <p className="lead">
              At Swastik College, we believe a strong learning environment
              goes hand-in-hand with strong infrastructure. From modern
              computer labs to recreational spaces, every facility is
              designed to support the holistic development of our students.
            </p>
            <p>
              Our campus at Chardobato, Gattaghar, Bhaktapur is equipped with
              the resources needed to help students not only excel
              academically but also thrive personally and professionally
              throughout their college journey.
            </p>
          </div>

          <div className="welcome-images fade-in-right">
            <div className="experience-badge">
              <span className="years">9+</span>
              <span className="text">Facilities</span>
            </div>
            <div className="welcome-img main">
              <img src="/images/campus-main.jpg" alt="Campus" />
              <div className="img-caption">
                <i className="fas fa-map-marker-alt"></i> Chardobato, Gattaghar,
                Bhaktapur
              </div>
            </div>
            <div className="welcome-img">
              <img src="/images/lab.jpg" alt="Computer Lab" />
            </div>
            <div className="welcome-img">
              <img src="/images/library.jpg" alt="Library" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="why-us">
        <div className="why-container">
          <div className="why-header fade-in">
            <div className="section-tag">
              <i className="fas fa-th-large"></i> What We Offer
            </div>
            <h2>
              Campus <span>Facilities</span>
            </h2>
            <p>
              Explore the range of facilities available to every Swastik
              College student, faculty member, and staff on campus.
            </p>
          </div>

          <div className="why-grid facility-grid">
            {facilities.map((item, i) => (
              <div className="why-card facility-card fade-in scale-in" key={i}>
                <div className="facility-img">
                  <img src={item.image} alt={item.title} />
                  <div className="facility-overlay">
                    <i className={item.icon}></i>
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Facilities;