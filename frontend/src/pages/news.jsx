import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewsNotice() {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Swastik College — News & Notices";
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
  }, [activeTab]);

  // Stagger animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".notice-card");
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.08}s`;
    });
  }, [activeTab]);

  const notices = [
    {
      id: 1,
      category: "notice",
      title: "Second Semester Examination Routine Published",
      date: "July 22, 2026",
      excerpt:
        "The examination section has published the routine for the second semester examinations for BCA and B.Sc. CSIT programs. Students are advised to check their exam centers.",
      tag: "Examination",
      icon: "fas fa-file-alt",
      link: "#",
    },
    {
      id: 2,
      category: "notice",
      title: "Notice Regarding Fee Submission Deadline",
      date: "July 18, 2026",
      excerpt:
        "All students are hereby informed to submit their semester fees before the deadline to avoid late fee charges. Contact the accounts office for queries.",
      tag: "Administration",
      icon: "fas fa-bullhorn",
      link: "#",
    },
    {
      id: 3,
      category: "notice",
      title: "Admission Open for New Batch (BCA & B.Sc. CSIT)",
      date: "July 10, 2026",
      excerpt:
        "Swastik College invites applications for the upcoming academic year. Interested candidates can collect the admission form from the college premises or apply online.",
      tag: "Admission",
      icon: "fas fa-user-graduate",
      link: "#",
    },
    {
      id: 4,
      category: "notice",
      title: "Class Suspension Notice Due to Public Holiday",
      date: "July 5, 2026",
      excerpt:
        "Regular classes will remain suspended on the occasion of the public holiday. Classes will resume as per the normal routine from the following day.",
      tag: "General",
      icon: "fas fa-calendar-times",
      link: "#",
    },
  ];

  const news = [
    {
      id: 1,
      category: "news",
      title: "Swastik College Students Win Inter-College Hackathon",
      date: "July 20, 2026",
      excerpt:
        "A team of BCA students secured first position at the national inter-college hackathon, developing an innovative solution for local business digitization.",
      image: "/images/hackathon.jpg",
      tag: "Achievement",
    },
    {
      id: 2,
      category: "news",
      title: "F1Soft Industry Interaction Program Held Successfully",
      date: "July 14, 2026",
      excerpt:
        "Senior engineers from F1Soft visited the college to interact with students, sharing insights on industry trends and career opportunities in software development.",
      image: "/images/f1soft-visit.jpg",
      tag: "Industry Visit",
    },
    {
      id: 3,
      category: "news",
      title: "Annual Tech Fest 'Swastik Innovate' Announced",
      date: "July 2, 2026",
      excerpt:
        "The college has announced the dates for its annual technology festival, featuring project exhibitions, coding competitions, and guest lectures from IT leaders.",
      image: "/images/techfest.jpg",
      tag: "Event",
    },
  ];

  const allItems = [...notices, ...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const filteredItems =
    activeTab === "all"
      ? allItems
      : activeTab === "notice"
        ? notices
        : news;

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        <div className="page-hero-content">
          <h1>
            News & <span>Notices</span>
          </h1>
          <p>
            Stay updated with the latest announcements, examination routines,
            events, and achievements from Swastik College.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right"></i>
            <span>News & Notices</span>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="notice-filter-section">
        <div className="welcome-container">
          <div className="notice-tabs fade-in">
            <button
              className={`notice-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              <i className="fas fa-layer-group"></i> All
            </button>
            <button
              className={`notice-tab ${activeTab === "notice" ? "active" : ""}`}
              onClick={() => setActiveTab("notice")}
            >
              <i className="fas fa-bullhorn"></i> Notices
            </button>
            <button
              className={`notice-tab ${activeTab === "news" ? "active" : ""}`}
              onClick={() => setActiveTab("news")}
            >
              <i className="fas fa-newspaper"></i> News
            </button>
          </div>
        </div>
      </section>

      {/* Notice / News Grid */}
      <section className="why-us">
        <div className="why-container">
          <div className="why-header fade-in">
            <div className="section-tag">
              <i className="fas fa-rss"></i> Latest Updates
            </div>
            <h2>
              Announcements & <span>Updates</span>
            </h2>
            <p>
              Everything you need to know — from exam routines to campus
              achievements — all in one place.
            </p>
          </div>

          <div className="why-grid notice-grid">
            {filteredItems.map((item, i) => (
              <div className="why-card notice-card fade-in scale-in" key={`${item.category}-${item.id}`}>
                <div className="why-icon">
                  <i className={item.icon || "fas fa-newspaper"}></i>
                </div>
                <div className="notice-meta">
                  <span className="notice-tag">{item.tag}</span>
                  <span className="notice-date">
                    <i className="fas fa-calendar-alt"></i> {item.date}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                {item.link && (
                  <a href={item.link} className="notice-readmore">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tribhuvan University Portal */}
      <section className="tu-portal-section">
        <div className="vm-container">
          <div className="vm-header fade-in">
            <div className="section-tag">
              <i className="fas fa-university"></i> Affiliated University
            </div>
            <h2>
              Tribhuvan University <span>Portal</span>
            </h2>
            <p>
              Swastik College's programs (B.Sc. CSIT & BCA) are affiliated to
              Tribhuvan University. Visit the official portal below for
              university-wide notices, exam results, and academic calendars.
            </p>
          </div>

          <div className="tu-iframe-wrapper fade-in scale-in">
            <iframe
              src="https://tu.edu.np"
              title="Tribhuvan University Official Website"
              width="100%"
              height="650"
              style={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              loading="lazy"
              allowFullScreen
            ></iframe>
            <p className="tu-iframe-note">
              <i className="fas fa-info-circle"></i> If the portal doesn't load
              above, some browsers/university security settings may block
              embedding. You can{" "}
              <a href="https://tu.edu.np" target="_blank" rel="noopener noreferrer">
                visit tu.edu.np directly
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsNotice;