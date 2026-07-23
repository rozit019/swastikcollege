import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  // Typing animation
  useEffect(() => {
    const textToType = "Developing Industry Ready Graduates";
    const typingElement = document.getElementById("typingText");
    if (!typingElement) return;

    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let timer;

    function typeText() {
      if (!isDeleting && charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        typingSpeed = 100;
        if (charIndex === textToType.length) {
          typingSpeed = 3000;
          isDeleting = true;
        }
      } else if (isDeleting && charIndex > 0) {
        typingElement.textContent = textToType.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
        if (charIndex === 0) {
          isDeleting = false;
          typingSpeed = 500;
        }
      }
      timer = setTimeout(typeText, typingSpeed);
    }

    const startTimer = setTimeout(typeText, 800);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, []);

  // Slideshow
  useEffect(() => {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".slide-dot");
    let currentSlide = 0;
    const slideInterval = 5000;

    function showSlide(index) {
      slides.forEach((slide, i) =>
        slide.classList.toggle("active", i === index),
      );
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
      currentSlide = index;
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }

    const timer = setInterval(nextSlide, slideInterval);
    window.goToSlide = (index) => {
      showSlide(index);
      clearInterval(timer);
      setInterval(nextSlide, slideInterval);
    };

    return () => clearInterval(timer);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="hero-slideshow">
          <div
            className="hero-slide active"
            style={{ backgroundImage: "url(/images/wow.png)" }}
          ></div>
          <div
            className="hero-slide"
            style={{ backgroundImage: "url(/images/hero.jpg)" }}
          ></div>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80)",
            }}
          ></div>
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">
            <h1>
              <span className="typing-text" id="typingText"></span>
              <span className="typing-cursor" id="typingCursor"></span>
            </h1>
            <p className="hero-subtitle">
              One of Nepal's best IT colleges. Offering BCA and B.Sc. CSIT with
              100% job placement, industry partnerships, and world-class lab
              facilities.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">13+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Placement</div>
              </div>
              <div className="stat">
                <div className="stat-number">TU</div>
                <div className="stat-label">Affiliated</div>
              </div>
            </div>

            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary">
                <i className="fas fa-book-open"></i>
                Explore Programs
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <i className="fas fa-phone"></i>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="slide-indicators">
          <button
            className="slide-dot active"
            onClick={() => window.goToSlide?.(0)}
          ></button>
          <button
            className="slide-dot"
            onClick={() => window.goToSlide?.(1)}
          ></button>
          <button
            className="slide-dot"
            onClick={() => window.goToSlide?.(2)}
          ></button>
        </div>

        <a
          href="#experience"
          className="scroll-down"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#experience")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>Experience More</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </section>

      {/* ========== EXPERIENCE GALLERY ========== */}
      <section className="experience" id="experience">
        <div className="experience-header fade-in">
          <h2>
            The Swastik <span>Experience</span>
          </h2>
          <p>
            A college experience transcends beyond just classrooms and lecture
            theatres. Celebrate our fun-filled events throughout the academic
            year. Come and live the Swastik Experience!
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item large fade-in">
            <img src="/images/sports.jpg" alt="Sports Fest" />
            <div className="gallery-overlay">
              <h3>Sports Fest 2024</h3>
              <p>
                Annual inter-college sports competition fostering teamwork,
                leadership, and physical fitness among students.
              </p>
            </div>
          </div>
          <div className="gallery-item fade-in">
            <img src="/images/teacher.jpg" alt="Teacher's Day" />
            <div className="gallery-overlay">
              <h3>Teacher's Day Celebration</h3>
              <p>
                Showing appreciation for our educators and their contributions.
              </p>
            </div>
          </div>
          <div className="gallery-item fade-in">
            <img src="/images/workshop.jpg" alt="Workshop" />
            <div className="gallery-overlay">
              <h3>Tech Workshop</h3>
              <p>Hands-on sessions with industry experts.</p>
            </div>
          </div>
          <div className="gallery-item wide fade-in">
            <img src="/images/graduation.jpg" alt="Graduation" />
            <div className="gallery-overlay">
              <h3>Graduation Day</h3>
              <p>
                Celebrating the achievements of our graduates as they step into
                the professional world.
              </p>
            </div>
          </div>
        </div>

        <div className="see-more fade-in">
          <Link to="/gallery">
            See More <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>

      {/* ========== ACHIEVEMENTS ========== */}
      <section className="achievements" id="whyus">
        <div className="achievements-container">
          <div className="achievements-text fade-in">
            <h2>
              The Swastik <span>Achievement</span>
            </h2>
            <p>
              Instilling a school of thought obsessed with winning and
              persevering through all odds is our relentless pursuit. From
              national coding competitions to inter-college sports
              championships, our students consistently prove that excellence is
              a habit at Swastik College.
            </p>
            <Link to="/achievements" className="see-more-link">
              See More <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
          <div className="achievements-images">
            <div className="achievement-img fade-in">
              <img src="/images/fest.jpg" alt="Winners" />
              <div className="img-overlay">
                <h3>Csit goal fest</h3>
                <div className="winner-badge">Winner</div>
              </div>
            </div>
            <div className="achievement-img fade-in">
              <img src="/images/hack.jpg" alt="Hackathon" />
              <div className="img-overlay">
                <h3>National Hackathon</h3>
                <div className="winner-badge">Champions</div>
              </div>
            </div>
            <div className="achievement-img fade-in">
              <img src="/images/inter.jpg" alt="Sports" />
              <div className="img-overlay">
                <h3>Inter College Sports</h3>
                <div className="winner-badge">Runners Up</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COURSES ========== */}
      <section className="courses" id="programs">
        <div className="section-header fade-in">
          <h2>Browse Our Courses</h2>
          <p>
            At Swastik College, we offer dynamic programs in B.Sc. CSIT, BCA and
            BIT, affiliated with Tribhuvan University (TU). Our courses are
            designed to empower students with the skills and knowledge necessary
            for success in today's competitive IT world.
          </p>
        </div>

        <div className="courses-grid">
          <div className="course-card fade-in">
            <div className="course-image">
              <img src="/images/it.jpg" alt="B.Sc. CSIT" />
            </div>
            <div className="course-body">
              <h3>
                Bachelor of Computer Science and Information Technology (B.Sc.
                CSIT)
              </h3>
              <div className="course-divider"></div>
              <div className="course-stats">
                <div className="course-stat">
                  <i className="fas fa-user"></i>
                  <span>550+ Students</span>
                </div>
                <div className="course-stat">
                  <i className="fas fa-graduation-cap"></i>
                  <span>7 Graduated Batch</span>
                </div>
              </div>
            </div>
          </div>

          <div className="course-card fade-in">
            <div className="course-image">
              <img src="/images/bca.jpg" alt="BCA" />
            </div>
            <div className="course-body">
              <h3>Bachelor of Computer Application (BCA)</h3>
              <div className="course-divider"></div>
              <div className="course-stats">
                <div className="course-stat">
                  <i className="fas fa-user"></i>
                  <span>400+ Students</span>
                </div>
                <div className="course-stat">
                  <i className="fas fa-graduation-cap"></i>
                  <span>5 Graduated Batch</span>
                </div>
              </div>
            </div>
          </div>

          <div className="course-card fade-in">
            <div className="course-image">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                alt="BIT"
              />
            </div>
            <div className="course-body">
              <h3>Bachelor of Information Technology (BIT)</h3>
              <div className="course-divider"></div>
              <div className="course-stats">
                <div className="course-stat">
                  <i className="fas fa-user"></i>
                  <span>200+ Students</span>
                </div>
                <div className="course-stat">
                  <i className="fas fa-graduation-cap"></i>
                  <span>3 Graduated Batch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PARTNERS ========== */}
      <section className="partners" id="partners">
        <div className="partners-container">
          <div className="partners-text fade-in">
            <h2>
              Our <span>Trusted Partners</span>
            </h2>
            <p>
              Our trusted partners play a pivotal role in enhancing the
              educational experience at Swastik College. Through strong
              collaborations, we provide students with valuable resources,
              industry insights, and opportunities for growth, ensuring a
              well-rounded and future-ready education.
            </p>
          </div>

          <div className="partners-logos fade-in">
            <div className="partner-logo-card">
              <img
                src="/images/f1.png"
                alt="F1Soft"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/150x60/c41e3a/ffffff?text=F1Soft")
                }
              />
            </div>
            <div className="partner-logo-card">
              <img
                src="/images/esewa.png"
                alt="eSewa"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/150x60/48bb78/ffffff?text=eSewa")
                }
              />
            </div>
            <div className="partner-logo-card">
              <img
                src="/images/megabank.png"
                alt="Mega Bank"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/150x60/1e6f9e/ffffff?text=Mega+Bank")
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== INFRASTRUCTURE ========== */}
      <section className="infrastructure">
        <div className="section-header fade-in">
          <h2>Our Infrastructural Assets</h2>
        </div>

        <div className="infrastructure-grid">
          <div className="infra-item fade-in">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80"
              alt="Classroom"
            />
          </div>
          <div className="infra-item fade-in">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&q=80"
              alt="Library"
            />
          </div>
          <div className="infra-item fade-in">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80"
              alt="Campus"
            />
          </div>
          <div className="infra-item fade-in">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80"
              alt="Cafeteria"
            />
          </div>
        </div>

        <div className="infra-cta fade-in">
          <Link to="/facilities">
            View Our Facilities <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>

      {/* ========== IT CLUB ========== */}
      <section className="it-club">
        <div className="section-header fade-in">
          <h2>
            Swastik <span>IT Club</span>
          </h2>
          <p>
            A student-led community fostering innovation, technical skills, and
            collaboration through workshops, hackathons, and hands-on projects.
          </p>
        </div>

        <div className="it-club-container">
          <div className="it-club-left fade-in">
            <div className="club-logo">
              <img
                src="/images/itclub.png"
                alt="Swastik IT Club"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.querySelector(
                    ".club-logo-fallback",
                  ).style.display = "flex";
                }}
              />
              <div className="club-logo-fallback" style={{ display: "none" }}>
                <i className="fas fa-code"></i>
              </div>
            </div>
            <h3>Swastik IT Club</h3>
            <p>
              Empowering students with cutting-edge technology skills through
              practical learning, peer collaboration, and industry exposure.
            </p>
          </div>

          <div className="club-divider"></div>

          <div className="it-club-right">
            <div className="workshop-grid">
              {[
                {
                  icon: "fas fa-paint-brush",
                  title: "UI/UX Design",
                  desc: "Learn modern design principles and tools",
                },
                {
                  icon: "fab fa-js",
                  title: "JavaScript",
                  desc: "Full-stack JavaScript development",
                },
                {
                  icon: "fab fa-linux",
                  title: "Linux Fundamentals",
                  desc: "Command line and system basics",
                },
                {
                  icon: "fab fa-redhat",
                  title: "Red Hat System Admin",
                  desc: "Enterprise Linux administration",
                },
                {
                  icon: "fab fa-html5",
                  title: "HTML & CSS",
                  desc: "Web development fundamentals",
                },
                {
                  icon: "fab fa-node-js",
                  title: "Node.js",
                  desc: "Backend development with Node",
                },
                {
                  icon: "fab fa-python",
                  title: "Python Programming",
                  desc: "Data science and automation",
                },
                {
                  icon: "fab fa-git-alt",
                  title: "Version Control with Git",
                  desc: "Collaborative coding workflows",
                },
              ].map((w, i) => (
                <div className="workshop-card fade-in" key={i}>
                  <div className="workshop-image">
                    <i className={w.icon}></i>
                  </div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>

            <div className="workshop-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEWS & NOTICES ========== */}
      <section className="news-notices" id="news">
        <div className="section-header fade-in">
          <span className="section-tag">Updates</span>
          <h2>News & Notices</h2>
          <p>
            Stay informed with the latest announcements, events, and important
            updates from Swastik College.
          </p>
        </div>

        <div className="news-container">
          <div className="news-featured fade-in">
            <div className="featured-image">
              <img src="/images/ad.jpg" alt="Featured News" />
              <div className="featured-badge">Featured</div>
            </div>
            <div className="featured-content">
              <div className="news-date">
                <i className="fas fa-calendar-alt"></i>
                <span>July 20, 2026</span>
              </div>
              <h3>Admission Open for 2026 Intake — BCA, B.Sc. CSIT & BIT</h3>
              <p>
                Applications are now open for the 2026 academic session. Secure
                your seat in Nepal's leading IT programs with 100% placement
                support.
              </p>
              <Link to="/news/admission-2026" className="read-more">
                Read More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="notice-list">
            {[
              {
                day: "15",
                month: "JUL",
                title: "Final Exam Schedule Published",
                desc: "The end-semester examination timetable for all programs is now available on the student portal.",
              },
              {
                day: "12",
                month: "JUL",
                title: "Workshop on React & Node.js",
                desc: "A hands-on workshop by industry experts this Friday. Limited seats — register now.",
              },
              {
                day: "10",
                month: "JUL",
                title: "Sports Fest 2026 Registration",
                desc: "Inter-college sports competition registrations close on July 25. Form your teams today.",
              },
              {
                day: "08",
                month: "JUL",
                title: "Library Timing Extended",
                desc: "College library will now remain open until 8 PM on weekdays for semester preparation.",
              },
            ].map((n, i) => (
              <div className="notice-item fade-in" key={i}>
                <div className="notice-date">
                  <span className="day">{n.day}</span>
                  <span className="month">{n.month}</span>
                </div>
                <div className="notice-content">
                  <h4>{n.title}</h4>
                  <p>{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="news-cta fade-in">
          <Link to="/news">
            View All Notices <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>

      {/* ========== SISTER INSTITUTES ========== */}
      <section className="sister-institutes">
        <div className="section-header fade-in">
          <span className="section-tag">Our Network</span>
          <h2>Sister Institutes</h2>
          <p>
            Part of the Mega Education Network — committed to excellence across
            all levels of education in Nepal.
          </p>
        </div>

        <div className="institute-cards">
          <div className="institute-card fade-in">
            <div className="institute-image">
              <img src="/images/megc.jpg" alt="Nepal Mega College" />
            </div>
            <div className="institute-body">
              <div className="institute-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>Nepal Mega College</h3>
              <p>
                One of the renowned colleges in Kathmandu. Founded by a highly
                experienced team of teachers in association with educationists
                and vibrant entrepreneurs.
              </p>
              <div className="institute-tags">
                <span className="inst-tag">+2 Science</span>
                <span className="inst-tag">Management</span>
                <span className="inst-tag">Humanities</span>
              </div>
              <Link
                to="/sister-institutes/nepal-mega-college"
                className="institute-link"
              >
                Learn more <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="institute-card fade-in">
            <div className="institute-image">
              <img src="/images/megs.png" alt="Nepal Mega School" />
            </div>
            <div className="institute-body">
              <div className="institute-icon">
                <i className="fas fa-school"></i>
              </div>
              <h3>Nepal Mega School</h3>
              <p>
                One of the leading schools in Kathmandu. Established with a mega
                vision to provide quality education to youth from all sections
                of society at affordable cost.
              </p>
              <div className="institute-tags">
                <span className="inst-tag">Primary</span>
                <span className="inst-tag">Secondary</span>
                <span className="inst-tag">Basic Level</span>
              </div>
              <Link
                to="/sister-institutes/nepal-mega-school"
                className="institute-link"
              >
                Learn more <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="testimonials">
        <div className="section-header fade-in">
          <span className="section-tag">Student Voices</span>
          <h2>Stories From Our Students</h2>
          <p>
            Real experiences from graduates who built their careers through
            Swastik College.
          </p>
        </div>

        <div className="testimonials-grid">
          {[
            {
              name: "Rajesh K.",
              role: "BCA Graduate, Software Engineer at F1Soft",
              text: "Swastik College gave me the practical skills and industry exposure I needed. The labs are world-class and the faculty truly cares about student success. I got placed at F1Soft right after graduation.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
              fallback: "R",
            },
            {
              name: "Sunita P.",
              role: "B.Sc. CSIT Graduate, Researcher",
              text: "The research lab and paper writing guidance changed my perspective on IT. I published my first paper in my 6th semester. The mentorship here is unmatched in Nepal.",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
              fallback: "S",
            },
            {
              name: "Anish M.",
              role: "BCA Graduate, Full Stack Developer",
              text: "From day one, I felt part of a community that wanted me to succeed. The sports fests and extracurriculars kept me balanced while the academics prepared me for the real world.",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
              fallback: "A",
            },
          ].map((t, i) => (
            <div className="testimonial-card fade-in" key={i}>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, j) => (
                  <i className="fas fa-star" key={j}></i>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    src={t.img}
                    alt={t.name}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.textContent = t.fallback;
                    }}
                  />
                </div>
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="cta" id="contact">
        <div className="cta-container fade-in">
          <h2>Start Your IT Journey</h2>
          <p>
            Apply now for BCA or B.Sc. CSIT and become part of Nepal's leading
            IT education community. Admissions open for 2026 intake.
          </p>
          <div className="cta-buttons">
            <Link to="/online-enquiry" className="btn btn-primary">
              <i className="fas fa-file-alt"></i> Apply Now
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary"
              style={{ borderColor: "var(--text)", color: "var(--text)" }}
            >
              <i className="fas fa-phone"></i> Contact Us
            </Link>
            <Link to="/visit-campus" className="btn btn-secondary">
              <i className="fas fa-map-marker-alt"></i> Visit Campus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
