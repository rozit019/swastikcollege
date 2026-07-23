import { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Swastik College — About Us";
  }, []);

  // ADD THIS — scroll animations
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
    const cards = document.querySelectorAll(".why-card");
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        <div className="page-hero-content">
          <h1>
            About <span>Swastik College</span>
          </h1>
          <p>
            Building the future of IT education in Nepal since 2013. A place
            where academic excellence meets industry readiness.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Welcome / Introduction */}
      <section className="about-welcome" id="about">
        <div className="welcome-container">
          <div className="welcome-content fade-in-left">
            <div className="section-tag">
              <i className="fas fa-graduation-cap"></i> About Us
            </div>
            <h2>
              Welcome to <span>Swastik College</span>
            </h2>
            <p className="lead">
              Swastik College, the School of Computer Science and Application,
              was founded in 2013 by a team of academicians and young
              entrepreneurs. Located at Chardobato, Gattaghar, Bhaktapur, we are
              committed to shaping the next generation of IT professionals in
              Nepal.
            </p>
            <p>
              Currently, Swastik College runs two premier IT courses affiliated
              to Tribhuvan University — <strong>B.Sc. CSIT</strong> and{" "}
              <strong>BCA</strong>. Since 2019, <strong>F1Soft</strong> has
              invested in Swastik College to bridge the gap between IT education
              and industry demands, producing highly competent professionals
              ready for the real world.
            </p>
            <p>
              We believe education must go beyond prescribed syllabi. Our
              approach integrates skill-oriented courses, business idea
              development, and hands-on industry exposure — ensuring our
              students graduate not just with certificates, but with careers.
            </p>
            <div className="welcome-stats">
              <div className="welcome-stat">
                <span className="number">13+</span>
                <span className="label">Years of Excellence</span>
              </div>
              <div className="welcome-stat">
                <span className="number">2</span>
                <span className="label">TU Programs</span>
              </div>
              <div className="welcome-stat">
                <span className="number">100%</span>
                <span className="label">Job Placement</span>
              </div>
            </div>
          </div>

          <div className="welcome-images fade-in-right">
            <div className="experience-badge">
              <span className="years">13+</span>
              <span className="text">Years</span>
            </div>
            <div className="welcome-img main">
              <img src="/images/id.jpg" />
              <div className="img-caption">
                <i className="fas fa-map-marker-alt"></i> Chardobato, Gattaghar,
                Bhaktapur
              </div>
            </div>
            <div className="welcome-img">
              <img src="/images/lab.jpg" alt="Computer Lab" />
            </div>
            <div className="welcome-img">
              <img src="/images/students.jpg" alt="Students Learning" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vm-container">
          <div className="vm-header fade-in">
            <div className="section-tag">
              <i className="fas fa-compass"></i> Our Direction
            </div>
            <h2>
              Vision & <span>Mission</span>
            </h2>
            <p>
              Guided by a clear purpose and driven by ambitious goals, we strive
              to transform IT education in Nepal.
            </p>
          </div>

          <div className="vm-grid">
            <div className="vm-card vision fade-in-left">
              <div className="vm-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To transform the college into the hub of Computer Science and
                Information Technology — both in theory and practice — in
                pursuit of knowledge for the next generation, and to advance as
                an internationally recognized academic institution.
              </p>
              <ul>
                <li>Lead IT education innovation in Nepal</li>
                <li>Build global academic recognition</li>
                <li>Create industry-ready professionals</li>
              </ul>
            </div>

            <div className="vm-card mission fade-in-right">
              <div className="vm-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                We are dedicated to academic excellence through advanced
                theories and practices, producing competent professionals and
                entrepreneurs via innovative, creative, and value-based
                education.
              </p>
              <ul>
                <li>Build a center of academic excellence</li>
                <li>Produce competent professionals & entrepreneurs</li>
                <li>
                  Develop as an R&D and incubation center for IT innovations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="why-container">
          <div className="why-header fade-in">
            <div className="section-tag">
              <i className="fas fa-star"></i> What Sets Us Apart
            </div>
            <h2>
              Why Choose <span>Swastik?</span>
            </h2>
            <p>
              We go beyond traditional education to ensure every student
              develops the skills, mindset, and network needed for a successful
              IT career.
            </p>
          </div>

          <div className="why-grid">
            {[
              {
                icon: "fas fa-briefcase",
                title: "Industry Partnership",
                desc: "Backed by F1Soft investment since 2019, our curriculum bridges the gap between classroom learning and real-world IT industry requirements.",
              },
              {
                icon: "fas fa-laptop-code",
                title: "Skill-Oriented Courses",
                desc: "We incorporate practical skill-based training beyond the university syllabus, ensuring students are job-ready from day one.",
              },
              {
                icon: "fas fa-lightbulb",
                title: "Business Incubation",
                desc: "Through enhancement programs, students develop business ideas during their 4-year course — graduating with both degrees and startups.",
              },
              {
                icon: "fas fa-building",
                title: "World-Class Infrastructure",
                desc: "Magnificent computer labs and modern facilities provide a world-class learning environment for hands-on technical education.",
              },
              {
                icon: "fas fa-globe",
                title: "Global Affiliations",
                desc: "National and international partnerships with academic institutions expand opportunities for research, exchange, and global exposure.",
              },
              {
                icon: "fas fa-users",
                title: "Student-Centric Culture",
                desc: "We encourage students to push beyond their limits, fostering intelligence, ingenuity, inventiveness, and strong communication skills.",
              },
            ].map((item, i) => (
              <div className="why-card fade-in scale-in" key={i}>
                <div className="why-icon">
                  <i className={item.icon}></i>
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

export default About;
