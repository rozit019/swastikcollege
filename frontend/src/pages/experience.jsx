import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api/experiences";

const categories = [
  { key: "all", label: "All" },
  { key: "Sports", label: "Sports" },
  { key: "Tech & Hackathons", label: "Tech & Hackathons" },
  { key: "Culture & Fests", label: "Culture & Fests" },
  { key: "Academic", label: "Academic" },
];

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  // Fetch from backend on mount
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch experiences:", err);
        setLoading(false);
      });
  }, []);

  // Re-trigger fade-in animations when filter or data changes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const els = document.querySelectorAll(".fade-in");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter, experiences]);

  const filtered =
    activeFilter === "all"
      ? experiences
      : experiences.filter((c) => c.category === activeFilter);

  const formatDate = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <span className="eyebrow">Life at Swastik</span>
        <h1>The Swastik Experience</h1>
        <p>
          More than lectures and labs — a full calendar of fests, competitions,
          workshops, and celebrations that shape every student's journey.
        </p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; Experience
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="filter-bar">
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-tab${
                activeFilter === cat.key ? " active" : ""
              }`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Full Gallery */}
      <section className="experience-full" ref={sectionRef}>
        {loading ? (
          <div
            className="gallery-grid-full"
            style={{ textAlign: "center", padding: "4rem", color: "#666" }}
          >
            <p>Loading experiences...</p>
          </div>
        ) : (
          <div className="gallery-grid-full">
            {filtered.length === 0 ? (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "4rem",
                  color: "#666",
                }}
              >
                <p>No experiences found in this category.</p>
              </div>
            ) : (
              filtered.map((card) => (
                <div
                  key={card._id}
                  className="gallery-card fade-in"
                  data-cat={card.category}
                >
                  <img src={card.imageUrl} alt={card.title} loading="lazy" />
                  <span className="cat-badge">{card.category}</span>
                  <div className="gallery-overlay">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="meta">
                      <i className="fas fa-calendar"></i>{" "}
                      {formatDate(card.date)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {!loading && experiences.length > 6 && (
          <div className="load-more">
            <button type="button">Load More Moments</button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-container fade-in">
          <h2>Come Live The Experience</h2>
          <p>
            From coding to cricket, there's a place for you at Swastik College.
            Explore our programs and join a campus that never stops moving.
          </p>
          <div className="cta-buttons">
            <Link to="/#programs" className="btn btn-primary">
              <i className="fas fa-book-open"></i> Explore Programs
            </Link>
            <Link to="/#contact" className="btn btn-secondary">
              <i className="fas fa-phone"></i> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
