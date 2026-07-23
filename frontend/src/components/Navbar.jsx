import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero");
      if (!hero) {
        setVisible(true);
        return;
      }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setVisible(window.scrollY > heroBottom - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = (e, hash) => {
    if (location.pathname === "/" && hash) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img
            src="/images/logo.png"
            alt="Swastik College"
            className="logo-img"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "flex";
            }}
          />
          <span
            style={{
              display: "none",
              fontFamily: '"Playfair Display", serif',
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Swastik<span style={{ color: "var(--text)" }}>College</span>
          </span>
        </Link>

        <ul className={`nav-links ${mobileOpen ? "active" : ""}`} id="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => handleNavClick(e, "#whyus")}>
              Why Us
            </Link>
          </li>
          <li>
            <Link to="/news">News & Notices</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/downloads">Downloads</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/online-enquiry" className="btn-nav">
              Online Enquiry
            </Link>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          id="mobileMenuBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
