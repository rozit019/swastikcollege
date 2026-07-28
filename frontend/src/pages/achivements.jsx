import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Achievements() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Swastik College — Achievements";
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

  const achievements = [
    {
      cat: "tech",
      year: "2026",
      img: "/images/hack.jpg",
      title: "National Hackathon Champions",
      desc: "A 24-hour build sprint against 40+ college teams from across Nepal, judged on real-world impact and execution.",
      badge: "Champions",
      icon: "fas fa-trophy",
    },
    {
      cat: "tech",
      year: "2026",
      img: "/images/fest.jpg",
      title: "CSIT Goal Fest — Best Project",
      desc: "Recognized for the strongest final-year capstone project across all participating CSIT programs.",
      badge: "Winner",
      icon: "fas fa-medal",
    },
    {
      cat: "sports",
      year: "2025",
      img: "/images/inter.jpg",
      title: "Inter-College Sports Meet",
      desc: "Strong showing across football, basketball, and athletics against rival colleges in the valley.",
      badge: "Runners Up",
      icon: "fas fa-award",
    },
    {
      cat: "sports",
      year: "2024",
      img: "/images/sports.jpg",
      title: "Sports Fest 2024",
      desc: "Our annual flagship sports event, drawing teams from sister institutes across the Mega Education Network.",
      badge: "Champions",
      icon: "fas fa-trophy",
    },
    {
      cat: "academic",
      year: "2024",
      img: "/images/it.jpg",
      title: "Best Undergraduate Research Paper",
      desc: "A B.Sc. CSIT student's 6th-semester research was selected for publication at a national IT conference.",
      badge: "Published",
      icon: "fas fa-medal",
    },
    {
      cat: "academic",
      year: "2023",
      img: "/images/graduation.jpg",
      title: "Highest TU Board Results",
      desc: "Swastik graduates posted the highest average pass percentage among affiliated colleges that year.",
      badge: "Distinction",
      icon: "fas fa-star",
    },
    {
      cat: "cultural",
      year: "2023",
      img: "/images/teacher.jpg",
      title: "Inter-College Cultural Fest",
      desc: "Best overall performance award for choreography and music at the annual cultural exchange.",
      badge: "Best Overall",
      icon: "fas fa-award",
    },
    {
      cat: "tech",
      year: "2022",
      img: "/images/workshop.jpg",
      title: "National Coding Olympiad",
      desc: "A three-member team placed in the top 3 out of 60+ competing colleges in a nationwide algorithms contest.",
      badge: "2nd Place",
      icon: "fas fa-medal",
    },
    {
      cat: "sports",
      year: "2021",
      img: "/images/ad.jpg",
      title: "Valley Futsal Championship",
      desc: "Swastik's team went undefeated through the group stage on the way to the final.",
      badge: "Champions",
      icon: "fas fa-trophy",
    },
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "academic", label: "Academic" },
    { key: "tech", label: "Technology" },
    { key: "sports", label: "Sports" },
    { key: "cultural", label: "Cultural" },
  ];

  const filteredAchievements =
    activeFilter === "all"
      ? achievements
      : achievements.filter((a) => a.cat === activeFilter);

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section
        className="achievements-hero"
        style={{
          backgroundImage: "url(/images/fest.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="page-hero-container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span className="current">Achievements</span>
          </div>
          <h1>
            A Legacy Built on <span>Winning</span>
          </h1>
          <p>
            From national hackathons to inter-college sports championships,
            Swastik College students consistently prove that excellence is a
            habit, not an accident.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="stats-strip-inner">
          <div className="stat-block">
            <div className="stat-number">40+</div>
            <div className="stat-label">Awards Won</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">12</div>
            <div className="stat-label">Hackathon Titles</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">8</div>
            <div className="stat-label">Sports Championships</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">13+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
        </div>
      </section>

      {/* Achievement Gallery */}
      <section className="achievement-gallery">
        <div className="section-header fade-in">
          <span className="section-tag">Our Record</span>
          <h2>
            Recognitions & <span>Milestones</span>
          </h2>
          <p>
            A closer look at the competitions, titles, and honors earned by
            Swastik students and faculty across academics, technology, sports,
            and culture.
          </p>
        </div>

        <div className="filters fade-in">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="achv-grid">
          {filteredAchievements.map((a, i) => (
            <div className="achv-card fade-in" key={i} data-cat={a.cat}>
              <div className="achv-image">
                <span className="achv-cat">{a.cat}</span>
                <span className="achv-year-badge">{a.year}</span>
                <img src={a.img} alt={a.title} loading="lazy" />
              </div>
              <div className="achv-body">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <span className="achv-badge">
                  <i className={a.icon}></i> {a.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="section-header fade-in">
          <span className="section-tag">Through The Years</span>
          <h2>
            Our Journey of <span>Excellence</span>
          </h2>
          <p>
            A timeline of the moments that shaped Swastik College's reputation.
          </p>
        </div>

        <div className="timeline">
          {[
            {
              year: "2026",
              title: "National Hackathon Champions",
              desc: "Our strongest technical showing yet — first place against 40+ teams nationwide.",
            },
            {
              year: "2024",
              title: "Highest TU Board Pass Rate",
              desc: "Swastik graduates recorded the highest average results among affiliated colleges.",
            },
            {
              year: "2022",
              title: "Top 3 — National Coding Olympiad",
              desc: "First podium finish in a nationwide competitive programming contest.",
            },
            {
              year: "2018",
              title: "First Inter-College Sports Title",
              desc: "Swastik's football and athletics teams brought home the college's first sports championship.",
            },
            {
              year: "2013",
              title: "Swastik College Founded",
              desc: "Opened its doors with a mission to build industry-ready IT graduates in Nepal.",
            },
          ].map((item, i) => (
            <div className="timeline-item fade-in" key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">{item.year}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="achievements-cta">
        <div className="achievements-cta-box fade-in">
          <h2>Want To Add Your Name To This List?</h2>
          <p>
            Join a college where ambition is the norm, not the exception.
            Admissions open for 2026 intake.
          </p>
          <div className="achievements-cta-buttons">
            <Link to="/online-enquiry" className="btn-primary">
              <i className="fas fa-file-alt"></i> Apply Now
            </Link>
            <Link to="/" className="btn-secondary">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
